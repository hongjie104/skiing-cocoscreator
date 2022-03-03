System.register("chunks:///_virtual/Closestool4.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,n,s,i,r,c;return{setters:[function(o){t=o.inheritsLoose,e=o.defineProperty,n=o.assertThisInitialized},function(o){s=o.cclegacy,i=o._decorator,r=o.Animation,c=o.Component}],execute:function(){var l;s._RF.push({},"03a65cFcZ5PYo8BHn+zk5/D","Closestool4",void 0);var a=i.ccclass;i.property,o("Closestool4",a("Closestool4")(l=function(o){function s(){for(var t,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return t=o.call.apply(o,[this].concat(i))||this,e(n(t),"_isOpen",!1),t}t(s,o);var i=s.prototype;return i.playAnimation=function(){this._isOpen||(this._isOpen=!0,this.node.getComponent(r).play())},i.reset=function(){this.node.getComponent(r).play("closestool4_close"),this._isOpen=!1},s}(c))||l);s._RF.pop()}}}));

System.register("chunks:///_virtual/utils.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){t("randomNum",(function(t,n){return Math.floor(Math.random()*(n-t+1)+t)})),n._RF.push({},"26227gjAq9JPqwfn8CYoIPF","utils",void 0),n._RF.pop()}}}));

System.register("chunks:///_virtual/Player.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,n,o,s,e,a,_,h,l,r,y,c;return{setters:[function(i){t=i.inheritsLoose,n=i.defineProperty,o=i.assertThisInitialized,s=i.createClass},function(i){e=i.cclegacy,a=i._decorator,_=i.math,h=i.RigidBody2D,l=i.Animation,r=i.Collider2D,y=i.Contact2DType,c=i.Component}],execute:function(){var p;e._RF.push({},"5de53NG6wxOe7ANdCjCzfFt","Player",void 0);var u=a.ccclass;a.property,i("Player",u("Player")(p=function(i){function e(){for(var t,s=arguments.length,e=new Array(s),a=0;a<s;a++)e[a]=arguments[a];return t=i.call.apply(i,[this].concat(e))||this,n(o(t),"_linearVelocity",new _.Vec2(0,0)),n(o(t),"_body",void 0),n(o(t),"_isStarted",!1),n(o(t),"_animation",void 0),n(o(t),"_isJumpUp",!1),n(o(t),"_isPlayingAnimation",!1),n(o(t),"_isPlayingRun",!1),t}t(e,i);var a=e.prototype;return a.start=function(){this._body=this.node.getComponent(h),this._animation=this.node.getComponent(l),this._animation.on(l.EventType.FINISHED,this._onAnimationFinished,this),this._animation.on(l.EventType.PLAY,this._onAnimationPlay,this),this._animation.on(l.EventType.STOP,this._onAnimationStop,this);var i=this.node.getComponent(r);i.on(y.BEGIN_CONTACT,this._onBeginContact,this),i.on(y.END_CONTACT,this._onEndContact,this),i.on(y.PRE_SOLVE,this._onPreSolve,this),i.on(y.POST_SOLVE,this._onPostSolve,this)},a._onAnimationFinished=function(){this._isJumpUp||(this._animation.play(),this._isPlayingAnimation=!1)},a._onAnimationStop=function(){this._isPlayingAnimation=!1,this._isPlayingRun=!1},a._onAnimationPlay=function(){this._isPlayingAnimation=!0},a.update=function(i){if(this._isStarted){this._linearVelocity.x=this._body.linearVelocity.x+.18,this._body.linearVelocity=this._linearVelocity,console.log(this.node.position);var t=this.node.position,n=t.x,o=t.y;(n>-5960&&n<-5600&&o>160||n>-1980&&n<-1900&&o>270||n>2660&&n<2680&&o>208||n>6600&&n<7e3&&o>220)&&(this._isPlayingRun||(this._animation.play("playerGun"),this._isPlayingRun=!0))}},a._onBeginContact=function(i,t,n){this._isStarted&&(this._isJumpUp=!1,this._isPlayingAnimation||this._animation.play())},a._onEndContact=function(i,t,n){this._isJumpUp=!0},a._onPreSolve=function(i,t,n){},a._onPostSolve=function(i,t,n){},s(e,[{key:"isStarted",set:function(i){this._isStarted=i,i?(this._body.node.setRotation(0,0,0,0),this._animation.play()):(this._linearVelocity.x=0,this._body.linearVelocity=this._linearVelocity,this._animation.stop())}}]),e}(c))||p);e._RF.pop()}}}));

System.register("chunks:///_virtual/Snow.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./utils.ts"],(function(t){"use strict";var e,i,n,o,r,s,a,c,d,p,l,u,h,f,y,w;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.defineProperty,o=t.assertThisInitialized,r=t.initializerDefineProperty},function(t){s=t.cclegacy,a=t._decorator,c=t.math,d=t.SpriteFrame,p=t.screen,l=t.Node,u=t.Sprite,h=t.tween,f=t.UIOpacity,y=t.Component},function(t){w=t.randomNum}],execute:function(){var S,x,m,v,_;s._RF.push({},"6f1efUPEetFCKNZDWGvVDBY","Snow",void 0);var F=a.ccclass,g=a.property,P=new c.Vec3;t("Snow",(S=F("Snow"),x=g({type:d}),S((_=e((v=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,n(o(e),"index",0),r(o(e),"snowSF",_,o(e)),n(o(e),"_sceneWidth",0),e}i(e,t);var s=e.prototype;return s.onLoad=function(){var t=p.windowSize,e=t.width,i=t.height;this._sceneWidth=1080/i*e},s.update=function(){if(this.index++,this.index%20==0){var t=new l("snow");t.addComponent(u).spriteFrame=this.snowSF,P.x=w(3,6)/10,P.y=P.x,t.setScale(P),P.x=w(-this._sceneWidth/2,this._sceneWidth/2),P.y=500,t.setPosition(P),this.node.addChild(t),P.x=t.getPosition(P).x+w(-100,100),P.y=-650,h(t).to(10.5,{position:P}).start(),h(t.addComponent(f)).to(10.5,{opacity:w(3,6)/10*255}).call((function(){t.destroy()})).start()}this.index>1e3&&(this.index=0)},e}(y)).prototype,"snowSF",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=v))||m));s._RF.pop()}}}));

