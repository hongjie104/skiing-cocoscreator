
import { _decorator, Component, Node, Sprite, SpriteFrame, CCInteger, tween, math } from 'cc';
import { randomNum } from './utils';
const { ccclass, property } = _decorator;

@ccclass('Particle')
export class Particle extends Component {

    @property([SpriteFrame])
    sfArr:SpriteFrame[] = [];

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

    update():void {
        this._index++;
       if (this._index % 4) {
           this.id++;
           const id = randomNum(1, 8);
           const item = new Node('flower');
           item.setPosition(randomNum(this.startFrom, this.startTo), 0)
           const s = item.addComponent(Sprite);
           s.spriteFrame = this.sfArr[id];
           this.node.addChild(item);
              let x = randomNum(this.endFrom,item.position.x);
           if (this.id == 2) {
            x = randomNum(this.endFrom,this.endTo);
           } else if(this.id == 3){
            x = randomNum(item.position.x,this.endTo);
           }
           tween(item).to(0.5, {position: new math.Vec3(x, -303)}).call(() => {
               item.removeFromParent();
               item.destroy();
           }).start();
           if (this.id>=3) { this.id = 0; }
       }
       if (this._index > 1000) { this._index = 0;}
    }

}

// class Flower extends egret.DisplayObjectContainer{
//     private index:number = 0;
//     private playing:boolean = false;
//     private id:number = 0;

//     public start;
//     public end;

//     public constructor() {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        
//     }

//     private onAddToStage(event: egret.Event) {
       
       
//     }
//     private onEnterFrame(event: egret.Event) {

//     }

//     public play() {
//         console.log('flower play');
//         this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
//     }

//     public stop() {
//         this.playing = false;
//         this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
//     }
    
// }