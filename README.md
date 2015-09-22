# por extenso

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][module-img]][module]

[![][npm]][npm]

[build]:     https://travis-ci.org/tallesl/por-extenso
[build-img]: https://travis-ci.org/tallesl/por-extenso.png

[coverage]:     https://coveralls.io/r/tallesl/por-extenso?branch=master
[coverage-img]: https://coveralls.io/repos/tallesl/por-extenso/badge.png?branch=master

[dependencies]:     https://david-dm.org/tallesl/por-extenso
[dependencies-img]: https://david-dm.org/tallesl/por-extenso.png

[devdependencies]:     https://david-dm.org/tallesl/por-extenso#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/por-extenso/dev-status.png

[module]:     http://badge.fury.io/js/por-extenso
[module-img]: https://badge.fury.io/js/por-extenso.png

[npm]:     https://nodei.co/npm/por-extenso
[npm-img]: https://nodei.co/npm/por-extenso.png?mini=true

Brazilian Portuguese numbers in full.

## Usage

```js
$ npm install por-extenso
por-extenso@1.1.1 node_modules/por-extenso
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

