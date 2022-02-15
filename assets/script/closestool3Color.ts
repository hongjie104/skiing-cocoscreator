
import { _decorator, Component, Node, tween, math } from 'cc';
const { ccclass, property } = _decorator;

const maxY = new math.Vec3(90, 340);
const minY = new math.Vec3(90, 24);

@ccclass('closestool3Color')
export class closestool3Color extends Component {
    private _color: Node;
    onLoad() {
        this._color = this.node.getChildByName('color');
    }

    start(): void {
        tween(this._color).sequence(
            tween(this._color).to(.5, { position: maxY }),
            tween(this._color).to(.5, { position: minY }),
        ).repeatForever().start();
    }
}