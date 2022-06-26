export interface Listners {
    'mouse_up' : controllerCallback;
    'mouse_down': controllerCallback;
    'mouse_left': controllerCallback;
    'mouse_right': controllerCallback;
}

export type controllerResult = void | string;

interface OldPos {
    x: number;
    y: number;
}

type controllerCallback = (newPos: number[], oldPos: OldPos) => void;
