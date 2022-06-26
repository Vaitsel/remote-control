import { getLine } from "../utils/utils.js";

export const getRectangle = async (width:number, length:number): Promise<void> => {
  await getLine(width, 0);
  await getLine(0, length);
  await getLine(-width, 0);
  await getLine(0, -length);
};
