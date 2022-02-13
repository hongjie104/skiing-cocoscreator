
import { _decorator, Component, Node, RigidBody2D, math, Collider2D, Contact2DType, IPhysics2DContact, assetManager, Sprite, ImageAsset, SpriteFrame, Texture2D, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    private _linearVelocity = new math.Vec2(0, 0);

    private _body: RigidBody2D;

    private _isStarted = false;

    set isStarted(val: boolean) {
        this._isStarted = val;
        if (!val) {
            this._linearVelocity.x = 0;
            this._body.linearVelocity = this._linearVelocity;
        } else {
            this._body.node.setRotation(0, 0, 0, 0);
        }
    }

    start() {
        this._body = this.node.getComponent(RigidBody2D);

        // const collider = this.node.getComponent(Collider2D);
        // collider.on(Contact2DType.BEGIN_CONTACT, this._onBeginContact, this);
        // collider.on(Contact2DType.END_CONTACT, this._onEndContact, this);
        // collider.on(Contact2DType.PRE_SOLVE, this._onPreSolve, this);
        // collider.on(Contact2DType.POST_SOLVE, this._onPostSolve, this);

        // if (this._body.node.rotation.z)
        // this._body.node.setRotationFromEuler(0, 0, 45);

        // assetManager.loadRemote('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F30%2F90%2F40%2F309040a0602c672cebc6ab3a1bbbc8cd.jpg', (err, imageAsset: ImageAsset) => {
        //     const spriteFrame = new SpriteFrame();
        //     const texture = new Texture2D();
        //     texture.image = imageAsset;
        //     spriteFrame.texture = texture;
        //     const head = this.node.getChildByName("head");
        //     head.getComponent(Sprite).spriteFrame = spriteFrame;
        //     head.getComponent(UITransform).setContentSize(51,51);
        // });
    }

    update(dt: number): void {
        if (this._isStarted) {
            this._linearVelocity.x = this._body.linearVelocity.x + 0.16;
            this._body.linearVelocity = this._linearVelocity;
            // let { rotation: { z, w } } = this._body.node;
            // // if (z < -0.1) z = -0.1;
            // // if (z > 0.1) z=0.1;
            // if (z < -0.1) {
            //     this._body.node.setRotation(0, 0, 0, w);
            // }
        }
    }

    // _onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 只在两个碰撞体开始接触时被调用一次
    //     console.log('onBeginContact');
    // }
    // _onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 只在两个碰撞体结束接触时被调用一次
    //     console.log('onEndContact');
    // }
    // _onPreSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次将要处理碰撞体接触逻辑时被调用
    //     console.log('onPreSolve');
    // }
    // _onPostSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次处理完碰撞体接触逻辑时被调用
    //     console.log('onPostSolve');
    // }
}