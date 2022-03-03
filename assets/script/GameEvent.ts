import { EventTarget } from 'cc';

export class GameEvent extends EventTarget {
    static START_GAME = "startGame";
    static END_GAME = "endGame";

    private static _instance:GameEvent;

    static get instance():GameEvent {
        if (!GameEvent._instance) GameEvent._instance = new GameEvent();
        return GameEvent._instance;
    }
}