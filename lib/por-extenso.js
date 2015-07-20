var dozens    = require('../asset/dozens')
  , hundreds  = require('../asset/hundreds')
  , units     = require('../asset/units')

function porExtenso (input) {

  // if it's a string that we can make it an integer
  if (isIntegerString(input)) input = parseInt(input)

  // we're not dealing with negatives, NaN and such
  if (isValidNumber(input)) {

    // we're not dealing with floating points either
    input = forceInteger(input)

    // 0-9
    if (input < 10) return aUnit(input)

    // 10-99
    else if (input < 100) return aDozen(input)

    // 100-999
    else if (input < 1000) return aHundred(input)

    // > 1000 isn't supported :(
    return input.toString()

  }

  // we're not touching it, take it back
  return input

}

function isIntegerString (input) { return /^\d+$/.test(input) }

function isValidNumber (input) { return typeof input === 'number' && isFinite(input) && input >= 0 }

function forceInteger (input) { return Math.floor(input) }

function itBack (input) { return input }

function aUnit (input) { return units[input] }

function aDozen (input) {

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

function aHundred (input) {

  // 100
  if (input === 100) return 'cem'

  // 101-999
  var dozenPart = input % 100
  return dozenPart ?
    // doesn't end with a double zero
    hundreds[input - dozenPart] + ' e ' + porExtenso(dozenPart) : // <-- recursivity here

    // ends with a double zero
    hundreds[input]

}

module.exports = porExtenso

