var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 8* in full correctly', function () {
  assert.equal(porExtenso(80), 'oitenta')
  assert.equal(porExtenso(81), 'oitenta e um')
  assert.equal(porExtenso(82), 'oitenta e dois')
  assert.equal(porExtenso(83), 'oitenta e três')
  assert.equal(porExtenso(84), 'oitenta e quatro')
  assert.equal(porExtenso(85), 'oitenta e cinco')
  assert.equal(porExtenso(86), 'oitenta e seis')
  assert.equal(porExtenso(87), 'oitenta e sete')
  assert.equal(porExtenso(88), 'oitenta e oito')
  assert.equal(porExtenso(89), 'oitenta e nove')
})

