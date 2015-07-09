var units   = require('../asset/units')
  , dozens  = require('../asset/dozens')
  , hundreds = require('../asset/hundreds')

module.exports = function porExtenso (number) {

  if (typeof number === 'number') {

    number = Math.floor(number)
      if      (number < 0)  return number
      else if (number < 10) return units[number]
      else if (number < 20) return dozens[number]
      else if (number < 100) {

        var unitPart = number % 10
        if (unitPart) return dozens[number - unitPart] + ' e ' + units[unitPart]
        else          return dozens[number]

    } else if (number === 100) return 'cem'

      else if (number < 1000) {
        var dozenPart = number % 100
        if (dozenPart) return hundreds[number - dozenPart] + ' e ' + porExtenso(dozenPart)
        else           return hundreds[number]

    }

  }

  return number

}

