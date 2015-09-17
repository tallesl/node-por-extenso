var assert           = require('assert')
  , InvalidArguments = require('../lib/invalid-arguments')
  , porExtenso       = require('../lib/por-extenso')

it('not a number', function () {

  assert.throws(function () { porExtenso(undefined) }, InvalidArguments)
  assert.throws(function () { porExtenso(null) }, InvalidArguments)
  assert.throws(function () { porExtenso(/ /) }, InvalidArguments)

})