System.register("chunks:///_virtual/Closestool3.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,e,n,s,i,r,l;return{setters:[function(t){o=t.inheritsLoose,e=t.defineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,i=t._decorator,r=t.Animation,l=t.Component}],execute:function(){var c;s._RF.push({},"78ec7J1bd5F04u8fDdGkR1a","Closestool3",void 0);var a=i.ccclass;i.property,t("Closestool3",a("Closestool3")(c=function(t){function s(){for(var o,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=t.call.apply(t,[this].concat(i))||this,e(n(o),"_isOpen",!1),o}o(s,t);var i=s.prototype;return i.playAnimation=function(){this._isOpen||(this._isOpen=!0,this.node.getComponent(r).play())},i.reset=function(){this.node.getComponent(r).play("closestool3_close"),this._isOpen=!1},s}(l))||c);s._RF.pop()}}}));

System.register("chunks:///_virtual/Particle.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./utils.ts"],(function(t){"use strict";var e,i,r,n,o,a,s,c,l,u,p,d,f,h,b,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized,o=t.defineProperty},function(t){a=t.cclegacy,s=t._decorator,c=t.math,l=t.SpriteFrame,u=t.CCInteger,p=t.Node,d=t.Sprite,f=t.tween,h=t.UIOpacity,b=t.Component},function(t){m=t.randomNum}],execute:function(){var y,g,w,_,F,P,v,x,z,C,T,A,D;a._RF.push({},"b231b5MbpdBg4oButDUjwQU","Particle",void 0);var B=s.ccclass,I=s.property,M=new c.Vec3;t("Particle",(y=B("Particle"),g=I([l]),w=I(u),_=I(u),F=I(u),P=I(u),y((z=e((x=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a))||this,r(n(e),"sfArr",z,n(e)),r(n(e),"startFrom",C,n(e)),r(n(e),"startTo",T,n(e)),r(n(e),"endFrom",A,n(e)),r(n(e),"endTo",D,n(e)),o(n(e),"_index",0),o(n(e),"id",0),e}return i(e,t),e.prototype.update=function(){if(this._index++,this._index%4==0){this.id++;var t=m(1,8),e=new p("flower");e.setPosition(Math.ceil(this.startFrom-100+200*(this.id+1)/4),0),e.addComponent(d).spriteFrame=this.sfArr[t],this.node.addChild(e),M.x=-m(150,400),M.y=-303,f(e).to(1,{position:M}).start(),f(e.addComponent(h)).to(1,{opacity:0}).call((function(){e.destroy()})).start(),this.id>=3&&(this.id=0)}this._index>1e3&&(this._index=0)},e}(b)).prototype,"sfArr",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=e(x.prototype,"startFrom",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),T=e(x.prototype,"startTo",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),A=e(x.prototype,"endFrom",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),D=e(x.prototype,"endTo",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=x))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts"],(function(t){"use strict";var e,i,r,n,s,a,o,c,d,u,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized,s=t.defineProperty},function(t){a=t.cclegacy,o=t._decorator,c=t.SpriteFrame,d=t.Sprite,u=t.Component},function(t){h=t.GameEvent}],execute:function(){var _,p,f,l,m;a._RF.push({},"b410ezA0FNIR62cG8F2lfin","Game",void 0);var G=o.ccclass,y=o.property;t("Game",(_=G("Game"),p=y([c]),_((m=e((l=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,r(n(e),"sfArr",m,n(e)),s(n(e),"_cd",void 0),s(n(e),"_curIdx",30),s(n(e),"_dt",0),s(n(e),"_isStarted",!1),e}i(e,t);var a=e.prototype;return a.onLoad=function(){this._cd=this.node.getChildByName("cd").getComponent(d),this._cd.spriteFrame=this.sfArr[this._curIdx],h.instance.on(h.START_GAME,this._onStartGame,this),h.instance.on(h.END_GAME,this._onEndGame,this)},a.update=function(t){this._isStarted&&(this._dt+=t,this._dt>=1&&(this._dt-=1,--this._curIdx<0?h.instance.emit(h.END_GAME,"timeout"):this._cd.spriteFrame=this.sfArr[this._curIdx]))},a._onStartGame=function(){this._isStarted=!0,this._curIdx=30,this._cd.spriteFrame=this.sfArr[this._curIdx],this._dt=0},a._onEndGame=function(){this._isStarted=!1},e}(u)).prototype,"sfArr",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Array()}}),f=l))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/Debug.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy,n=t._decorator,o=t.Component}],execute:function(){var u;r._RF.push({},"c12dfMOrNJJLqMke+o6MI8j","Debug",void 0);var c=n.ccclass;n.property,t("Debug",c("Debug")(u=function(t){function r(){return t.apply(this,arguments)||this}return e(r,t),r.prototype.start=function(){},r}(o))||u);r._RF.pop()}}}));

System.register("chunks:///_virtual/Closestool2.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,e,n,s,i,r,l;return{setters:[function(t){o=t.inheritsLoose,e=t.defineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,i=t._decorator,r=t.Animation,l=t.Component}],execute:function(){var c;s._RF.push({},"c90aeiOU1NOM4A9yv6dbnxA","Closestool2",void 0);var a=i.ccclass;i.property,t("Closestool2",a("Closestool2")(c=function(t){function s(){for(var o,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=t.call.apply(t,[this].concat(i))||this,e(n(o),"_isOpen",!1),o}o(s,t);var i=s.prototype;return i.playAnimation=function(){this._isOpen||(this._isOpen=!0,this.node.getComponent(r).play())},i.reset=function(){this.node.getComponent(r).play("closestool2_close"),this._isOpen=!1},s}(l))||c);s._RF.pop()}}}));

System.register("chunks:///_virtual/closestool3Color.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,r,s,c,n,l,i;return{setters:[function(o){t=o.inheritsLoose,e=o.defineProperty,r=o.assertThisInitialized},function(o){s=o.cclegacy,c=o._decorator,n=o.math,l=o.tween,i=o.Component}],execute:function(){var a;s._RF.push({},"cbd5bv2f/lMOZy4hdW3Cdrl","closestool3Color",void 0);var u=c.ccclass,p=(c.property,new n.Vec3(90,340)),h=new n.Vec3(90,24);o("closestool3Color",u("closestool3Color")(a=function(o){function s(){for(var t,s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return t=o.call.apply(o,[this].concat(c))||this,e(r(t),"_color",void 0),t}t(s,o);var c=s.prototype;return c.onLoad=function(){this._color=this.node.getChildByName("color")},c.start=function(){l(this._color).sequence(l(this._color).to(.5,{position:p}),l(this._color).to(.5,{position:h})).repeatForever().start()},s}(i))||a);s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Closestool4.ts","./Player.ts","./Closestool3.ts","./GameEvent.ts","./Closestool2.ts"],(function(e){"use strict";var t,i,o,s,a,n,r,l,c,h,_,p,u,m,y,d,f,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,s=e.assertThisInitialized,a=e.defineProperty,n=e.createClass},function(e){r=e.cclegacy,l=e._decorator,c=e.Camera,h=e.Node,_=e.screen,p=e.UITransform,u=e.Component},function(e){m=e.Closestool4},function(e){y=e.Player},function(e){d=e.Closestool3},function(e){f=e.GameEvent},function(e){b=e.Closestool2}],execute:function(){var g,M,v,w,X,C,P,S,z,x,G,A,E,D,L;r._RF.push({},"ccccf0aeAFIgLJrsqp6WVrw","GameManager",void 0);var N=l.ccclass,T=l.property;e("GameManager",(g=N("GameManager"),M=T({type:c,visible:!0}),v=T({type:y,visible:!0}),w=T({type:b,visible:!0}),X=T({type:d,visible:!0}),C=T({type:m,visible:!0}),P=T({type:h,visible:!0}),g((x=t((z=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,o(s(t),"_camera",x,s(t)),o(s(t),"_player",G,s(t)),o(s(t),"_closestool2",A,s(t)),o(s(t),"_closestool3",E,s(t)),o(s(t),"_closestool4",D,s(t)),o(s(t),"_snow",L,s(t)),a(s(t),"_cameraMinX",0),a(s(t),"_cameraMaxX",0),a(s(t),"_isStarted",!1),t}i(t,e);var r=t.prototype;return r.onLoad=function(){var e=_.windowSize,t=this.node.getChildByName("scene").getChildByName("bg").getComponent(p).contentSize;this._camera.orthoHeight=t.height>>1,this._cameraMinX=(t.height*e.width/e.height>>1)-(t.width>>1),this._cameraMaxX=-this._cameraMinX,this._camera.node.setPosition(this._cameraMinX,0),this._snow.setPosition(this._cameraMinX,0)},r.update=function(e){if(this._isStarted){var t=this._player.node.position.x;t>10290?this.isStarted=!1:(t<this._cameraMinX?t=this._cameraMinX:t>this._cameraMaxX&&(t=this._cameraMaxX),this._camera.node.setPosition(t,0),this._snow.setPosition(t,0));var i=this._player.node.position.x;i>-3e3&&(this._closestool2.playAnimation(),i>1850&&(this._closestool3.playAnimation(),i>5703&&this._closestool4.playAnimation()))}},r.startGame=function(){this.isStarted=!0,this._camera.node.setPosition(this._cameraMaxX,0),this._snow.setPosition(this._cameraMaxX,0),this._player.node.setPosition(-10255,111),this._closestool2.reset(),this._closestool3.reset(),this._closestool4.reset()},n(t,[{key:"isStarted",set:function(e){this._isStarted=e,this._player.isStarted=e,f.instance.emit(e?f.START_GAME:f.END_GAME)}}]),t}(u)).prototype,"_camera",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(z.prototype,"_player",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=t(z.prototype,"_closestool2",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=t(z.prototype,"_closestool3",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(z.prototype,"_closestool4",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(z.prototype,"_snow",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=z))||S));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameEvent.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,s,i,r;return{setters:[function(e){n=e.inheritsLoose,t=e.createClass,s=e.defineProperty},function(e){i=e.cclegacy,r=e.EventTarget}],execute:function(){i._RF.push({},"f1531s2uTpI072xYBVbT7lN","GameEvent",void 0);var c=e("GameEvent",function(e){function s(){return e.apply(this,arguments)||this}return n(s,e),t(s,null,[{key:"instance",get:function(){return s._instance||(s._instance=new s),s._instance}}]),s}(r));s(c,"START_GAME","startGame"),s(c,"END_GAME","endGame"),s(c,"_instance",void 0),i._RF.pop()}}}));

System.register("chunks:///_virtual/UIManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts"],(function(t){"use strict";var e,n,i,r,a,o,s,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.Node,c=t.Component},function(t){l=t.GameEvent}],execute:function(){var u,p,v,_,f,h,I;a._RF.push({},"f4872oEv99Nca/jFaxQm5i1","UIManager",void 0);var d=o.ccclass,y=o.property;t("UIManager",(u=d("UIManager"),p=y({type:s,visible:!0}),v=y({type:s,visible:!0}),u((h=e((f=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,i(r(e),"_startUI",h,r(e)),i(r(e),"_endUI",I,r(e)),e}n(e,t);var a=e.prototype;return a.start=function(){l.instance.on(l.END_GAME,this._onEndGame,this)},a.startGame=function(){this._startUI.active=!1,this._endUI.active=!1},a._onEndGame=function(){this._startUI.active=!1,this._endUI.active=!0},e}(c)).prototype,"_startUI",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=e(f.prototype,"_endUI",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=f))||_));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Closestool4.ts","./utils.ts","./Player.ts","./Snow.ts","./Closestool3.ts","./Particle.ts","./GameEvent.ts","./Game.ts","./Debug.ts","./Closestool2.ts","./closestool3Color.ts","./GameManager.ts","./UIManager.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});