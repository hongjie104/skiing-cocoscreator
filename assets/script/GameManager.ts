
import { _decorator, Component, Camera, UITransform, screen, TiledUserNodeData, Game } from 'cc';
import { GameEvent } from './GameEvent';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property({ type: Camera, visible: true })
    _camera: Camera;

    @property({ type: Player, visible: true })
    _player: Player;

    private _cameraMinX = 0;
    private _cameraMaxX = 0;

    private _isStarted = false;

    set isStarted(val: boolean) {
        this._isStarted = val;
        this._player.isStarted = val;
        if (!val) {
            GameEvent.instance.emit(GameEvent.END_GAME);
        }
    }

    onLoad() {
        const { windowSize } = screen;
        const { contentSize } = this.node.getChildByName('scene').getChildByName('bg').getComponent(UITransform);
        this._camera.orthoHeight = contentSize.height >> 1;
        this._cameraMinX = ((contentSize.height * windowSize.width / windowSize.height) >> 1) - (contentSize.width >> 1);
        this._cameraMaxX = -this._cameraMinX;
        this._camera.node.setPosition(this._cameraMinX, 0);
    }

    update(dt: number): void {
        if (this._isStarted) {
            let cameraX = this._player.node.position.x;
            if (cameraX > 3864) {
                this.isStarted = false;
            } else {
                if (cameraX < this._cameraMinX) {
                    cameraX = this._cameraMinX;
                } else if (cameraX > this._cameraMaxX) {
                    cameraX = this._cameraMaxX;
                }
                this._camera.node.setPosition(cameraX, 0);
            }
        }
    }

    startGame(): void {
        this.isStarted = true;
        this._camera.node.setPosition(this._cameraMaxX, 0);
        this._player.node.setPosition(-3970, 94);
    }
}