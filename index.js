'use strict'

const unitsToWord = require('./asset/units-to-word')
const unitsToNumber = require('./asset/units-to-number')
const dozensToWord = require('./asset/dozens-to-word')
const dozensToNumber = require('./asset/dozens-to-number')
const hundredsToWord = require('./asset/hundreds-to-word')
const hundredsToNumber = require('./asset/hundreds-to-number')

module.exports = function (input) {
  if (input === undefined) throw new Error('Pass something.')
  else if (typeof input === 'string') return input.split(' ').map(porExtenso).join(' ')
  else if (typeof input === 'number') return validNumber(input) ? porExtenso(input.toString()) : input
  else throw new Error(`Not a string nor number: ${input}`)
}

module.exports.parse = function (input) {
  if (input === undefined) throw new Error('Pass something.')
  else if (typeof input !== 'string') throw new Error(`Not a string: ${input}`)

  const words = input.split(' ')
  let parsed = [ ]
  let integer = null
  let and = null

  const pushInteger = () => {
    if (integer !== null) {
      parsed.push(integer)
      integer = null
    }
  }

  const pushAnd = () => {
    if (and !== null) {
      parsed.push(and)
      and = null
    }
  }

  for (let i = 0; i < words.length; ++i) {
    const word = words[i].toLowerCase()

    if (word === 'cem' || (word in hundredsToNumber)) {
      pushInteger()
      pushAnd()
      integer = word === 'cem' ? 100 : hundredsToNumber[word]
    } else if (word in dozensToNumber) {
      if (and && integer >= 100) {
        integer += dozensToNumber[word]
        and = null
      } else {
        pushInteger()
        pushAnd()
        integer = dozensToNumber[word]
      }
    } else if (word in unitsToNumber) {
      if (and && integer !== null) {
        and = null
        integer += unitsToNumber[word]
      } else {
        pushInteger()
        pushAnd()
        integer = unitsToNumber[word]
      }
      pushInteger()
    } else if (word === 'e' && integer !== null && !and) {
      and = words[i]
    } else {
      pushInteger()
      parsed.push(words[i])
    }
  }

  pushInteger()
  pushAnd()

  return parsed.join(' ')
}

function porExtenso (word) {
  if (/^\d+$/.test(word)) word = parseInt(word)

  if (!validNumber(word)) return word

  if (word < 10) return unitsToWord[word]

  if (word < 100) {
    if (word < 20) return dozensToWord[word]

    const unitPart = word % 10
    return unitPart ? `${dozensToWord[word - unitPart]} e ${unitsToWord[unitPart]}` : dozensToWord[word]
  }

  if (word < 1000) {
    if (word === 100) return 'cem'

    const dozenPart = word % 100
    return dozenPart ? `${hundredsToWord[word - dozenPart]} e ${porExtenso(dozenPart)}` : hundredsToWord[word]
  }

  return word.toString()
}

function validNumber (input) { return typeof input === 'number' && isFinite(input) && input >= 0 }
