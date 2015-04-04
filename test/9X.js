var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 9* in full correctly', function () {
  assert.equal(porExtenso(90), 'noventa')
  assert.equal(porExtenso(91), 'noventa e um')
  assert.equal(porExtenso(92), 'noventa e dois')
  assert.equal(porExtenso(93), 'noventa e três')
  assert.equal(porExtenso(94), 'noventa e quatro')
  assert.equal(porExtenso(95), 'noventa e cinco')
  assert.equal(porExtenso(96), 'noventa e seis')
  assert.equal(porExtenso(97), 'noventa e sete')
  assert.equal(porExtenso(98), 'noventa e oito')
  assert.equal(porExtenso(99), 'noventa e nove')
})

