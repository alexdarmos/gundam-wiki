import Image from './assets/images/banners/gundam-wing-01.png';
const images = [
	require('./assets/images/banners/gundam-wing-01.png'),
	require('./assets/images/banners/gundam-deathscythe.png'),
	require('./assets/images/banners/gundam-heavyarms.png'),
	require('./assets/images/banners/gundam-sandrock.png'),
	require('./assets/images/banners/gundam-shenlong.png')
];
let data = [
	{
		id: 0,
		name: 'Wing Gundam',
		classification: 'Transformable General-Purpose Mobile Suit',
		height: '16.3 m',
		weight: '7.11 t',
		abilityLevels: {
			fighting: 'lvl 130',
			weapons: 'lvl 140',
			speed: 'lvl 150',
			power: 'lvl 120',
			armor: 'lvl 130'
		},
		shortDescription:
			'The XXXG-01W Wing Gundam (aka Gundam Zero-One) is the titular mobile suit of the Mobile Suit Gundam Wing series. The unit was primarily piloted by Heero Yuy.',
		banner: images[0]
	},
	{
		id: 1,
		name: 'Gundam Deathscythe',
		classification: 'Stealth Close Quarters Combat Mobile Suit',
		height: '16.3 m',
		weight: '7.2 t',
		abilityLevels: {
			fighting: 'lvl 140',
			weapons: 'lvl 120',
			speed: 'lvl 160',
			power: 'lvl 120',
			armor: 'lvl 120'
		},
		shortDescription:
			'The XXXG-01D Gundam Deathscythe (aka Deathscythe or Gundam Zero-Two) is the second of five Gundams sent to Earth from the Space Colonies in New Mobile Report Gundam Wing. It was piloted by Duo Maxwell.',
		banner: images[1]
	},
	{
		id: 2,
		name: 'Gundam Heavyarms',
		classification: 'Long Range Attack Mobile Suit',
		height: '16.7 m',
		weight: '7.7 t',
		abilityLevels: {
			fighting: 'lvl 110',
			weapons: 'lvl 160',
			speed: 'lvl 110',
			power: 'lvl 140',
			armor: 'lvl 140'
		},
		shortDescription:
			"The XXXG-01H Gundam Heavyarms (aka Heavyarms or Gundam Zero-Three) is a mobile suit from the series Mobile Suit Gundam WIng. It was the third of Operation Meteor's five Gundams, and was piloted by a young man operating under the pseudonym Trowa Barton.",
		banner: images[2]
	},
	{
		id: 3,
		name: 'Gundam Sandrock',
		classification: 'Commander-use Close Quarters Combat Desert Mobile Suit',
		height: '16.5 m',
		weight: '7.5 t',
		abilityLevels: {
			fighting: 'lvl 120',
			weapons: 'lvl 120',
			speed: 'lvl 110',
			power: 'lvl 150',
			armor: 'lvl 160'
		},
		shortDescription:
			'The XXXG-0SR Gundam Sandrock (aka Sandrock or Gundam Zero-Four) is a mobile suit featured in the anime series Mobile Suit Gundam Wing and is piloted by Quatre Raberba Winner.',
		banner: images[3]
	},
	{
		id: 4,
		name: 'Shenlong Gundam',
		classification: 'Close Quarters Combat Mobile Suit',
		height: '16.4 m',
		weight: '7.4 t',
		abilityLevels: {
			fighting: 'lvl 160',
			weapons: 'lvl 110',
			speed: 'lvl 130',
			power: 'lvl 140',
			armor: 'lvl 120'
		},
		shortDescription:
			'The XXXG-01S Shenlong Gundam (aka Shenlong, Nataku, or Gundam Zero-Five) is mobile suit featured in Mobile Suit Gundam Wing. Piloted by Chang Wufei, it was later upgraded into XXXG-01S2 Altron Gundam.',
		banner: images[4]
	}
];

export { data };
