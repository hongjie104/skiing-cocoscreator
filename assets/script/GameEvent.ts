import { EventTarget } from 'cc';

export class GameEvent extends EventTarget {
    static END_GAME = "endGame";

    static _instance:GameEvent;

    static get instance():GameEvent {
        if (!GameEvent._instance) GameEvent._instance = new GameEvent();
        return GameEvent._instance;
    }
}