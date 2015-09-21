var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('strings', function () {

  assert.equal(porExtenso('-90'), '-90')
  assert.equal(porExtenso('0'), 'zero')
  assert.equal(porExtenso('7'), 'sete')
  assert.equal(porExtenso('123'), 'cento e vinte e três')
  assert.equal(porExtenso('eu comprei 99 balões'), 'eu comprei noventa e nove balões')
  assert.equal(porExtenso.parse('eu comprei noventa e nove balões'), 'eu comprei 99 balões')
  assert.equal(porExtenso.parse('DUZENTOS E TREZE EM CAIXA ALTA'), '213 EM CAIXA ALTA')
  assert.equal(
      porExtenso.parse('novecentos e novecentos e noventa e nove e nove e novecentos e nove e nove nove nove novecentos e noventa nove novecentos e noventa e nove')
    , '900 e 999 e 9 e 909 e 9 9 9 990 9 999'
  )
})

