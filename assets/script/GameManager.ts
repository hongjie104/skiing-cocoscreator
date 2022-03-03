
import { _decorator, Component, Camera, UITransform, screen, Node } from 'cc';
import { Closestool2 } from './Closestool2';
import { Closestool3 } from './Closestool3';
import { Closestool4 } from './Closestool4';
import { GameEvent } from './GameEvent';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property({ type: Camera, visible: true })
    _camera: Camera;

    @property({ type: Player, visible: true })
    _player: Player;

    @property({ type: Closestool2, visible: true })
    _closestool2: Closestool2;

    @property({ type: Closestool3, visible: true })
    _closestool3: Closestool3;

    @property({ type: Closestool4, visible: true })
    _closestool4: Closestool4;

    @property({ type: Node, visible: true })
    _snow: Node;

    private _cameraMinX = 0;
    private _cameraMaxX = 0;

    private _isStarted = false;

    set isStarted(val: boolean) {
        this._isStarted = val;
        this._player.isStarted = val;
        GameEvent.instance.emit(val ? GameEvent.START_GAME: GameEvent.END_GAME);
    }

    onLoad() {
        const { windowSize } = screen;
        const { contentSize } = this.node.getChildByName('scene').getChildByName('bg').getComponent(UITransform);
        this._camera.orthoHeight = contentSize.height >> 1;
        this._cameraMinX = ((contentSize.height * windowSize.width / windowSize.height) >> 1) - (contentSize.width >> 1);
        this._cameraMaxX = -this._cameraMinX;
        this._camera.node.setPosition(this._cameraMinX, 0);
        this._snow.setPosition(this._cameraMinX, 0);
    }

    update(dt: number): void {
        if (this._isStarted) {
            let cameraX = this._player.node.position.x;
            if (cameraX > 10290) {
                this.isStarted = false;
            } else {
                if (cameraX < this._cameraMinX) {
                    cameraX = this._cameraMinX;
                } else if (cameraX > this._cameraMaxX) {
                    cameraX = this._cameraMaxX;
                }
                this._camera.node.setPosition(cameraX, 0);
                this._snow.setPosition(cameraX, 0);
            }
            const { x } = this._player.node.position;
            if (x > -3000) {
                this._closestool2.playAnimation();
                if (x > 1850) {
                    this._closestool3.playAnimation();
                    if (x > 5703) {
                        this._closestool4.playAnimation();
                    }
                }
            }
        }
    }

    startGame(): void {
        this.isStarted = true;
        this._camera.node.setPosition(this._cameraMaxX, 0);
        this._snow.setPosition(this._cameraMaxX, 0);
        this._player.node.setPosition(-10255, 111);
        this._closestool2.reset();
        this._closestool3.reset();
        this._closestool4.reset();
    }
}