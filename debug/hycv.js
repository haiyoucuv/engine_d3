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
        WebGLRenderer.prototype.init = function () {
            var gl = this.gl;
            gl.clearColor(0.2, 0.2, 0.2, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.enable(gl.BLEND);
            gl.enable(gl.DEPTH_TEST);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        };
        WebGLRenderer.prototype.onResize = function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        };
        WebGLRenderer.create = function (canvas) {
            var renderer = new WebGLRenderer();
            if (!canvas) {
                renderer.canvas = document.createElement('canvas');
            }
            else if (typeof canvas == "string") {
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
            renderer.init();
            return renderer;
        };
        WebGLRenderer.prototype.render = function (scene) {
        };
        return WebGLRenderer;
    }());

    var App = (function () {
        function App() {
            var _this = this;
            this._lt = Date.now();
            this.mainLoop = function () {
                var now = Date.now();
                var dt = (now - _this._lt) / 1000;
                _this._lt = now;
                if (_this.currentScene) {
                    _this.currentScene.update(dt);
                    _this.renderer.render(_this.currentScene);
                }
                requestAnimationFrame(_this.mainLoop);
            };
            this.renderer = WebGLRenderer.create();
            document.body.appendChild(this.renderer.canvas);
            this.onResize();
            this.initEvent();
            this.mainLoop();
        }
        Object.defineProperty(App.prototype, "currentScene", {
            get: function () {
                return this._currentScene;
            },
            set: function (scene) {
                this._currentScene = scene;
            },
            enumerable: false,
            configurable: true
        });
        App.create = function () {
            return new App();
        };
        App.prototype.onResize = function () {
            this.winWidth = window.innerWidth;
            this.winHeight = window.innerHeight;
            this.renderer.onResize();
            this.currentScene && this.currentScene.onResize();
        };
        App.prototype.initEvent = function () {
            window.onresize = this.onResize;
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
        Object.defineProperty(Director.prototype, "currentScene", {
            get: function () {
                return app.currentScene;
            },
            enumerable: false,
            configurable: true
        });
        Director.prototype.changeScene = function (scene) {
            var oldScene = this.currentScene;
            app.currentScene = scene;
            app.currentScene.init();
            oldScene && oldScene.destroy();
        };
        return Director;
    }());
    var director = Director.create();

    var devicePixelRatio = window.devicePixelRatio;
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    function loadShader(gl, type, source) {
        var shader = gl.createShader(type);
        if (shader == null) {
            throw '无法创建shader';
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations) {
        var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexSrc);
        var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
        if (!vertexShader || !fragmentShader)
            return;
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        if (attributeLocations) {
            for (var i in attributeLocations) {
                gl.bindAttribLocation(program, attributeLocations[i], i);
            }
        }
        gl.linkProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            gl.deleteProgram(program);
            console.error('gl.getError()', gl.getError());
            throw gl.getProgramInfoLog(program);
        }
        return program;
    }
    function setPrecision(src, precision) {
        return (src.substring(0, 9) !== 'precision')
            ? 'precision ' + precision + ' float;\n' + src
            : src;
    }

    var Object3D = (function (_super) {
        tslib.__extends(Object3D, _super);
        function Object3D() {
            return _super.call(this) || this;
        }
        Object3D.prototype.init = function () {
        };
        Object3D.prototype.update = function (dt) {
        };
        Object3D.prototype.render = function () {
            this._render();
        };
        Object3D.prototype._render = function () {
        };
        Object3D.prototype.destroy = function () {
        };
        Object3D.prototype.onResize = function () {
        };
        return Object3D;
    }(EventDispatcher));

    function generateUniformAccessObject(gl, uniformData) {
        var uniforms = { data: {} };
        uniforms["gl"] = gl;
        var uniformKeys = Object.keys(uniformData);
        for (var i = 0; i < uniformKeys.length; i++) {
            var fullName = uniformKeys[i];
            var nameTokens = fullName.split('.');
            var name = nameTokens[nameTokens.length - 1];
            var uniformGroup = getUniformGroup(nameTokens, uniforms);
            var uniform = uniformData[fullName];
            uniformGroup.data[name] = uniform;
            uniformGroup.gl = gl;
            Object.defineProperty(uniformGroup, name, {
                get: generateGetter(name),
                set: generateSetter(name, uniform)
            });
        }
        return uniforms;
    }
    var generateGetter = function (name) {
        return function () {
            return this.data[name].value;
        };
    };
    var GLSL_SINGLE_SETTERS = {
        float: function setSingleFloat(gl, location, value) { gl.uniform1f(location, value); },
        vec2: function setSingleVec2(gl, location, value) { gl.uniform2f(location, value[0], value[1]); },
        vec3: function setSingleVec3(gl, location, value) { gl.uniform3f(location, value[0], value[1], value[2]); },
        vec4: function setSingleVec4(gl, location, value) { gl.uniform4f(location, value[0], value[1], value[2], value[3]); },
        int: function setSingleInt(gl, location, value) { gl.uniform1i(location, value); },
        ivec2: function setSingleIvec2(gl, location, value) { gl.uniform2i(location, value[0], value[1]); },
        ivec3: function setSingleIvec3(gl, location, value) { gl.uniform3i(location, value[0], value[1], value[2]); },
        ivec4: function setSingleIvec4(gl, location, value) { gl.uniform4i(location, value[0], value[1], value[2], value[3]); },
        bool: function setSingleBool(gl, location, value) { gl.uniform1i(location, value); },
        bvec2: function setSingleBvec2(gl, location, value) { gl.uniform2i(location, value[0], value[1]); },
        bvec3: function setSingleBvec3(gl, location, value) { gl.uniform3i(location, value[0], value[1], value[2]); },
        bvec4: function setSingleBvec4(gl, location, value) { gl.uniform4i(location, value[0], value[1], value[2], value[3]); },
        mat2: function setSingleMat2(gl, location, value) { gl.uniformMatrix2fv(location, false, value); },
        mat3: function setSingleMat3(gl, location, value) { gl.uniformMatrix3fv(location, false, value); },
        mat4: function setSingleMat4(gl, location, value) { gl.uniformMatrix4fv(location, false, value); },
        sampler2D: function setSingleSampler2D(gl, location, value) { gl.uniform1i(location, value); },
    };
    var GLSL_ARRAY_SETTERS = {
        float: function setFloatArray(gl, location, value) { gl.uniform1fv(location, value); },
        vec2: function setVec2Array(gl, location, value) { gl.uniform2fv(location, value); },
        vec3: function setVec3Array(gl, location, value) { gl.uniform3fv(location, value); },
        vec4: function setVec4Array(gl, location, value) { gl.uniform4fv(location, value); },
        int: function setIntArray(gl, location, value) { gl.uniform1iv(location, value); },
        ivec2: function setIvec2Array(gl, location, value) { gl.uniform2iv(location, value); },
        ivec3: function setIvec3Array(gl, location, value) { gl.uniform3iv(location, value); },
        ivec4: function setIvec4Array(gl, location, value) { gl.uniform4iv(location, value); },
        bool: function setBoolArray(gl, location, value) { gl.uniform1iv(location, value); },
        bvec2: function setBvec2Array(gl, location, value) { gl.uniform2iv(location, value); },
        bvec3: function setBvec3Array(gl, location, value) { gl.uniform3iv(location, value); },
        bvec4: function setBvec4Array(gl, location, value) { gl.uniform4iv(location, value); },
        sampler2D: function setSampler2DArray(gl, location, value) { gl.uniform1iv(location, value); },
    };
    function generateSetter(name, uniform) {
        return function (value) {
            this.data[name].value = value;
            var location = this.data[name].location;
            if (uniform.size === 1) {
                GLSL_SINGLE_SETTERS[uniform.type](this.gl, location, value);
            }
            else {
                GLSL_ARRAY_SETTERS[uniform.type](this.gl, location, value);
            }
        };
    }
    function getUniformGroup(nameTokens, uniform) {
        var cur = uniform;
        for (var i = 0; i < nameTokens.length - 1; i++) {
            var o = cur[nameTokens[i]] || { data: {} };
            cur[nameTokens[i]] = o;
            cur = o;
        }
        return cur;
    }

    function mapType(gl, type) {
        if (!GL_TABLE) {
            var typeNames = Object.keys(GL_TO_GLSL_TYPES);
            GL_TABLE = {};
            for (var i = 0; i < typeNames.length; ++i) {
                var tn = typeNames[i];
                GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
            }
        }
        return GL_TABLE[type];
    }
    var GL_TABLE = null;
    var GL_TO_GLSL_TYPES = {
        'FLOAT': 'float',
        'FLOAT_VEC2': 'vec2',
        'FLOAT_VEC3': 'vec3',
        'FLOAT_VEC4': 'vec4',
        'INT': 'int',
        'INT_VEC2': 'ivec2',
        'INT_VEC3': 'ivec3',
        'INT_VEC4': 'ivec4',
        'BOOL': 'bool',
        'BOOL_VEC2': 'bvec2',
        'BOOL_VEC3': 'bvec3',
        'BOOL_VEC4': 'bvec4',
        'FLOAT_MAT2': 'mat2',
        'FLOAT_MAT3': 'mat3',
        'FLOAT_MAT4': 'mat4',
        'SAMPLER_2D': 'sampler2D'
    };

    function mapSize(type) {
        return GLSL_TO_SIZE[type];
    }
    var GLSL_TO_SIZE = {
        'float': 1,
        'vec2': 2,
        'vec3': 3,
        'vec4': 4,
        'int': 1,
        'ivec2': 2,
        'ivec3': 3,
        'ivec4': 4,
        'bool': 1,
        'bvec2': 2,
        'bvec3': 3,
        'bvec4': 4,
        'mat2': 4,
        'mat3': 9,
        'mat4': 16,
        'sampler2D': 1
    };

    var Attribute = (function () {
        function Attribute(gl, program, attribData) {
            this.gl = gl;
            this.program = program;
            this._bufferData = null;
            this.name = attribData.name;
            this.type = mapType(gl, attribData.type);
            this.size = mapSize(this.type);
        }
        Object.defineProperty(Attribute.prototype, "bufferData", {
            get: function () {
                return this._bufferData;
            },
            set: function (bufferData) {
                this._bufferData = bufferData;
            },
            enumerable: false,
            configurable: true
        });
        Attribute.create = function (gl, program, attribData) {
            return new Attribute(gl, program, attribData).init();
        };
        Attribute.prototype.init = function () {
            var gl = this.gl;
            this.buffer = gl.createBuffer();
            this.location = gl.getAttribLocation(this.program, this.name);
            this.enable();
            return this;
        };
        Attribute.prototype.enable = function () {
            this.gl.enableVertexAttribArray(this.location);
        };
        Attribute.prototype.disable = function () {
            this.gl.disableVertexAttribArray(this.location);
        };
        Attribute.prototype.bind = function (bufferData) {
            bufferData && (this._bufferData = bufferData);
            var gl = this.gl;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, this._bufferData, gl.STATIC_DRAW);
        };
        Attribute.prototype.pointer = function (type, normalized, stride, start) {
            if (type === void 0) { type = this.gl.FLOAT; }
            if (normalized === void 0) { normalized = false; }
            if (stride === void 0) { stride = 0; }
            if (start === void 0) { start = 0; }
            this.gl.vertexAttribPointer(this.location, this.size, type, normalized, stride, start);
        };
        return Attribute;
    }());

    function extractAttributes(gl, program) {
        var attributes = {};
        var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < totalAttributes; i++) {
            var attribData = gl.getActiveAttrib(program, i);
            var newAttribute = Attribute.create(gl, program, attribData);
            newAttribute.init();
            console.log(attribData);
            console.log(newAttribute);
            attributes[attribData.name] = newAttribute;
        }
        return attributes;
    }

    function defaultValue(type, size) {
        switch (type) {
            case 'float':
                return 0;
            case 'vec2':
                return new Float32Array(2 * size);
            case 'vec3':
                return new Float32Array(3 * size);
            case 'vec4':
                return new Float32Array(4 * size);
            case 'int':
            case 'sampler2D':
                return 0;
            case 'ivec2':
                return new Int32Array(2 * size);
            case 'ivec3':
                return new Int32Array(3 * size);
            case 'ivec4':
                return new Int32Array(4 * size);
            case 'bool':
                return false;
            case 'bvec2':
                return booleanArray(2 * size);
            case 'bvec3':
                return booleanArray(3 * size);
            case 'bvec4':
                return booleanArray(4 * size);
            case 'mat2':
                return new Float32Array([1, 0,
                    0, 1]);
            case 'mat3':
                return new Float32Array([1, 0, 0,
                    0, 1, 0,
                    0, 0, 1]);
            case 'mat4':
                return new Float32Array([1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1]);
        }
    }
    var booleanArray = function (size) {
        var array = new Array(size);
        for (var i = 0; i < array.length; i++) {
            array[i] = false;
        }
        return array;
    };

    function extractUniforms(gl, program) {
        var uniforms = {};
        var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < totalUniforms; i++) {
            var uniformData = gl.getActiveUniform(program, i);
            var name = uniformData.name.replace(/\[.*?\]/, "");
            var type = mapType(gl, uniformData.type);
            uniforms[name] = {
                type: type,
                size: uniformData.size,
                location: gl.getUniformLocation(program, name),
                value: defaultValue(type, uniformData.size)
            };
        }
        return uniforms;
    }

    var Shader = (function () {
        function Shader(gl, vertexSrc, fragmentSrc, precision, attributeLocations) {
            this.gl = gl;
            if (precision) {
                setPrecision(vertexSrc, precision);
                setPrecision(fragmentSrc, precision);
            }
            this.program = compileProgram(gl, vertexSrc, fragmentSrc);
            this.attributes = extractAttributes(gl, this.program);
            this.uniformData = extractUniforms(gl, this.program);
            this.uniforms = generateUniformAccessObject(gl, this.uniformData);
        }
        Shader.prototype.use = function () {
            this.gl.useProgram(this.program);
            return this;
        };
        Shader.prototype.destroy = function () {
            this.attributes = null;
            this.uniformData = null;
            this.uniforms = null;
            this.gl.deleteProgram(this.program);
        };
        return Shader;
    }());

    var Scene = (function (_super) {
        tslib.__extends(Scene, _super);
        function Scene() {
            return _super.call(this) || this;
        }
        Scene.prototype.update = function (dt) {
        };
        Scene.prototype._render = function () {
        };
        return Scene;
    }(Object3D));

    exports.EventDispatcher = EventDispatcher;
    exports.Object3D = Object3D;
    exports.Scene = Scene;
    exports.Shader = Shader;
    exports.Vector3 = Vector3;
    exports.WebGLRenderer = WebGLRenderer;
    exports.app = app;
    exports.compileProgram = compileProgram;
    exports.devicePixelRatio = devicePixelRatio;
    exports.director = director;
    exports.setPrecision = setPrecision;
    exports.winHeight = winHeight;
    exports.winWidth = winWidth;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hycv.js.map
