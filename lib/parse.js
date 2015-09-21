  var _              = require('lodash')
  , units            = _.invert(require('../asset/units'))
  , dozens           = _.invert(require('../asset/dozens'))
  , hundreds         = _.invert(require('../asset/hundreds'))
  , InvalidArguments = require('./invalid-arguments')

module.exports = function (input) {
       if (input === undefined)       throw new InvalidArguments('Pass something.')
  else if (typeof input !== 'string') throw new InvalidArguments('Not a string: ' + input)

  var words       = input.split(' ')
    , parsed      = [ ]
    , integer     = null
    , and         = null
    , pushInteger = function () { if (integer !== null) { parsed.push(integer) ; integer = null } }
    , pushAnd     = function () { if (and !== null) { parsed.push(and) ; and = null } }

  for (var i = 0; i < words.length; ++i) {
    var word = words[i].toLowerCase()

    if (isHundred(word)) {
      pushInteger()
      pushAnd()
      integer = asHundred(word)
    }

    else if (isDozen(word)) {
      if (and && integer >= 100) {
        integer += asDozen(word)
        and = null
      } else {
          pushInteger()
          pushAnd()
          integer = asDozen(word)
      }
    }

    else if (isUnit(word)) {
      if (and && integer !== null) {
        and = null
        integer += asUnit(word)
      } else {
        pushInteger()
        pushAnd()
        integer = asUnit(word)
      }
      pushInteger()
    }

    else if (isAnd(word) && integer !== null && !and) and = words[i]

    else {
      pushInteger()
      parsed.push(words[i])
    }
  }

  pushInteger()
  pushAnd()

  return parsed.join(' ')
}

function isHundred (word) { return word === 'cem' || (word in hundreds) }

function asHundred (word) { return word === 'cem' ? 100 : parseInt(hundreds[word]) }

function isDozen (word) { return word in dozens }

function asDozen (word) { return parseInt(dozens[word]) }

function isUnit (word) { return word in units }

function asUnit (word) { return parseInt(units[word]) }

function isAnd (word) { return word === 'e' }

