var __extends;var __assign;var __rest;var __decorate;var __param;var __metadata;var __awaiter;var __generator;var __exportStar;var __values;var __read;var __spread;var __spreadArrays;var __await;var __asyncGenerator;var __asyncDelegator;var __asyncValues;var __makeTemplateObject;var __importStar;var __importDefault;(function(factory){var root=typeof global==="object"?global:typeof self==="object"?self:typeof this==="object"?this:{};if(typeof define==="function"&&define.amd){define("tslib",["exports"],function(exports){factory(createExporter(root,createExporter(exports)))})}else{if(typeof module==="object"&&typeof module.exports==="object"){factory(createExporter(root,createExporter(module.exports)))}else{factory(createExporter(root))}}function createExporter(exports,previous){if(exports!==root){if(typeof Object.create==="function"){Object.defineProperty(exports,"__esModule",{value:true})}else{exports.__esModule=true}}return function(id,v){return exports[id]=previous?previous(id,v):v}}})(function(exporter){var extendStatics=Object.setPrototypeOf||({__proto__:[]} instanceof Array&&function(d,b){d.__proto__=b})||function(d,b){for(var p in b){if(b.hasOwnProperty(p)){d[p]=b[p]}}};__extends=function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())};__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)){t[p]=s[p]}}}return t};__rest=function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0){t[p]=s[p]}}if(s!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])){t[p[i]]=s[p[i]]}}}return t};__decorate=function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function"){r=Reflect.decorate(decorators,target,key,desc)}else{for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i]){r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}}}return c>3&&r&&Object.defineProperty(target,key,r),r};__param=function(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}};__metadata=function(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function"){return Reflect.metadata(metadataKey,metadataValue)}};__awaiter=function(thisArg,_arguments,P,generator){return new (P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};__generator=function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1){throw t[1]}return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f){throw new TypeError("Generator is already executing.")}while(_){try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done){return t}if(y=0,t){op=[op[0]&2,t.value]}switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||(op[1]>t[0]&&op[1]<t[3]))){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2]){_.ops.pop()}_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}}if(op[0]&5){throw op[1]}return{value:op[0]?op[1]:void 0,done:true}
}};__exportStar=function(m,exports){for(var p in m){if(!exports.hasOwnProperty(p)){exports[p]=m[p]}}};__values=function(o){var m=typeof Symbol==="function"&&o[Symbol.iterator],i=0;if(m){return m.call(o)}return{next:function(){if(o&&i>=o.length){o=void 0}return{value:o&&o[i++],done:!o}}}};__read=function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m){return o}var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value)}}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"])){m.call(i)}}finally{if(e){throw e.error}}}return ar};__spread=function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]))}return ar};__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++){s+=arguments[i].length}for(var r=Array(s),k=0,i=0;i<il;i++){for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++){r[k]=a[j]}}return r};__await=function(v){return this instanceof __await?(this.v=v,this):new __await(v)};__asyncGenerator=function(thisArg,_arguments,generator){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n]){i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v)})}}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length){resume(q[0][0],q[0][1])}}};__asyncDelegator=function(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v}:f}};__asyncValues=function(o){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}};__makeTemplateObject=function(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};__importStar=function(mod){if(mod&&mod.__esModule){return mod}var result={};if(mod!=null){for(var k in mod){if(Object.hasOwnProperty.call(mod,k)){result[k]=mod[k]}}}result["default"]=mod;return result};__importDefault=function(mod){return(mod&&mod.__esModule)?mod:{"default":mod}};exporter("__extends",__extends);exporter("__assign",__assign);exporter("__rest",__rest);exporter("__decorate",__decorate);exporter("__param",__param);exporter("__metadata",__metadata);exporter("__awaiter",__awaiter);exporter("__generator",__generator);exporter("__exportStar",__exportStar);exporter("__values",__values);exporter("__read",__read);exporter("__spread",__spread);exporter("__spreadArrays",__spreadArrays);exporter("__await",__await);exporter("__asyncGenerator",__asyncGenerator);exporter("__asyncDelegator",__asyncDelegator);exporter("__asyncValues",__asyncValues);exporter("__makeTemplateObject",__makeTemplateObject);exporter("__importStar",__importStar);exporter("__importDefault",__importDefault)});
var tslib = {__extends: __extends,__assign: __assign,__rest: __rest,__decorate: __decorate,__param: __param,__metadata: __metadata,__awaiter: __awaiter,__generator: __generator,__exportStar: __exportStar,__values: __values,__read: __read,__spread: __spread,__spreadArrays: __spreadArrays,__await: __await,__asyncGenerator: __asyncGenerator,__asyncDelegator: __asyncDelegator,__asyncValues: __asyncValues,__makeTemplateObject: __makeTemplateObject,__importStar: __importStar,__importDefault: __importDefault};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', 'tslib'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hycv = {}, global.tslib));
}(this, (function (exports, tslib) { 'use strict';

    var Vector3 = (function () {
        function Vector3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Object.defineProperty(Vector3.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            },
            enumerable: false,
            configurable: true
        });
        Vector3.clone = function (v) {
            return new Vector3().copy(v);
        };
        Vector3.prototype.set = function (x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        };
        Vector3.prototype.copy = function (v) {
            return this.set(v.x, v.y, v.z);
        };
        Vector3.prototype.add = function (value) {
            if (value instanceof Vector3) {
                this.x += value.x;
                this.y += value.y;
                this.z += value.z;
                return this;
            }
            this.x += value;
            this.y += value;
            this.z += value;
            return this;
        };
        Vector3.prototype.adds = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) {
                _this.add(value);
            });
            return this;
        };
        Vector3.prototype.addScaled = function (value, scale) {
            this.sub(value).scale(scale);
            return this;
        };
        Vector3.prototype.sub = function (value) {
            if (value instanceof Vector3) {
                this.x -= value.x;
                this.y -= value.y;
                this.z -= value.z;
                return this;
            }
            this.x -= value;
            this.y -= value;
            this.z -= value;
            return this;
        };
        Vector3.prototype.subs = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) {
                _this.sub(value);
            });
            return this;
        };
        Vector3.prototype.scale = function (value) {
            this.x *= value;
            this.y *= value;
            this.z *= value;
            return this;
        };
        Vector3.prototype.scales = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) {
                _this.scale(value);
            });
            return this;
        };
        Vector3.prototype.divide = function (value) {
            if (value instanceof Vector3) {
                this.x /= value.x;
                this.y /= value.y;
                this.z /= value.z;
                return this;
            }
            this.x /= value;
            this.y /= value;
            this.z /= value;
            return this;
        };
        Vector3.prototype.divides = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) {
                _this.divide(value);
            });
            return this;
        };
        Vector3.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        };
        Vector3.prototype.crossVector = function (v) {
            this.x = this.y * v.z - this.z * v.y;
            this.y = this.z * v.x - this.x * v.z;
            this.z = this.x * v.y - this.y * v.x;
            return this;
        };
        Vector3.prototype.cross = function (v1, v2) {
            return new Vector3().copy(v1).crossVector(v2);
        };
        Vector3.prototype.normalize = function () {
            return this.scale(1 / (this.length || 1));
        };
        return Vector3;
    }());

    var EventDispatcher = (function () {
        function EventDispatcher() {
            this._listeners = {};
        }
        EventDispatcher.prototype.addEventListener = function (type, listener) {
            if (this._listeners === undefined)
                this._listeners = {};
            var listeners = this._listeners;
            if (listeners[type] === undefined) {
                listeners[type] = [];
            }
            if (listeners[type].indexOf(listener) === -1) {
                listeners[type].push(listener);
            }
        };
        EventDispatcher.prototype.hasEventListener = function (type, listener) {
            if (this._listeners === undefined)
                return false;
            var listeners = this._listeners;
            return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
        };
        EventDispatcher.prototype.removeEventListener = function (type, listener) {
            if (this._listeners === undefined)
                return;
            var listeners = this._listeners;
            var listenerArray = listeners[type];
            if (listenerArray !== undefined) {
                var index = listenerArray.indexOf(listener);
                if (index !== -1) {
                    listenerArray.splice(index, 1);
                }
            }
        };
        EventDispatcher.prototype.dispatchEvent = function (event) {
            if (this._listeners === undefined)
                return;
            var listeners = this._listeners;
            var listenerArray = listeners[event.type];
            if (listenerArray !== undefined) {
                event.target = this;
                var array = listenerArray.slice(0);
                for (var i = 0, l = array.length; i < l; i++) {
                    array[i].call(this, event);
                }
            }
        };
        return EventDispatcher;
    }());

    var App = (function () {
        function App() {
            this._lt = Date.now();
        }
        App.create = function () {
            return new App();
        };
        App.prototype.mainLoop = function () {
            var now = Date.now();
            var dt = now - this._lt;
            this._lt = now;
            requestAnimationFrame(this.mainLoop);
        };
        return App;
    }());
    var app = App.create();

    var Director = (function () {
        function Director() {
        }
        Director.create = function () {
            return new Director();
        };
        return Director;
    }());
    var director = Director.create();

    var devicePixelRatio = window.devicePixelRatio;

    var WebGLRenderer = (function () {
        function WebGLRenderer() {
        }
        Object.defineProperty(WebGLRenderer.prototype, "canvas", {
            get: function () {
                return this._canvas;
            },
            set: function (canvas) {
                this._canvas = canvas;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WebGLRenderer.prototype, "gl", {
            get: function () {
                return this._gl;
            },
            set: function (gl) {
                this._gl = gl;
            },
            enumerable: false,
            configurable: true
        });
        WebGLRenderer.create = function (canvas) {
            var renderer = new WebGLRenderer();
            if (typeof canvas == "string") {
                renderer.canvas = document.getElementById(canvas);
            }
            else {
                renderer.canvas = canvas;
            }
            var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var v = names_1[_i];
                try {
                    renderer.gl = renderer.canvas.getContext(v);
                    break;
                }
                catch (e) {
                }
            }
            if (!renderer.gl) {
                throw 'WebGL not supported.';
            }
            return renderer;
        };
        return WebGLRenderer;
    }());

    var Object3D = (function (_super) {
        tslib.__extends(Object3D, _super);
        function Object3D() {
            return _super.call(this) || this;
        }
        return Object3D;
    }(EventDispatcher));

    var Scene = (function (_super) {
        tslib.__extends(Scene, _super);
        function Scene() {
            return _super.call(this) || this;
        }
        return Scene;
    }(Object3D));

    exports.EventDispatcher = EventDispatcher;
    exports.Object3D = Object3D;
    exports.Scene = Scene;
    exports.Vector3 = Vector3;
    exports.WebGLRenderer = WebGLRenderer;
    exports.app = app;
    exports.devicePixelRatio = devicePixelRatio;
    exports.director = director;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hycv.js.map
