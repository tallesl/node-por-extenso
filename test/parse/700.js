var assert = require('assert')
  , parse  = require('../../lib/por-extenso').parse

it('setecentos+', function () {

  assert.equal(parse('setecentos'         ) , '700')
  assert.equal(parse('setecentos e um'    ) , '701')
  assert.equal(parse('setecentos e dois'  ) , '702')
  assert.equal(parse('setecentos e três'  ) , '703')
  assert.equal(parse('setecentos e quatro') , '704')
  assert.equal(parse('setecentos e cinco' ) , '705')
  assert.equal(parse('setecentos e seis'  ) , '706')
  assert.equal(parse('setecentos e sete'  ) , '707')
  assert.equal(parse('setecentos e oito'  ) , '708')
  assert.equal(parse('setecentos e nove'  ) , '709')

  assert.equal(parse('setecentos e dez'      ) , '710')
  assert.equal(parse('setecentos e onze'     ) , '711')
  assert.equal(parse('setecentos e doze'     ) , '712')
  assert.equal(parse('setecentos e treze'    ) , '713')
  assert.equal(parse('setecentos e quatorze' ) , '714')
  assert.equal(parse('setecentos e quinze'   ) , '715')
  assert.equal(parse('setecentos e dezesseis') , '716')
  assert.equal(parse('setecentos e dezessete') , '717')
  assert.equal(parse('setecentos e dezoito'  ) , '718')
  assert.equal(parse('setecentos e dezenove' ) , '719')

  assert.equal(parse('setecentos e vinte'         ) , '720')
  assert.equal(parse('setecentos e vinte e um'    ) , '721')
  assert.equal(parse('setecentos e vinte e dois'  ) , '722')
  assert.equal(parse('setecentos e vinte e três'  ) , '723')
  assert.equal(parse('setecentos e vinte e quatro') , '724')
  assert.equal(parse('setecentos e vinte e cinco' ) , '725')
  assert.equal(parse('setecentos e vinte e seis'  ) , '726')
  assert.equal(parse('setecentos e vinte e sete'  ) , '727')
  assert.equal(parse('setecentos e vinte e oito'  ) , '728')
  assert.equal(parse('setecentos e vinte e nove'  ) , '729')

  assert.equal(parse('setecentos e trinta'         ) , '730')
  assert.equal(parse('setecentos e trinta e um'    ) , '731')
  assert.equal(parse('setecentos e trinta e dois'  ) , '732')
  assert.equal(parse('setecentos e trinta e três'  ) , '733')
  assert.equal(parse('setecentos e trinta e quatro') , '734')
  assert.equal(parse('setecentos e trinta e cinco' ) , '735')
  assert.equal(parse('setecentos e trinta e seis'  ) , '736')
  assert.equal(parse('setecentos e trinta e sete'  ) , '737')
  assert.equal(parse('setecentos e trinta e oito'  ) , '738')
  assert.equal(parse('setecentos e trinta e nove'  ) , '739')

  assert.equal(parse('setecentos e quarenta'         ) , '740')
  assert.equal(parse('setecentos e quarenta e um'    ) , '741')
  assert.equal(parse('setecentos e quarenta e dois'  ) , '742')
  assert.equal(parse('setecentos e quarenta e três'  ) , '743')
  assert.equal(parse('setecentos e quarenta e quatro') , '744')
  assert.equal(parse('setecentos e quarenta e cinco' ) , '745')
  assert.equal(parse('setecentos e quarenta e seis'  ) , '746')
  assert.equal(parse('setecentos e quarenta e sete'  ) , '747')
  assert.equal(parse('setecentos e quarenta e oito'  ) , '748')
  assert.equal(parse('setecentos e quarenta e nove'  ) , '749')

  assert.equal(parse('setecentos e cinquenta'         ) , '750')
  assert.equal(parse('setecentos e cinquenta e um'    ) , '751')
  assert.equal(parse('setecentos e cinquenta e dois'  ) , '752')
  assert.equal(parse('setecentos e cinquenta e três'  ) , '753')
  assert.equal(parse('setecentos e cinquenta e quatro') , '754')
  assert.equal(parse('setecentos e cinquenta e cinco' ) , '755')
  assert.equal(parse('setecentos e cinquenta e seis'  ) , '756')
  assert.equal(parse('setecentos e cinquenta e sete'  ) , '757')
  assert.equal(parse('setecentos e cinquenta e oito'  ) , '758')
  assert.equal(parse('setecentos e cinquenta e nove'  ) , '759')

  assert.equal(parse('setecentos e sessenta'         ) , '760')
  assert.equal(parse('setecentos e sessenta e um'    ) , '761')
  assert.equal(parse('setecentos e sessenta e dois'  ) , '762')
  assert.equal(parse('setecentos e sessenta e três'  ) , '763')
  assert.equal(parse('setecentos e sessenta e quatro') , '764')
  assert.equal(parse('setecentos e sessenta e cinco' ) , '765')
  assert.equal(parse('setecentos e sessenta e seis'  ) , '766')
  assert.equal(parse('setecentos e sessenta e sete'  ) , '767')
  assert.equal(parse('setecentos e sessenta e oito'  ) , '768')
  assert.equal(parse('setecentos e sessenta e nove'  ) , '769')

  assert.equal(parse('setecentos e setenta'         ) , '770')
  assert.equal(parse('setecentos e setenta e um'    ) , '771')
  assert.equal(parse('setecentos e setenta e dois'  ) , '772')
  assert.equal(parse('setecentos e setenta e três'  ) , '773')
  assert.equal(parse('setecentos e setenta e quatro') , '774')
  assert.equal(parse('setecentos e setenta e cinco' ) , '775')
  assert.equal(parse('setecentos e setenta e seis'  ) , '776')
  assert.equal(parse('setecentos e setenta e sete'  ) , '777')
  assert.equal(parse('setecentos e setenta e oito'  ) , '778')
  assert.equal(parse('setecentos e setenta e nove'  ) , '779')

  assert.equal(parse('setecentos e oitenta'         ) , '780')
  assert.equal(parse('setecentos e oitenta e um'    ) , '781')
  assert.equal(parse('setecentos e oitenta e dois'  ) , '782')
  assert.equal(parse('setecentos e oitenta e três'  ) , '783')
  assert.equal(parse('setecentos e oitenta e quatro') , '784')
  assert.equal(parse('setecentos e oitenta e cinco' ) , '785')
  assert.equal(parse('setecentos e oitenta e seis'  ) , '786')
  assert.equal(parse('setecentos e oitenta e sete'  ) , '787')
  assert.equal(parse('setecentos e oitenta e oito'  ) , '788')
  assert.equal(parse('setecentos e oitenta e nove'  ) , '789')

  assert.equal(parse('setecentos e noventa'         ) , '790')
  assert.equal(parse('setecentos e noventa e um'    ) , '791')
  assert.equal(parse('setecentos e noventa e dois'  ) , '792')
  assert.equal(parse('setecentos e noventa e três'  ) , '793')
  assert.equal(parse('setecentos e noventa e quatro') , '794')
  assert.equal(parse('setecentos e noventa e cinco' ) , '795')
  assert.equal(parse('setecentos e noventa e seis'  ) , '796')
  assert.equal(parse('setecentos e noventa e sete'  ) , '797')
  assert.equal(parse('setecentos e noventa e oito'  ) , '798')
  assert.equal(parse('setecentos e noventa e nove'  ) , '799')

})
