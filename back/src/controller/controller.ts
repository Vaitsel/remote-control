import robot from "robotjs";
import { controllerResult } from "./controller.types.js";
import { getCircle } from "../getFigures/circle.js";
import { getSquare } from "../getFigures/square.js";
import { getRectangle } from "../getFigures/rectangle.js";

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
    case "draw_circle":
      return getCircle(newPos[0]);
    case "draw_square":
      return getSquare(newPos[0]);
    case "draw_rectangle":
      return getRectangle(newPos[0],newPos[1]);
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