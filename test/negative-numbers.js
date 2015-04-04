var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should leave negative numbers alone', function () {
  assert.equal(porExtenso(-1), -1)
  assert.equal(porExtenso(-90), -90)
  assert.equal(porExtenso(-99), -99)
  assert.equal(porExtenso(-543), -543)
  assert.equal(porExtenso(-9988), -9988)
})

