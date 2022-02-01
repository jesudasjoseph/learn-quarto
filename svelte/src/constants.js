export const GAME_PIECES = {
	'l1t1r1h1' : {
		light: true,
		tall: true,
		round: true,
		hollow: true
	},
	'l1t0r0h0' : {
		light: true,
		tall: false,
		round: false,
		hollow: false
	},
	'l1t1r0h0' : {
		light: true,
		tall: true,
		round: false,
		hollow: false
	},
	'l1t1r1h0' : {
		light: true,
		tall: true,
		round: true,
		hollow: false
	},
	'l1t0r0h1' : {
		light: true,
		tall: false,
		round: false,
		hollow: true
	},
	'l1t0r1h1' : {
		light: true,
		tall: false,
		round: true,
		hollow: true
	},
	'l1t1r0h1' : {
		light: true,
		tall: true,
		round: false,
		hollow: true
	},
	'l1t0r1h0' : {
		light: true,
		tall: false,
		round: true,
		hollow: false
	},
	'l0t1r1h1' : {
		light: false,
		tall: true,
		round: true,
		hollow: true
	},
	'l0t0r0h0' : {
		light: false,
		tall: false,
		round: false,
		hollow: false
	},
	'l0t1r0h0' : {
		light: false,
		tall: true,
		round: false,
		hollow: false
	},
	'l0t1r1h0' : {
		light: false,
		tall: true,
		round: true,
		hollow: false
	},
	'l0t0r0h1' : {
		light: false,
		tall: false,
		round: false,
		hollow: true
	},
	'l0t0r1h1' : {
		light: false,
		tall: false,
		round: true,
		hollow: true
	},
	'l0t1r0h1' : {
		light: false,
		tall: true,
		round: false,
		hollow: true
	},
	'l0t0r1h0' : {
		light: false,
		tall: false,
		round: true,
		hollow: false
	}
}
export const INITIAL_GAME_STATE = {
	'board': [
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null]
	],
	'lightPieces': [
		'l1t1r1h1',
		'l1t1r1h0',
		'l1t1r0h0',
		'l1t0r0h0',
		'l1t0r0h1',
		'l1t0r1h1',
		'l1t1r0h1',
		'l1t0r1h0'
	],
	'darkPieces': [
		'l0t1r1h1',
		'l0t0r0h0',
		'l0t1r0h0',
		'l0t1r1h0',
		'l0t0r0h1',
		'l0t0r1h1',
		'l0t1r0h1',
		'l0t0r1h0'
	]
}
	