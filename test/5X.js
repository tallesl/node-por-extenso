var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 5* in full correctly', function () {
  assert.equal(porExtenso(50), 'cinquenta')
  assert.equal(porExtenso(51), 'cinquenta e um')
  assert.equal(porExtenso(52), 'cinquenta e dois')
  assert.equal(porExtenso(53), 'cinquenta e três')
  assert.equal(porExtenso(54), 'cinquenta e quatro')
  assert.equal(porExtenso(55), 'cinquenta e cinco')
  assert.equal(porExtenso(56), 'cinquenta e seis')
  assert.equal(porExtenso(57), 'cinquenta e sete')
  assert.equal(porExtenso(58), 'cinquenta e oito')
  assert.equal(porExtenso(59), 'cinquenta e nove')
})

