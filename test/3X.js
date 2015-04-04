var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 3* in full correctly', function () {
  assert.equal(porExtenso(30), 'trinta')
  assert.equal(porExtenso(31), 'trinta e um')
  assert.equal(porExtenso(32), 'trinta e dois')
  assert.equal(porExtenso(33), 'trinta e três')
  assert.equal(porExtenso(34), 'trinta e quatro')
  assert.equal(porExtenso(35), 'trinta e cinco')
  assert.equal(porExtenso(36), 'trinta e seis')
  assert.equal(porExtenso(37), 'trinta e sete')
  assert.equal(porExtenso(38), 'trinta e oito')
  assert.equal(porExtenso(39), 'trinta e nove')
})

