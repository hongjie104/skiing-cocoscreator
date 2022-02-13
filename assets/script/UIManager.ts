
import { _decorator, Component, Node } from 'cc';
import { GameEvent } from './GameEvent';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property({ type: Node, visible: true })
    _startUI: Node;

    @property({ type: Node, visible: true })
    _endUI: Node;

    start() {
        GameEvent.instance.on(GameEvent.END_GAME, this._onEndGame, this);
    }

    startGame(): void {
        this._startUI.active = false;
        this._endUI.active = false;
    }

    private _onEndGame(): void {
        this._startUI.active = false;
        this._endUI.active = true;
    }
}