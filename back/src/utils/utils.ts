import robot from "robotjs";

export const getLine = async (newX: number, newY: number): Promise<void> => {
    const mousePos = robot.getMousePos();
    const step = 1;

    if (newY) {
        newY = mousePos.y + newY;
    } else {
        newY = mousePos.y;
    }

    if (newX) {
        newX = mousePos.x + newX;
    } else {
        newX = mousePos.x;
    }

    robot.mouseToggle("down");

    if (mousePos.x !== newX) {
        while (mousePos.x !== newX) {
            mousePos.x += mousePos.x > newX ? -step : step;
            robot.moveMouse(mousePos.x, mousePos.y);
        }
    } else {
        while (mousePos.y !== newY) {
            mousePos.y += mousePos.y > newY ? -step : step;
            robot.moveMouse(mousePos.x, mousePos.y);
        }
    }

    robot.mouseToggle("up");
};
