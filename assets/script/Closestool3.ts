
import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Closestool3')
export class Closestool3 extends Component {

    private _isOpen = false;

    playAnimation(): void {
        if (!this._isOpen) {
            this._isOpen = true;
            this.node.getComponent(Animation).play();
        }
    }

    reset(): void {
        this.node.getComponent(Animation).play('closestool3_close');
        this._isOpen = false;
    }
}