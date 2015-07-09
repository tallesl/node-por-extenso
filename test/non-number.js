var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('not a number', function () {
  assert.equal(porExtenso(undefined), undefined)
  assert.equal(porExtenso(null), null)
  assert(Number.isNaN(porExtenso(NaN)))
})

