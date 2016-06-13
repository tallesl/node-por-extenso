# por-extenso

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]

[build]:               https://travis-ci.org/tallesl/node-por-extenso
[build-img]:           https://travis-ci.org/tallesl/node-por-extenso.svg
[coverage]:            https://coveralls.io/r/tallesl/node-por-extenso?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-por-extenso/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-por-extenso
[dependencies-img]:    https://david-dm.org/tallesl/node-por-extenso.svg
[devdependencies]:     https://david-dm.org/tallesl/node-por-extenso#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-por-extenso/dev-status.svg
[npm]:                 https://www.npmjs.com/package/por-extenso
[npm-img]:             https://badge.fury.io/js/por-extenso.svg

Brazilian Portuguese numbers in full.

## Usage

```
$ npm install por-extenso
(...)
$ node
> var porExtenso = require('./lib/por-extenso')
undefined
> porExtenso('9') // accepts an integer String
'nove'
> porExtenso(99) // or an integer Number
'noventa e nove'
> porExtenso('eu tenho 99 balões') // in the middle of a text
'eu tenho noventa e nove balões'
> porExtenso.parse('eu tenho noventa e nove balões') // and also the other way around
'eu tenho 99 balões'
```
