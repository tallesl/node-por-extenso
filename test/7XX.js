var assert     = require('assert')
  , porExtenso = require('../lib/por-extenso')

it('should translate 70* in full correctly', function () {
  assert.equal(porExtenso(700), 'setecentos')
  assert.equal(porExtenso(701), 'setecentos e um')
  assert.equal(porExtenso(702), 'setecentos e dois')
  assert.equal(porExtenso(703), 'setecentos e três')
  assert.equal(porExtenso(704), 'setecentos e quatro')
  assert.equal(porExtenso(705), 'setecentos e cinco')
  assert.equal(porExtenso(706), 'setecentos e seis')
  assert.equal(porExtenso(707), 'setecentos e sete')
  assert.equal(porExtenso(708), 'setecentos e oito')
  assert.equal(porExtenso(709), 'setecentos e nove')
})

it('should translate 71* in full correctly', function () {
  assert.equal(porExtenso(710), 'setecentos e dez')
  assert.equal(porExtenso(711), 'setecentos e onze')
  assert.equal(porExtenso(712), 'setecentos e doze')
  assert.equal(porExtenso(713), 'setecentos e treze')
  assert.equal(porExtenso(714), 'setecentos e quatorze')
  assert.equal(porExtenso(715), 'setecentos e quinze')
  assert.equal(porExtenso(716), 'setecentos e dezesseis')
  assert.equal(porExtenso(717), 'setecentos e dezessete')
  assert.equal(porExtenso(718), 'setecentos e dezoito')
  assert.equal(porExtenso(719), 'setecentos e dezenove')
})

it('should translate 72* in full correctly', function () {
  assert.equal(porExtenso(720), 'setecentos e vinte')
  assert.equal(porExtenso(721), 'setecentos e vinte e um')
  assert.equal(porExtenso(722), 'setecentos e vinte e dois')
  assert.equal(porExtenso(723), 'setecentos e vinte e três')
  assert.equal(porExtenso(724), 'setecentos e vinte e quatro')
  assert.equal(porExtenso(725), 'setecentos e vinte e cinco')
  assert.equal(porExtenso(726), 'setecentos e vinte e seis')
  assert.equal(porExtenso(727), 'setecentos e vinte e sete')
  assert.equal(porExtenso(728), 'setecentos e vinte e oito')
  assert.equal(porExtenso(729), 'setecentos e vinte e nove')
})

it('should translate 73* in full correctly', function () {
  assert.equal(porExtenso(730), 'setecentos e trinta')
  assert.equal(porExtenso(731), 'setecentos e trinta e um')
  assert.equal(porExtenso(732), 'setecentos e trinta e dois')
  assert.equal(porExtenso(733), 'setecentos e trinta e três')
  assert.equal(porExtenso(734), 'setecentos e trinta e quatro')
  assert.equal(porExtenso(735), 'setecentos e trinta e cinco')
  assert.equal(porExtenso(736), 'setecentos e trinta e seis')
  assert.equal(porExtenso(737), 'setecentos e trinta e sete')
  assert.equal(porExtenso(738), 'setecentos e trinta e oito')
  assert.equal(porExtenso(739), 'setecentos e trinta e nove')
})

it('should translate 74* in full correctly', function () {
  assert.equal(porExtenso(740), 'setecentos e quarenta')
  assert.equal(porExtenso(741), 'setecentos e quarenta e um')
  assert.equal(porExtenso(742), 'setecentos e quarenta e dois')
  assert.equal(porExtenso(743), 'setecentos e quarenta e três')
  assert.equal(porExtenso(744), 'setecentos e quarenta e quatro')
  assert.equal(porExtenso(745), 'setecentos e quarenta e cinco')
  assert.equal(porExtenso(746), 'setecentos e quarenta e seis')
  assert.equal(porExtenso(747), 'setecentos e quarenta e sete')
  assert.equal(porExtenso(748), 'setecentos e quarenta e oito')
  assert.equal(porExtenso(749), 'setecentos e quarenta e nove')
})

