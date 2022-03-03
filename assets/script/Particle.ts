
import { _decorator, Component, Node, Sprite, SpriteFrame, CCInteger, tween, math, UIOpacity, UITransform } from 'cc';
import { randomNum } from './utils';
const { ccclass, property } = _decorator;

const VEC3: math.Vec3 = new math.Vec3();

@ccclass('Particle')
export class Particle extends Component {

    @property([SpriteFrame])
    sfArr: SpriteFrame[] = [];

    @property(CCInteger)
    startFrom = 0;

    @property(CCInteger)
    startTo = 0;

    @property(CCInteger)
    endFrom = 0;

    @property(CCInteger)
    endTo = 0;

    private _index = 0;

    private id = 0;

    update(): void {
        // this._index++;
        // if (this._index % 4) {
        //     this.id++;
        //     const id = randomNum(1, 8);
        //     const item = new Node('flower');
        //     item.setPosition(randomNum(this.startFrom, this.startTo), 0)
        //     const s = item.addComponent(Sprite);
        //     s.spriteFrame = this.sfArr[id];
        //     this.node.addChild(item);
        //     let x = randomNum(this.endFrom, item.position.x);
        //     if (this.id == 2) {
        //         x = randomNum(this.endFrom, this.endTo);
        //     } else if (this.id == 3) {
        //         x = randomNum(item.position.x, this.endTo);
        //     }
        //     tween(item).to(0.5, { position: new math.Vec3(x, -303) }).call(() => {
        //         item.destroy();
        //     }).start();
        //     if (this.id >= 3) { this.id = 0; }
        // }
        // if (this._index > 1000) { this._index = 0; }

        this._index++;
        if (this._index % 4 === 0) {
            this.id++;
            const id = randomNum(1, 8);
            // const item = Main.createBitmapByName(`flower${id}_png`);
            const item = new Node('flower');
            item.setPosition(Math.ceil(this.startFrom - 100 + 200 * (this.id + 1) / 4), 0)
            const s = item.addComponent(Sprite);
            s.spriteFrame = this.sfArr[id];
            this.node.addChild(item);
            VEC3.x = -randomNum(150, 400);
            VEC3.y = -303;
            tween(item).to(1, { position: VEC3 }).start();
            tween(item.addComponent(UIOpacity)).to(1, { opacity: 0 }).call(() => { item.destroy(); }).start();
            if (this.id >= 3) { this.id = 0; }
        }
        if (this._index > 1000) { this._index = 0; }
    }

}