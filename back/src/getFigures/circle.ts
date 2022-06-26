import robot from "robotjs";

export const getCircle = async (radius: number): Promise<void> => {
  const mousePos = robot.getMousePos();

  for (let i = 0.00; i <= Math.PI * 2; i += 0.02) {
    if (i === 0.02) {
      robot.mouseToggle("down");
    }
    const x = mousePos.x + (radius * Math.cos(i));
    const y = mousePos.y + (radius * Math.sin(i));
    robot.dragMouse(x, y);
  }

  robot.mouseToggle("up");
};
