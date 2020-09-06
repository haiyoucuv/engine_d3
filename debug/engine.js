var __extends;var __assign;var __rest;var __decorate;var __param;var __metadata;var __awaiter;var __generator;var __exportStar;var __values;var __read;var __spread;var __spreadArrays;var __await;var __asyncGenerator;var __asyncDelegator;var __asyncValues;var __makeTemplateObject;var __importStar;var __importDefault;(function(factory){var root=typeof global==="object"?global:typeof self==="object"?self:typeof this==="object"?this:{};if(typeof define==="function"&&define.amd){define("tslib",["exports"],function(exports){factory(createExporter(root,createExporter(exports)))})}else{if(typeof module==="object"&&typeof module.exports==="object"){factory(createExporter(root,createExporter(module.exports)))}else{factory(createExporter(root))}}function createExporter(exports,previous){if(exports!==root){if(typeof Object.create==="function"){Object.defineProperty(exports,"__esModule",{value:true})}else{exports.__esModule=true}}return function(id,v){return exports[id]=previous?previous(id,v):v}}})(function(exporter){var extendStatics=Object.setPrototypeOf||({__proto__:[]} instanceof Array&&function(d,b){d.__proto__=b})||function(d,b){for(var p in b){if(b.hasOwnProperty(p)){d[p]=b[p]}}};__extends=function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())};__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)){t[p]=s[p]}}}return t};__rest=function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0){t[p]=s[p]}}if(s!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])){t[p[i]]=s[p[i]]}}}return t};__decorate=function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function"){r=Reflect.decorate(decorators,target,key,desc)}else{for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i]){r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}}}return c>3&&r&&Object.defineProperty(target,key,r),r};__param=function(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}};__metadata=function(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function"){return Reflect.metadata(metadataKey,metadataValue)}};__awaiter=function(thisArg,_arguments,P,generator){return new (P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};__generator=function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1){throw t[1]}return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f){throw new TypeError("Generator is already executing.")}while(_){try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done){return t}if(y=0,t){op=[op[0]&2,t.value]}switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||(op[1]>t[0]&&op[1]<t[3]))){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2]){_.ops.pop()}_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}}if(op[0]&5){throw op[1]}return{value:op[0]?op[1]:void 0,done:true}
}};__exportStar=function(m,exports){for(var p in m){if(!exports.hasOwnProperty(p)){exports[p]=m[p]}}};__values=function(o){var m=typeof Symbol==="function"&&o[Symbol.iterator],i=0;if(m){return m.call(o)}return{next:function(){if(o&&i>=o.length){o=void 0}return{value:o&&o[i++],done:!o}}}};__read=function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m){return o}var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value)}}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"])){m.call(i)}}finally{if(e){throw e.error}}}return ar};__spread=function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]))}return ar};__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++){s+=arguments[i].length}for(var r=Array(s),k=0,i=0;i<il;i++){for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++){r[k]=a[j]}}return r};__await=function(v){return this instanceof __await?(this.v=v,this):new __await(v)};__asyncGenerator=function(thisArg,_arguments,generator){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n]){i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v)})}}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length){resume(q[0][0],q[0][1])}}};__asyncDelegator=function(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v}:f}};__asyncValues=function(o){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}};__makeTemplateObject=function(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};__importStar=function(mod){if(mod&&mod.__esModule){return mod}var result={};if(mod!=null){for(var k in mod){if(Object.hasOwnProperty.call(mod,k)){result[k]=mod[k]}}}result["default"]=mod;return result};__importDefault=function(mod){return(mod&&mod.__esModule)?mod:{"default":mod}};exporter("__extends",__extends);exporter("__assign",__assign);exporter("__rest",__rest);exporter("__decorate",__decorate);exporter("__param",__param);exporter("__metadata",__metadata);exporter("__awaiter",__awaiter);exporter("__generator",__generator);exporter("__exportStar",__exportStar);exporter("__values",__values);exporter("__read",__read);exporter("__spread",__spread);exporter("__spreadArrays",__spreadArrays);exporter("__await",__await);exporter("__asyncGenerator",__asyncGenerator);exporter("__asyncDelegator",__asyncDelegator);exporter("__asyncValues",__asyncValues);exporter("__makeTemplateObject",__makeTemplateObject);exporter("__importStar",__importStar);exporter("__importDefault",__importDefault)});
var tslib = {__extends: __extends,__assign: __assign,__rest: __rest,__decorate: __decorate,__param: __param,__metadata: __metadata,__awaiter: __awaiter,__generator: __generator,__exportStar: __exportStar,__values: __values,__read: __read,__spread: __spread,__spreadArrays: __spreadArrays,__await: __await,__asyncGenerator: __asyncGenerator,__asyncDelegator: __asyncDelegator,__asyncValues: __asyncValues,__makeTemplateObject: __makeTemplateObject,__importStar: __importStar,__importDefault: __importDefault};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', 'tslib'], factory) :
    (global = global || self, factory(global.engine = {}, global.tslib));
}(this, (function (exports, tslib_1) { 'use strict';

    var BaseObject = (function () {
        function BaseObject() {
            this.children = [];
            this._name = '';
            this._parent = null;
            this._x = 0;
            this._y = 0;
            this._width = 0;
            this._height = 0;
        }
        BaseObject.prototype.init = function () {
            this.style = this.entity.style;
            this.style.position = 'absolute';
        };
        BaseObject.prototype.start = function () {
        };
        BaseObject.prototype.update = function (dt) {
            this.children.forEach(function (v) { return v.update(dt); });
        };
        BaseObject.prototype.afterUpdate = function (dt) {
            this.children.forEach(function (v) { return v.afterUpdate(dt); });
        };
        BaseObject.prototype.destroy = function () {
        };
        BaseObject.prototype.hasChild = function () {
            return this.children.length > 0;
        };
        BaseObject.prototype.addChild = function (child) {
            if (child.parent) {
                throw "这个child已经有parent了";
            }
            if (this.children.length > 0) {
                this.entity.insertBefore(child.entity, this.children[0].entity);
            }
            else {
                this.entity.appendChild(child.entity);
            }
            this.children.unshift(child);
        };
        BaseObject.prototype.removeChild = function (child) {
            if (child.parent != this) {
                throw "这个child的parent不是它";
            }
            this.entity.removeChild(child);
        };
        Object.defineProperty(BaseObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (parent) {
                parent.addChild(this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (x) {
                this._x = x;
                this.style.left = x + 'px';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (y) {
                this._y = y;
                this.style.top = y + 'px';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (width) {
                this._width = width;
                this.style.width = width + 'px';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (height) {
                this._height = height;
                this.style.height = height + 'px';
            },
            enumerable: true,
            configurable: true
        });
        return BaseObject;
    }());

    var Group = (function (_super) {
        tslib_1.__extends(Group, _super);
        function Group() {
            var _this = _super.call(this) || this;
            _this.entity = document.createElement('div');
            _this.init();
            return _this;
        }
        return Group;
    }(BaseObject));

    var Image = (function (_super) {
        tslib_1.__extends(Image, _super);
        function Image() {
            var _this = _super.call(this) || this;
            _this.img = new window.Image();
            _this.entity.appendChild(_this.img);
            return _this;
        }
        Object.defineProperty(Image.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (width) {
                this._width = width;
                this.style.width = width + 'px';
                this.img.width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (height) {
                this._height = height;
                this.style.height = height + 'px';
                this.img.height = height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "src", {
            get: function () {
                return this.img.src;
            },
            set: function (src) {
                this.img.src = src;
            },
            enumerable: true,
            configurable: true
        });
        return Image;
    }(Group));

    var Stage = (function (_super) {
        tslib_1.__extends(Stage, _super);
        function Stage() {
            return _super.call(this) || this;
        }
        return Stage;
    }(Group));

    var Game = (function () {
        function Game() {
            this.name = 'Game';
            this.gameStage = new Stage();
            this.style = this.gameStage.style;
            this._lastTime = Date.now();
            this.fps = 0;
            this.gameStage.style.position = 'absolute';
            this.gameStage.width = document.documentElement.clientWidth;
            this.gameStage.height = document.documentElement.clientHeight;
            document.body.appendChild(this.gameStage.entity);
            this.update();
        }
        Game.prototype.addChild = function (child) {
            this.gameStage.addChild(child);
        };
        Game.prototype.removeChild = function (child) {
            this.gameStage.removeChild(child);
        };
        Game.prototype.update = function () {
            var dt = (Date.now() - this._lastTime) / 1000;
            this.fps = ~~(1 / dt);
            this.gameStage.children.forEach(function (v) { return v.update(dt); });
            this._lastTime = Date.now();
            requestAnimationFrame(this.update.bind(this));
        };
        return Game;
    }());

    var Scene = (function () {
        function Scene() {
        }
        return Scene;
    }());

    exports.BaseObject = BaseObject;
    exports.Game = Game;
    exports.Group = Group;
    exports.Image = Image;
    exports.Scene = Scene;
    exports.Stage = Stage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=engine.js.map
