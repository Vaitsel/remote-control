import { getLine } from "../utils/utils.js";

export const getSquare = async (width: number): Promise<void> => {
  await getLine(width, 0);
  await getLine(0, width);
  await getLine(-width, 0);
  await getLine(0, -width);
};
