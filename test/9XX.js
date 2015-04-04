var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 90* in full correctly', function () {
  assert.equal(porExtenso(900), 'novecentos')
  assert.equal(porExtenso(901), 'novecentos e um')
  assert.equal(porExtenso(902), 'novecentos e dois')
  assert.equal(porExtenso(903), 'novecentos e três')
  assert.equal(porExtenso(904), 'novecentos e quatro')
  assert.equal(porExtenso(905), 'novecentos e cinco')
  assert.equal(porExtenso(906), 'novecentos e seis')
  assert.equal(porExtenso(907), 'novecentos e sete')
  assert.equal(porExtenso(908), 'novecentos e oito')
  assert.equal(porExtenso(909), 'novecentos e nove')
})

it('should translate 91* in full correctly', function () {
  assert.equal(porExtenso(910), 'novecentos e dez')
  assert.equal(porExtenso(911), 'novecentos e onze')
  assert.equal(porExtenso(912), 'novecentos e doze')
  assert.equal(porExtenso(913), 'novecentos e treze')
  assert.equal(porExtenso(914), 'novecentos e quatorze')
  assert.equal(porExtenso(915), 'novecentos e quinze')
  assert.equal(porExtenso(916), 'novecentos e dezesseis')
  assert.equal(porExtenso(917), 'novecentos e dezessete')
  assert.equal(porExtenso(918), 'novecentos e dezoito')
  assert.equal(porExtenso(919), 'novecentos e dezenove')
})

it('should translate 92* in full correctly', function () {
  assert.equal(porExtenso(920), 'novecentos e vinte')
  assert.equal(porExtenso(921), 'novecentos e vinte e um')
  assert.equal(porExtenso(922), 'novecentos e vinte e dois')
  assert.equal(porExtenso(923), 'novecentos e vinte e três')
  assert.equal(porExtenso(924), 'novecentos e vinte e quatro')
  assert.equal(porExtenso(925), 'novecentos e vinte e cinco')
  assert.equal(porExtenso(926), 'novecentos e vinte e seis')
  assert.equal(porExtenso(927), 'novecentos e vinte e sete')
  assert.equal(porExtenso(928), 'novecentos e vinte e oito')
  assert.equal(porExtenso(929), 'novecentos e vinte e nove')
})

it('should translate 93* in full correctly', function () {
  assert.equal(porExtenso(930), 'novecentos e trinta')
  assert.equal(porExtenso(931), 'novecentos e trinta e um')
  assert.equal(porExtenso(932), 'novecentos e trinta e dois')
  assert.equal(porExtenso(933), 'novecentos e trinta e três')
  assert.equal(porExtenso(934), 'novecentos e trinta e quatro')
  assert.equal(porExtenso(935), 'novecentos e trinta e cinco')
  assert.equal(porExtenso(936), 'novecentos e trinta e seis')
  assert.equal(porExtenso(937), 'novecentos e trinta e sete')
  assert.equal(porExtenso(938), 'novecentos e trinta e oito')
  assert.equal(porExtenso(939), 'novecentos e trinta e nove')
})

it('should translate 94* in full correctly', function () {
  assert.equal(porExtenso(940), 'novecentos e quarenta')
  assert.equal(porExtenso(941), 'novecentos e quarenta e um')
  assert.equal(porExtenso(942), 'novecentos e quarenta e dois')
  assert.equal(porExtenso(943), 'novecentos e quarenta e três')
  assert.equal(porExtenso(944), 'novecentos e quarenta e quatro')
  assert.equal(porExtenso(945), 'novecentos e quarenta e cinco')
  assert.equal(porExtenso(946), 'novecentos e quarenta e seis')
  assert.equal(porExtenso(947), 'novecentos e quarenta e sete')
  assert.equal(porExtenso(948), 'novecentos e quarenta e oito')
  assert.equal(porExtenso(949), 'novecentos e quarenta e nove')
})

