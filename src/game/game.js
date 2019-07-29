import { getRange } from "../utils";
export const BLOCK_MAX_DENSITY = 3;

const getRandomBlock = () => Math.floor(Math.random() * BLOCK_MAX_DENSITY);

const getBlocks = (rows, columns) =>
  getRange(rows).map(() => getRange(columns).map(getRandomBlock));

export const LEVELS = [
  { lives: 5, paddleWidth: 3.5, speed: 1, block: getBlocks(3, 6) },
  { lives: 4, paddleWidth: 3, speed: 1.4, block: getBlocks(3, 7) },
  { lives: 3, paddleWidth: 2.5, speed: 1.6, block: getBlocks(5, 7) },
  { lives: 2, paddleWidth: 3.5, speed: 1.8, block: getBlocks(6, 8) }
];
