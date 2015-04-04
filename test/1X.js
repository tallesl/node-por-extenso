var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 1* in full correctly', function () {
  assert.equal(porExtenso(10), 'dez')
  assert.equal(porExtenso(11), 'onze')
  assert.equal(porExtenso(12), 'doze')
  assert.equal(porExtenso(13), 'treze')
  assert.equal(porExtenso(14), 'quatorze')
  assert.equal(porExtenso(15), 'quinze')
  assert.equal(porExtenso(16), 'dezesseis')
  assert.equal(porExtenso(17), 'dezessete')
  assert.equal(porExtenso(18), 'dezoito')
  assert.equal(porExtenso(19), 'dezenove')
})

