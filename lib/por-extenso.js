var units            = require('../asset/units')
  , dozens           = require('../asset/dozens')
  , hundreds         = require('../asset/hundreds')
  , InvalidArguments = require('./invalid-arguments')

module.exports = function (input) {
       if (input === undefined)       throw new InvalidArguments('Pass something.')
  else if (typeof input === 'string') return input.split(' ').map(porExtenso).join(' ')
  else if (typeof input === 'number') return validNumber(input) ? porExtenso(input.toString()) : input
  else throw new InvalidArguments('Not a string nor number: ' + input)
}

function porExtenso (word) {

  // if it's a string that we can make into an integer
  if (integerString(word)) word = parseInt(word)

  // if it's not a valid number we're not touching it, take it back
  if (!validNumber(word)) return word

  // 0-9
  else if (word < 10) return unit(word)

  // 10-99
  else if (word < 100) return dozen(word)

  // 100-999
  else if (word < 1000) return hundred(word)

  // > 1000 isn't supported :(
  return word.toString()

}

function integerString (input) { return /^\d+$/.test(input) }

function validNumber (input) { return typeof input === 'number' && isFinite(input) && input >= 0 }

function forceInteger (input) { return Math.floor(input) }

function unit (input) { return units[input] }

function dozen (input) {

  // 10-19
  if (input < 20) return dozens[input]

  // 20-99
  var unitPart = input % 10

  return unitPart ?

    // doesn't end with a zero
    dozens[input - unitPart] + ' e ' + units[unitPart] :

    // ends with a zero
    dozens[input]

}

function hundred (input) {

  // 100
  if (input === 100) return 'cem'

  // 101-999
  var dozenPart = input % 100

  return dozenPart ?

    // doesn't end with a double zero
    hundreds[input - dozenPart] + ' e ' + porExtenso(dozenPart) :

    // ends with a double zero
    hundreds[input]

}

