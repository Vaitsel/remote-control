import robot from "robotjs";
import { Listners, controllerResult } from "./controller.types.js";

export const controller = (listner: string, newPos: number[]): controllerResult => {
  let oldPos = robot.getMousePos();
  switch (listner) {
    case "mouse_down":
      return mouse_down(newPos, oldPos);
    case "mouse_up":
      return mouse_up(newPos, oldPos);
    case "mouse_left":
      return mouse_left(newPos, oldPos);
    case "mouse_right":
      return mouse_right(newPos, oldPos);
    case "mouse_position":
      return mouse_position();
    default:
      break
    }; 
};

function mouse_position() {
  let pos = robot.getMousePos();
  let strPos = pos.x + ',' + pos.y;
  return strPos;
}

function mouse_down(pos, { x, y }) {
  robot.moveMouse(x, y + pos[0]);
}

function mouse_up(pos, { x, y }) {
  robot.moveMouse(x, y - pos[0]);
}

function mouse_left(pos, { x, y }) {
  robot.moveMouse(x - pos[0], y);
}

function mouse_right(pos, { x, y }) {
  robot.moveMouse(x + pos[0], y);
}