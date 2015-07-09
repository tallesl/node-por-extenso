var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('strings', function () {

  assert.equal(porExtenso('-90'), '-90')
  assert.equal(porExtenso('0'),   'zero')
  assert.equal(porExtenso('7'),   'sete')
  assert.equal(porExtenso('123'), 'cento e vinte e três')

})