it('should translate 95* in full correctly', function () {
  assert.equal(porExtenso(950), 'novecentos e cinquenta')
  assert.equal(porExtenso(951), 'novecentos e cinquenta e um')
  assert.equal(porExtenso(952), 'novecentos e cinquenta e dois')
  assert.equal(porExtenso(953), 'novecentos e cinquenta e três')
  assert.equal(porExtenso(954), 'novecentos e cinquenta e quatro')
  assert.equal(porExtenso(955), 'novecentos e cinquenta e cinco')
  assert.equal(porExtenso(956), 'novecentos e cinquenta e seis')
  assert.equal(porExtenso(957), 'novecentos e cinquenta e sete')
  assert.equal(porExtenso(958), 'novecentos e cinquenta e oito')
  assert.equal(porExtenso(959), 'novecentos e cinquenta e nove')
})

it('should translate 96* in full correctly', function () {
  assert.equal(porExtenso(960), 'novecentos e sessenta')
  assert.equal(porExtenso(961), 'novecentos e sessenta e um')
  assert.equal(porExtenso(962), 'novecentos e sessenta e dois')
  assert.equal(porExtenso(963), 'novecentos e sessenta e três')
  assert.equal(porExtenso(964), 'novecentos e sessenta e quatro')
  assert.equal(porExtenso(965), 'novecentos e sessenta e cinco')
  assert.equal(porExtenso(966), 'novecentos e sessenta e seis')
  assert.equal(porExtenso(967), 'novecentos e sessenta e sete')
  assert.equal(porExtenso(968), 'novecentos e sessenta e oito')
  assert.equal(porExtenso(969), 'novecentos e sessenta e nove')
})

it('should translate 97* in full correctly', function () {
  assert.equal(porExtenso(970), 'novecentos e setenta')
  assert.equal(porExtenso(971), 'novecentos e setenta e um')
  assert.equal(porExtenso(972), 'novecentos e setenta e dois')
  assert.equal(porExtenso(973), 'novecentos e setenta e três')
  assert.equal(porExtenso(974), 'novecentos e setenta e quatro')
  assert.equal(porExtenso(975), 'novecentos e setenta e cinco')
  assert.equal(porExtenso(976), 'novecentos e setenta e seis')
  assert.equal(porExtenso(977), 'novecentos e setenta e sete')
  assert.equal(porExtenso(978), 'novecentos e setenta e oito')
  assert.equal(porExtenso(979), 'novecentos e setenta e nove')
})

it('should translate 98* in full correctly', function () {
  assert.equal(porExtenso(980), 'novecentos e oitenta')
  assert.equal(porExtenso(981), 'novecentos e oitenta e um')
  assert.equal(porExtenso(982), 'novecentos e oitenta e dois')
  assert.equal(porExtenso(983), 'novecentos e oitenta e três')
  assert.equal(porExtenso(984), 'novecentos e oitenta e quatro')
  assert.equal(porExtenso(985), 'novecentos e oitenta e cinco')
  assert.equal(porExtenso(986), 'novecentos e oitenta e seis')
  assert.equal(porExtenso(987), 'novecentos e oitenta e sete')
  assert.equal(porExtenso(988), 'novecentos e oitenta e oito')
  assert.equal(porExtenso(989), 'novecentos e oitenta e nove')
})

it('should translate 99* in full correctly', function () {
  assert.equal(porExtenso(990), 'novecentos e noventa')
  assert.equal(porExtenso(991), 'novecentos e noventa e um')
  assert.equal(porExtenso(992), 'novecentos e noventa e dois')
  assert.equal(porExtenso(993), 'novecentos e noventa e três')
  assert.equal(porExtenso(994), 'novecentos e noventa e quatro')
  assert.equal(porExtenso(995), 'novecentos e noventa e cinco')
  assert.equal(porExtenso(996), 'novecentos e noventa e seis')
  assert.equal(porExtenso(997), 'novecentos e noventa e sete')
  assert.equal(porExtenso(998), 'novecentos e noventa e oito')
  assert.equal(porExtenso(999), 'novecentos e noventa e nove')
})
