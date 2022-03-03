
import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc';
import { GameEvent } from '../GameEvent';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property([SpriteFrame])
    sfArr: SpriteFrame[] = Array<SpriteFrame>();

    private _cd: Sprite;

    private _curIdx = 30;

    private _dt = 0;

    private _isStarted = false;

    onLoad() {
        this._cd = this.node.getChildByName('cd').getComponent(Sprite);
        this._cd.spriteFrame = this.sfArr[this._curIdx];

        GameEvent.instance.on(GameEvent.START_GAME, this._onStartGame, this);
        GameEvent.instance.on(GameEvent.END_GAME, this._onEndGame, this);
    }

    update(dt: number): void {
        if (this._isStarted) {
            this._dt += dt;
            if (this._dt >= 1) {
                this._dt -= 1;
                if (--this._curIdx < 0) {
                    // 时间到,游戏结束
                    GameEvent.instance.emit(GameEvent.END_GAME, 'timeout');
                } else {
                    this._cd.spriteFrame = this.sfArr[this._curIdx];
                }
            }
        }
    }

    private _onStartGame(): void {
        this._isStarted = true;
        this._curIdx = 30;
        this._cd.spriteFrame = this.sfArr[this._curIdx];
        this._dt = 0;
    }

    private _onEndGame(): void {
        this._isStarted = false;
    }
}