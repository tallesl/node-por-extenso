var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 6* in full correctly', function () {
  assert.equal(porExtenso(60), 'sessenta')
  assert.equal(porExtenso(61), 'sessenta e um')
  assert.equal(porExtenso(62), 'sessenta e dois')
  assert.equal(porExtenso(63), 'sessenta e três')
  assert.equal(porExtenso(64), 'sessenta e quatro')
  assert.equal(porExtenso(65), 'sessenta e cinco')
  assert.equal(porExtenso(66), 'sessenta e seis')
  assert.equal(porExtenso(67), 'sessenta e sete')
  assert.equal(porExtenso(68), 'sessenta e oito')
  assert.equal(porExtenso(69), 'sessenta e nove')
})

