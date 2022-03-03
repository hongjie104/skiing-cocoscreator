
import { _decorator, Component, Animation, RigidBody2D, math, Collider2D, Contact2DType, IPhysics2DContact, assetManager, Sprite, ImageAsset, SpriteFrame, Texture2D, UITransform, isDisplayStats } from 'cc';
import { randomNum } from './utils';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    private _linearVelocity = new math.Vec2(0, 0);

    private _body: RigidBody2D;

    private _isStarted = false;

    private _animation: Animation;

    private _isJumpUp = false;

    private _isPlayingAnimation = false;

    private _isPlayingRun = false;

    set isStarted(val: boolean) {
        this._isStarted = val;
        if (!val) {
            this._linearVelocity.x = 0;
            this._body.linearVelocity = this._linearVelocity;
            this._animation.stop();
        } else {
            this._body.node.setRotation(0, 0, 0, 0);
            this._animation.play();
        }
    }

    start() {
        this._body = this.node.getComponent(RigidBody2D);
        this._animation = this.node.getComponent(Animation);
        this._animation.on(Animation.EventType.FINISHED, this._onAnimationFinished, this);
        this._animation.on(Animation.EventType.PLAY, this._onAnimationPlay, this);
        this._animation.on(Animation.EventType.STOP, this._onAnimationStop, this);

        const collider = this.node.getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this._onBeginContact, this);
        collider.on(Contact2DType.END_CONTACT, this._onEndContact, this);
        collider.on(Contact2DType.PRE_SOLVE, this._onPreSolve, this);
        collider.on(Contact2DType.POST_SOLVE, this._onPostSolve, this);

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

    private _onAnimationFinished(): void {
        if (!this._isJumpUp) {
            this._animation.play();
            this._isPlayingAnimation = false;
        }
    }

    private _onAnimationStop(): void {
        this._isPlayingAnimation = false;
        this._isPlayingRun = false;
    }

    private _onAnimationPlay(): void {
        this._isPlayingAnimation = true;
    }

    update(dt: number): void {
        if (this._isStarted) {
            this._linearVelocity.x = this._body.linearVelocity.x + 0.18; // randomNum(16, 20) / 100;
            this._body.linearVelocity = this._linearVelocity;
            console.log(this.node.position);
            const { x, y } = this.node.position;
            // if (x > -5890 && y > 155) {
            //     this.node.getComponent(RigidBody2D).fixedRotation = true;
            // } else if (x > -5240 && y < 175) {
            //     this.node.getComponent(RigidBody2D).fixedRotation = false;
            // }
            if (x > -5960 && x < -5600 && y > 160) {
                if (!this._isPlayingRun) {
                    this._animation.play("playerGun");
                    this._isPlayingRun = true;
                }
            } else if (x > -1980 && x < -1900 && y > 270) {
                if (!this._isPlayingRun) {
                    this._animation.play("playerGun");
                    this._isPlayingRun = true;
                }
            } else if (x > 2660 && x < 2680 && y > 208) {
                if (!this._isPlayingRun) {
                    this._animation.play("playerGun");
                    this._isPlayingRun = true;
                }
            } else if (x > 6600 && x < 7000 && y > 220) {
                if (!this._isPlayingRun) {
                    this._animation.play("playerGun");
                    this._isPlayingRun = true;
                }
            }
        }
    }

    _onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        // console.log('onBeginContact');
        // this._isHitting = true;
        // console.log("true");
        if (this._isStarted) {
            this._isJumpUp = false;
            if (!this._isPlayingAnimation) {
                this._animation.play();
            }
        }
    }
    _onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        // console.log('onEndContact');
        // console.log(selfCollider.node.rotation);
        // console.log(contact);
        // this._isHitting = false;
        // console.log("false");
        this._isJumpUp = true;
    }
    _onPreSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次将要处理碰撞体接触逻辑时被调用
        // console.log('onPreSolve');
    }
    _onPostSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次处理完碰撞体接触逻辑时被调用
        // console.log('onPostSolve');
    }
}