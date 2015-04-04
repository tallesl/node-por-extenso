var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 7* in full correctly', function () {
  assert.equal(porExtenso(70), 'setenta')
  assert.equal(porExtenso(71), 'setenta e um')
  assert.equal(porExtenso(72), 'setenta e dois')
  assert.equal(porExtenso(73), 'setenta e três')
  assert.equal(porExtenso(74), 'setenta e quatro')
  assert.equal(porExtenso(75), 'setenta e cinco')
  assert.equal(porExtenso(76), 'setenta e seis')
  assert.equal(porExtenso(77), 'setenta e sete')
  assert.equal(porExtenso(78), 'setenta e oito')
  assert.equal(porExtenso(79), 'setenta e nove')
})

