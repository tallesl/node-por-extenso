var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 4* in full correctly', function () {
  assert.equal(porExtenso(40), 'quarenta')
  assert.equal(porExtenso(41), 'quarenta e um')
  assert.equal(porExtenso(42), 'quarenta e dois')
  assert.equal(porExtenso(43), 'quarenta e três')
  assert.equal(porExtenso(44), 'quarenta e quatro')
  assert.equal(porExtenso(45), 'quarenta e cinco')
  assert.equal(porExtenso(46), 'quarenta e seis')
  assert.equal(porExtenso(47), 'quarenta e sete')
  assert.equal(porExtenso(48), 'quarenta e oito')
  assert.equal(porExtenso(49), 'quarenta e nove')
})

