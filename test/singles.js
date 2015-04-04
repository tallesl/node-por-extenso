var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate singles in full correctly', function () {
  assert.equal(porExtenso(0), 'zero')
  assert.equal(porExtenso(1), 'um')
  assert.equal(porExtenso(2), 'dois')
  assert.equal(porExtenso(3), 'três')
  assert.equal(porExtenso(4), 'quatro')
  assert.equal(porExtenso(5), 'cinco')
  assert.equal(porExtenso(6), 'seis')
  assert.equal(porExtenso(7), 'sete')
  assert.equal(porExtenso(8), 'oito')
})

