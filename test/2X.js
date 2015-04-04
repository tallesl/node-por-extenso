var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 2* in full correctly', function () {
  assert.equal(porExtenso(20), 'vinte')
  assert.equal(porExtenso(21), 'vinte e um')
  assert.equal(porExtenso(22), 'vinte e dois')
  assert.equal(porExtenso(23), 'vinte e três')
  assert.equal(porExtenso(24), 'vinte e quatro')
  assert.equal(porExtenso(25), 'vinte e cinco')
  assert.equal(porExtenso(26), 'vinte e seis')
  assert.equal(porExtenso(27), 'vinte e sete')
  assert.equal(porExtenso(28), 'vinte e oito')
  assert.equal(porExtenso(29), 'vinte e nove')
})

