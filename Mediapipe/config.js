export const THRESH_HOLD = 0.5;

export const SEQ_LEN = 30;
export const ROWS_PER_FRAME = 543;
const MAX_LEN = 384;
const CROP_LEN = MAX_LEN;
const NUM_CLASSES = 250;
const PAD = -100;

const NOSE = [1, 2, 98, 327];
const LNOSE = [98];
const RNOSE = [327];
const LIP = [
  0, 61, 185, 40, 39, 37, 267, 269, 270, 409,
  291, 146, 91, 181, 84, 17, 314, 405, 321, 375,
  78, 191, 80, 81, 82, 13, 312, 311, 310, 415,
  95, 88, 178, 87, 14, 317, 402, 318, 324, 308,
];
const LLIP = [84, 181, 91, 146, 61, 185, 40, 39, 37, 87, 178, 88, 95, 78, 191, 80, 81, 82];
const RLIP = [314, 405, 321, 375, 291, 409, 270, 269, 267, 317, 402, 318, 324, 308, 415, 310, 311, 312];

const POSE = [500, 502, 504, 501, 503, 505, 512, 513];
const LPOSE = [513, 505, 503, 501];
const RPOSE = [512, 504, 502, 500];

const REYE = [
  33, 7, 163, 144, 145, 153, 154, 155, 133,
  246, 161, 160, 159, 158, 157, 173,
];
const LEYE = [
  263, 249, 390, 373, 374, 380, 381, 382, 362,
  466, 388, 387, 386, 385, 384, 398,
];

const LHAND = [...Array(21).keys()].map(i => i + 468);
const RHAND = [...Array(21).keys()].map(i => i + 522);

const POINT_LANDMARKS = [...LIP, ...LHAND, ...RHAND, ...NOSE, ...REYE, ...LEYE];
const NUM_NODES = POINT_LANDMARKS.length;
const CHANNELS = 6 * NUM_NODES;

console.log(NUM_NODES);
console.log(CHANNELS);
