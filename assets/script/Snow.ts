
import { _decorator, Component, SpriteFrame, Node, Sprite, math, screen, tween, UIOpacity } from 'cc';
import { randomNum } from './utils';
const { ccclass, property } = _decorator;

const VEC3: math.Vec3 = new math.Vec3();

@ccclass('Snow')
export class Snow extends Component {
    private index = 0;

    @property({ type: SpriteFrame })
    snowSF: SpriteFrame;

    private _sceneWidth = 0;

    onLoad() {
        const { windowSize: { width, height } } = screen;
        this._sceneWidth = 1080 / height * width;
    }

    update() {
        this.index++;
        if (this.index % 20 === 0) {
            const item = new Node("snow");
            item.addComponent(Sprite).spriteFrame = this.snowSF;
            VEC3.x = randomNum(3, 6) / 10;
            VEC3.y = VEC3.x;
            item.setScale(VEC3);

            // VEC3.x = randomNum(0, 750 - Math.ceil(100 * VEC3.x / 10));
            VEC3.x = randomNum(-this._sceneWidth / 2, this._sceneWidth / 2);
            VEC3.y = 500;
            item.setPosition(VEC3);

            this.node.addChild(item);

            VEC3.x = item.getPosition(VEC3).x + randomNum(-100, 100);
            VEC3.y = -650;
            tween(item).to(10.5, { position: VEC3 }).start();
            tween(item.addComponent(UIOpacity)).to(10.5, { opacity: randomNum(3, 6) / 10 * 255 }).call(() => { item.destroy(); }).start();

        }
        if (this.index > 1000) { this.index = 0; }
    }
}