it('should translate 75* in full correctly', function () {
  assert.equal(porExtenso(750), 'setecentos e cinquenta')
  assert.equal(porExtenso(751), 'setecentos e cinquenta e um')
  assert.equal(porExtenso(752), 'setecentos e cinquenta e dois')
  assert.equal(porExtenso(753), 'setecentos e cinquenta e três')
  assert.equal(porExtenso(754), 'setecentos e cinquenta e quatro')
  assert.equal(porExtenso(755), 'setecentos e cinquenta e cinco')
  assert.equal(porExtenso(756), 'setecentos e cinquenta e seis')
  assert.equal(porExtenso(757), 'setecentos e cinquenta e sete')
  assert.equal(porExtenso(758), 'setecentos e cinquenta e oito')
  assert.equal(porExtenso(759), 'setecentos e cinquenta e nove')
})

it('should translate 76* in full correctly', function () {
  assert.equal(porExtenso(760), 'setecentos e sessenta')
  assert.equal(porExtenso(761), 'setecentos e sessenta e um')
  assert.equal(porExtenso(762), 'setecentos e sessenta e dois')
  assert.equal(porExtenso(763), 'setecentos e sessenta e três')
  assert.equal(porExtenso(764), 'setecentos e sessenta e quatro')
  assert.equal(porExtenso(765), 'setecentos e sessenta e cinco')
  assert.equal(porExtenso(766), 'setecentos e sessenta e seis')
  assert.equal(porExtenso(767), 'setecentos e sessenta e sete')
  assert.equal(porExtenso(768), 'setecentos e sessenta e oito')
  assert.equal(porExtenso(769), 'setecentos e sessenta e nove')
})

it('should translate 77* in full correctly', function () {
  assert.equal(porExtenso(770), 'setecentos e setenta')
  assert.equal(porExtenso(771), 'setecentos e setenta e um')
  assert.equal(porExtenso(772), 'setecentos e setenta e dois')
  assert.equal(porExtenso(773), 'setecentos e setenta e três')
  assert.equal(porExtenso(774), 'setecentos e setenta e quatro')
  assert.equal(porExtenso(775), 'setecentos e setenta e cinco')
  assert.equal(porExtenso(776), 'setecentos e setenta e seis')
  assert.equal(porExtenso(777), 'setecentos e setenta e sete')
  assert.equal(porExtenso(778), 'setecentos e setenta e oito')
  assert.equal(porExtenso(779), 'setecentos e setenta e nove')
})

it('should translate 78* in full correctly', function () {
  assert.equal(porExtenso(780), 'setecentos e oitenta')
  assert.equal(porExtenso(781), 'setecentos e oitenta e um')
  assert.equal(porExtenso(782), 'setecentos e oitenta e dois')
  assert.equal(porExtenso(783), 'setecentos e oitenta e três')
  assert.equal(porExtenso(784), 'setecentos e oitenta e quatro')
  assert.equal(porExtenso(785), 'setecentos e oitenta e cinco')
  assert.equal(porExtenso(786), 'setecentos e oitenta e seis')
  assert.equal(porExtenso(787), 'setecentos e oitenta e sete')
  assert.equal(porExtenso(788), 'setecentos e oitenta e oito')
  assert.equal(porExtenso(789), 'setecentos e oitenta e nove')
})

it('should translate 79* in full correctly', function () {
  assert.equal(porExtenso(790), 'setecentos e noventa')
  assert.equal(porExtenso(791), 'setecentos e noventa e um')
  assert.equal(porExtenso(792), 'setecentos e noventa e dois')
  assert.equal(porExtenso(793), 'setecentos e noventa e três')
  assert.equal(porExtenso(794), 'setecentos e noventa e quatro')
  assert.equal(porExtenso(795), 'setecentos e noventa e cinco')
  assert.equal(porExtenso(796), 'setecentos e noventa e seis')
  assert.equal(porExtenso(797), 'setecentos e noventa e sete')
  assert.equal(porExtenso(798), 'setecentos e noventa e oito')
  assert.equal(porExtenso(799), 'setecentos e noventa e nove')
})

