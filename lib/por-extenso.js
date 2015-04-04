module.exports = function porExtenso (number) {

  var unit = {
      0: 'zero'
    , 1: 'um'
    , 2: 'dois'
    , 3: 'três'
    , 4: 'quatro'
    , 5: 'cinco'
    , 6: 'seis'
    , 7: 'sete'
    , 8: 'oito'
    , 9: 'nove'
  }

  var dozen = {
      10: 'dez'
    , 11: 'onze'
    , 12: 'doze'
    , 13: 'treze'
    , 14: 'quatorze'
    , 15: 'quinze'
    , 16: 'dezesseis'
    , 17: 'dezessete'
    , 18: 'dezoito'
    , 19: 'dezenove'
    , 20: 'vinte'
    , 30: 'trinta'
    , 40: 'quarenta'
    , 50: 'cinquenta'
    , 60: 'sessenta'
    , 70: 'setenta'
    , 80: 'oitenta'
    , 90: 'noventa'
  }

  var hundred = {
      100: 'cento'
    , 200: 'duzentos'
    , 300: 'trezentos'
    , 400: 'quatrocentos'
    , 500: 'quinhentos'
    , 600: 'seiscentos'
    , 700: 'setecentos'
    , 800: 'oitocentos'
    , 900: 'novecentos'
  }

  if (typeof number === 'number') {

    number = Math.floor(number)
      if      (number < 0)  return number
      else if (number < 10) return unit[number]
      else if (number < 20) return dozen[number]
      else if (number < 100) {

        var unitPart = number % 10
        if (unitPart) return dozen[number - unitPart] + ' e ' + unit[unitPart]
        else          return dozen[number]

    } else if (number === 100) return 'cem'

      else if (number < 1000) {
        var dozenPart = number % 100
        if (dozenPart) return hundred[number - dozenPart] + ' e ' + porExtenso(dozenPart)
        else           return hundred[number]

    }

  }

  return number

}

