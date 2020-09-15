var __extends;var __assign;var __rest;var __decorate;var __param;var __metadata;var __awaiter;var __generator;var __exportStar;var __values;var __read;var __spread;var __spreadArrays;var __await;var __asyncGenerator;var __asyncDelegator;var __asyncValues;var __makeTemplateObject;var __importStar;var __importDefault;(function(factory){var root=typeof global==="object"?global:typeof self==="object"?self:typeof this==="object"?this:{};if(typeof define==="function"&&define.amd){define("tslib",["exports"],function(exports){factory(createExporter(root,createExporter(exports)))})}else{if(typeof module==="object"&&typeof module.exports==="object"){factory(createExporter(root,createExporter(module.exports)))}else{factory(createExporter(root))}}function createExporter(exports,previous){if(exports!==root){if(typeof Object.create==="function"){Object.defineProperty(exports,"__esModule",{value:true})}else{exports.__esModule=true}}return function(id,v){return exports[id]=previous?previous(id,v):v}}})(function(exporter){var extendStatics=Object.setPrototypeOf||({__proto__:[]} instanceof Array&&function(d,b){d.__proto__=b})||function(d,b){for(var p in b){if(b.hasOwnProperty(p)){d[p]=b[p]}}};__extends=function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())};__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)){t[p]=s[p]}}}return t};__rest=function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0){t[p]=s[p]}}if(s!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])){t[p[i]]=s[p[i]]}}}return t};__decorate=function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function"){r=Reflect.decorate(decorators,target,key,desc)}else{for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i]){r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}}}return c>3&&r&&Object.defineProperty(target,key,r),r};__param=function(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}};__metadata=function(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function"){return Reflect.metadata(metadataKey,metadataValue)}};__awaiter=function(thisArg,_arguments,P,generator){return new (P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};__generator=function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1){throw t[1]}return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f){throw new TypeError("Generator is already executing.")}while(_){try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done){return t}if(y=0,t){op=[op[0]&2,t.value]}switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||(op[1]>t[0]&&op[1]<t[3]))){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2]){_.ops.pop()}_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}}if(op[0]&5){throw op[1]}return{value:op[0]?op[1]:void 0,done:true}
}};__exportStar=function(m,exports){for(var p in m){if(!exports.hasOwnProperty(p)){exports[p]=m[p]}}};__values=function(o){var m=typeof Symbol==="function"&&o[Symbol.iterator],i=0;if(m){return m.call(o)}return{next:function(){if(o&&i>=o.length){o=void 0}return{value:o&&o[i++],done:!o}}}};__read=function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m){return o}var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value)}}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"])){m.call(i)}}finally{if(e){throw e.error}}}return ar};__spread=function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]))}return ar};__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++){s+=arguments[i].length}for(var r=Array(s),k=0,i=0;i<il;i++){for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++){r[k]=a[j]}}return r};__await=function(v){return this instanceof __await?(this.v=v,this):new __await(v)};__asyncGenerator=function(thisArg,_arguments,generator){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n]){i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v)})}}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length){resume(q[0][0],q[0][1])}}};__asyncDelegator=function(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v}:f}};__asyncValues=function(o){if(!Symbol.asyncIterator){throw new TypeError("Symbol.asyncIterator is not defined.")}var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}};__makeTemplateObject=function(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};__importStar=function(mod){if(mod&&mod.__esModule){return mod}var result={};if(mod!=null){for(var k in mod){if(Object.hasOwnProperty.call(mod,k)){result[k]=mod[k]}}}result["default"]=mod;return result};__importDefault=function(mod){return(mod&&mod.__esModule)?mod:{"default":mod}};exporter("__extends",__extends);exporter("__assign",__assign);exporter("__rest",__rest);exporter("__decorate",__decorate);exporter("__param",__param);exporter("__metadata",__metadata);exporter("__awaiter",__awaiter);exporter("__generator",__generator);exporter("__exportStar",__exportStar);exporter("__values",__values);exporter("__read",__read);exporter("__spread",__spread);exporter("__spreadArrays",__spreadArrays);exporter("__await",__await);exporter("__asyncGenerator",__asyncGenerator);exporter("__asyncDelegator",__asyncDelegator);exporter("__asyncValues",__asyncValues);exporter("__makeTemplateObject",__makeTemplateObject);exporter("__importStar",__importStar);exporter("__importDefault",__importDefault)});
var tslib = {__extends: __extends,__assign: __assign,__rest: __rest,__decorate: __decorate,__param: __param,__metadata: __metadata,__awaiter: __awaiter,__generator: __generator,__exportStar: __exportStar,__values: __values,__read: __read,__spread: __spread,__spreadArrays: __spreadArrays,__await: __await,__asyncGenerator: __asyncGenerator,__asyncDelegator: __asyncDelegator,__asyncValues: __asyncValues,__makeTemplateObject: __makeTemplateObject,__importStar: __importStar,__importDefault: __importDefault};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', 'tslib'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hycv = {}, global.tslib));
}(this, (function (exports, tslib) { 'use strict';

    var Matrix4 = (function () {
        function Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            if (m00 === void 0) { m00 = 1; }
            if (m01 === void 0) { m01 = 0; }
            if (m02 === void 0) { m02 = 0; }
            if (m03 === void 0) { m03 = 0; }
            if (m10 === void 0) { m10 = 0; }
            if (m11 === void 0) { m11 = 1; }
            if (m12 === void 0) { m12 = 0; }
            if (m13 === void 0) { m13 = 0; }
            if (m20 === void 0) { m20 = 0; }
            if (m21 === void 0) { m21 = 0; }
            if (m22 === void 0) { m22 = 1; }
            if (m23 === void 0) { m23 = 0; }
            if (m30 === void 0) { m30 = 0; }
            if (m31 === void 0) { m31 = 0; }
            if (m32 === void 0) { m32 = 0; }
            if (m33 === void 0) { m33 = 1; }
            if (m00 instanceof Float32Array) {
                this.elements = m00;
            }
            else if (Array.isArray(m00)) {
                this.elements = new Float32Array(m00);
            }
            else {
                this.elements = new Float32Array([
                    m00, m01, m02, m03,
                    m10, m11, m12, m13,
                    m20, m21, m22, m23,
                    m30, m31, m32, m33
                ]);
            }
        }
        Matrix4.prototype.setIdentity = function () {
            var e = this.elements;
            e[0] = 1;
            e[4] = 0;
            e[8] = 0;
            e[12] = 0;
            e[1] = 0;
            e[5] = 1;
            e[9] = 0;
            e[13] = 0;
            e[2] = 0;
            e[6] = 0;
            e[10] = 1;
            e[14] = 0;
            e[3] = 0;
            e[7] = 0;
            e[11] = 0;
            e[15] = 1;
            return this;
        };
        Matrix4.prototype.set = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
            var te = this.elements;
            te[0] = n11;
            te[4] = n12;
            te[8] = n13;
            te[12] = n14;
            te[1] = n21;
            te[5] = n22;
            te[9] = n23;
            te[13] = n24;
            te[2] = n31;
            te[6] = n32;
            te[10] = n33;
            te[14] = n34;
            te[3] = n41;
            te[7] = n42;
            te[11] = n43;
            te[15] = n44;
            return this;
        };
        Matrix4.prototype.copy = function (src) {
            var i, s, d;
            s = src.elements;
            d = this.elements;
            for (i = 0; i < 16; ++i)
                d[i] = s[i];
            return this;
        };
        Matrix4.prototype.clone = function () {
            return new Matrix4().fromArray(this.elements);
        };
        Matrix4.prototype.equals = function (matrix) {
            var te = this.elements;
            var me = matrix.elements;
            for (var i = 0; i < 16; i++) {
                if (te[i] !== me[i])
                    return false;
            }
            return true;
        };
        Matrix4.prototype.fromArray = function (array, offset) {
            if (offset === void 0) { offset = 0; }
            for (var i = 0; i < 16; i++)
                this.elements[i] = array[i + offset];
            return this;
        };
        Matrix4.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            var te = this.elements;
            array[offset] = te[0];
            array[offset + 1] = te[1];
            array[offset + 2] = te[2];
            array[offset + 3] = te[3];
            array[offset + 4] = te[4];
            array[offset + 5] = te[5];
            array[offset + 6] = te[6];
            array[offset + 7] = te[7];
            array[offset + 8] = te[8];
            array[offset + 9] = te[9];
            array[offset + 10] = te[10];
            array[offset + 11] = te[11];
            array[offset + 12] = te[12];
            array[offset + 13] = te[13];
            array[offset + 14] = te[14];
            array[offset + 15] = te[15];
            return array;
        };
        Matrix4.prototype.concat = function (other) {
            var i, e, a, b, ai0, ai1, ai2, ai3;
            e = this.elements;
            a = this.elements;
            b = other.elements;
            if (e === b) {
                b = new Float32Array(16);
                for (i = 0; i < 16; ++i) {
                    b[i] = e[i];
                }
            }
            for (i = 0; i < 4; i++) {
                ai0 = a[i];
                ai1 = a[i + 4];
                ai2 = a[i + 8];
                ai3 = a[i + 12];
                e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
                e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
                e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
                e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
            }
            return this;
        };
        Matrix4.prototype.multiply = function (m) {
            return this.multiplyMatrices(this, m);
        };
        Matrix4.prototype.premultiply = function (m) {
            return this.multiplyMatrices(m, this);
        };
        Matrix4.prototype.multiplyMatrices = function (a, b) {
            var ae = a.elements;
            var be = b.elements;
            var te = this.elements;
            var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
            var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
            var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
            var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
            var b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
            var b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
            var b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
            var b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
            te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
            te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
            te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
            te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
            return this;
        };
        Matrix4.prototype.multiplyVector3 = function (pos) {
            var e = this.elements;
            return new Vector3().set(pos.x * e[0] + pos.y * e[4] + pos.z * e[8] + e[12], pos.x * e[1] + pos.y * e[5] + pos.z * e[9] + e[13], pos.x * e[2] + pos.y * e[6] + pos.z * e[10] + e[14]);
        };
        Matrix4.prototype.transpose = function () {
            var e, t;
            e = this.elements;
            t = e[1];
            e[1] = e[4];
            e[4] = t;
            t = e[2];
            e[2] = e[8];
            e[8] = t;
            t = e[3];
            e[3] = e[12];
            e[12] = t;
            t = e[6];
            e[6] = e[9];
            e[9] = t;
            t = e[7];
            e[7] = e[13];
            e[13] = t;
            t = e[11];
            e[11] = e[14];
            e[14] = t;
            return this;
        };
        Matrix4.prototype.setInverseOf = function (other) {
            var i, s, d, inv, det;
            s = other.elements;
            d = this.elements;
            inv = new Float32Array(16);
            inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15]
                + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
            inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15]
                - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
            inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15]
                + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
            inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14]
                - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];
            inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15]
                - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
            inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15]
                + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
            inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15]
                - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
            inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14]
                + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];
            inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15]
                + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
            inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15]
                - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
            inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15]
                + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
            inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14]
                - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];
            inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11]
                - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
            inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11]
                + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
            inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11]
                - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
            inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10]
                + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];
            det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];
            if (det === 0)
                return this;
            det = 1 / det;
            for (i = 0; i < 16; i++)
                d[i] = inv[i] * det;
            return this;
        };
        Matrix4.prototype.invert = function () {
            return this.setInverseOf(this);
        };
        Matrix4.prototype.setOrtho = function (left, right, bottom, top, near, far) {
            var e, rw, rh, rd;
            if (left === right || bottom === top || near === far) {
                throw 'null frustum';
            }
            rw = 1 / (right - left);
            rh = 1 / (top - bottom);
            rd = 1 / (far - near);
            e = this.elements;
            e[0] = 2 * rw;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = 2 * rh;
            e[6] = 0;
            e[7] = 0;
            e[8] = 0;
            e[9] = 0;
            e[10] = -2 * rd;
            e[11] = 0;
            e[12] = -(right + left) * rw;
            e[13] = -(top + bottom) * rh;
            e[14] = -(far + near) * rd;
            e[15] = 1;
            return this;
        };
        Matrix4.prototype.ortho = function (left, right, bottom, top, near, far) {
            return this.concat(new Matrix4().setOrtho(left, right, bottom, top, near, far));
        };
        Matrix4.prototype.setFrustum = function (left, right, bottom, top, near, far) {
            var e, rw, rh, rd;
            if (left === right || top === bottom || near === far) {
                throw 'null frustum';
            }
            if (near <= 0) {
                throw 'near <= 0';
            }
            if (far <= 0) {
                throw 'far <= 0';
            }
            rw = 1 / (right - left);
            rh = 1 / (top - bottom);
            rd = 1 / (far - near);
            e = this.elements;
            e[0] = 2 * near * rw;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = 2 * near * rh;
            e[6] = 0;
            e[7] = 0;
            e[8] = (right + left) * rw;
            e[9] = (top + bottom) * rh;
            e[10] = -(far + near) * rd;
            e[11] = -1;
            e[12] = 0;
            e[13] = 0;
            e[14] = -2 * near * far * rd;
            e[15] = 0;
            return this;
        };
        Matrix4.prototype.frustum = function (left, right, bottom, top, near, far) {
            return this.concat(new Matrix4().setFrustum(left, right, bottom, top, near, far));
        };
        Matrix4.prototype.setPerspective = function (fovy, aspect, near, far) {
            var e, rd, s, ct;
            if (near === far || aspect === 0) {
                throw 'null frustum';
            }
            if (near <= 0) {
                throw 'near <= 0';
            }
            if (far <= 0) {
                throw 'far <= 0';
            }
            fovy = Math.PI * fovy / 180 / 2;
            s = Math.sin(fovy);
            if (s === 0) {
                throw 'null frustum';
            }
            rd = 1 / (far - near);
            ct = Math.cos(fovy) / s;
            e = this.elements;
            e[0] = ct / aspect;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = ct;
            e[6] = 0;
            e[7] = 0;
            e[8] = 0;
            e[9] = 0;
            e[10] = -(far + near) * rd;
            e[11] = -1;
            e[12] = 0;
            e[13] = 0;
            e[14] = -2 * near * far * rd;
            e[15] = 0;
            return this;
        };
        Matrix4.prototype.makePerspective = function (left, right, top, bottom, near, far) {
            var te = this.elements;
            var x = 2 * near / (right - left);
            var y = 2 * near / (top - bottom);
            var a = (right + left) / (right - left);
            var b = (top + bottom) / (top - bottom);
            var c = -(far + near) / (far - near);
            var d = -2 * far * near / (far - near);
            te[0] = x;
            te[4] = 0;
            te[8] = a;
            te[12] = 0;
            te[1] = 0;
            te[5] = y;
            te[9] = b;
            te[13] = 0;
            te[2] = 0;
            te[6] = 0;
            te[10] = c;
            te[14] = d;
            te[3] = 0;
            te[7] = 0;
            te[11] = -1;
            te[15] = 0;
            return this;
        };
        Matrix4.prototype.perspective = function (fovy, aspect, near, far) {
            return this.concat(new Matrix4().setPerspective(fovy, aspect, near, far));
        };
        Matrix4.prototype.setScale = function (x, y, z) {
            var e = this.elements;
            e[0] = x;
            e[4] = 0;
            e[8] = 0;
            e[12] = 0;
            e[1] = 0;
            e[5] = y;
            e[9] = 0;
            e[13] = 0;
            e[2] = 0;
            e[6] = 0;
            e[10] = z;
            e[14] = 0;
            e[3] = 0;
            e[7] = 0;
            e[11] = 0;
            e[15] = 1;
            return this;
        };
        Matrix4.prototype.scale = function (x, y, z) {
            var e = this.elements;
            e[0] *= x;
            e[4] *= y;
            e[8] *= z;
            e[1] *= x;
            e[5] *= y;
            e[9] *= z;
            e[2] *= x;
            e[6] *= y;
            e[10] *= z;
            e[3] *= x;
            e[7] *= y;
            e[11] *= z;
            return this;
        };
        Matrix4.prototype.getMaxScaleOnAxis = function () {
            var te = this.elements;
            var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
            var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
            var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
            return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
        };
        Matrix4.prototype.setTranslate = function (x, y, z) {
            var e = this.elements;
            e[0] = 1;
            e[4] = 0;
            e[8] = 0;
            e[12] = x;
            e[1] = 0;
            e[5] = 1;
            e[9] = 0;
            e[13] = y;
            e[2] = 0;
            e[6] = 0;
            e[10] = 1;
            e[14] = z;
            e[3] = 0;
            e[7] = 0;
            e[11] = 0;
            e[15] = 1;
            return this;
        };
        Matrix4.prototype.translate = function (x, y, z) {
            var e = this.elements;
            e[12] += e[0] * x + e[4] * y + e[8] * z;
            e[13] += e[1] * x + e[5] * y + e[9] * z;
            e[14] += e[2] * x + e[6] * y + e[10] * z;
            e[15] += e[3] * x + e[7] * y + e[11] * z;
            return this;
        };
        Matrix4.prototype.setRotate = function (angle, x, y, z) {
            var e, s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs;
            angle = Math.PI * angle / 180;
            e = this.elements;
            s = Math.sin(angle);
            c = Math.cos(angle);
            if (0 !== x && 0 === y && 0 === z) {
                if (x < 0) {
                    s = -s;
                }
                e[0] = 1;
                e[4] = 0;
                e[8] = 0;
                e[12] = 0;
                e[1] = 0;
                e[5] = c;
                e[9] = -s;
                e[13] = 0;
                e[2] = 0;
                e[6] = s;
                e[10] = c;
                e[14] = 0;
                e[3] = 0;
                e[7] = 0;
                e[11] = 0;
                e[15] = 1;
            }
            else if (0 === x && 0 !== y && 0 === z) {
                if (y < 0) {
                    s = -s;
                }
                e[0] = c;
                e[4] = 0;
                e[8] = s;
                e[12] = 0;
                e[1] = 0;
                e[5] = 1;
                e[9] = 0;
                e[13] = 0;
                e[2] = -s;
                e[6] = 0;
                e[10] = c;
                e[14] = 0;
                e[3] = 0;
                e[7] = 0;
                e[11] = 0;
                e[15] = 1;
            }
            else if (0 === x && 0 === y && 0 !== z) {
                if (z < 0) {
                    s = -s;
                }
                e[0] = c;
                e[4] = -s;
                e[8] = 0;
                e[12] = 0;
                e[1] = s;
                e[5] = c;
                e[9] = 0;
                e[13] = 0;
                e[2] = 0;
                e[6] = 0;
                e[10] = 1;
                e[14] = 0;
                e[3] = 0;
                e[7] = 0;
                e[11] = 0;
                e[15] = 1;
            }
            else {
                len = Math.sqrt(x * x + y * y + z * z);
                if (len !== 1) {
                    rlen = 1 / len;
                    x *= rlen;
                    y *= rlen;
                    z *= rlen;
                }
                nc = 1 - c;
                xy = x * y;
                yz = y * z;
                zx = z * x;
                xs = x * s;
                ys = y * s;
                zs = z * s;
                e[0] = x * x * nc + c;
                e[1] = xy * nc + zs;
                e[2] = zx * nc - ys;
                e[3] = 0;
                e[4] = xy * nc - zs;
                e[5] = y * y * nc + c;
                e[6] = yz * nc + xs;
                e[7] = 0;
                e[8] = zx * nc + ys;
                e[9] = yz * nc - xs;
                e[10] = z * z * nc + c;
                e[11] = 0;
                e[12] = 0;
                e[13] = 0;
                e[14] = 0;
                e[15] = 1;
            }
            return this;
        };
        Matrix4.prototype.rotate = function (angle, x, y, z) {
            return this.concat(new Matrix4().setRotate(angle, x, y, z));
        };
        Matrix4.prototype.setLookAt = function (eye, center, up) {
            var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;
            fx = center.x - eye.x;
            fy = center.y - eye.y;
            fz = center.z - eye.z;
            rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
            fx *= rlf;
            fy *= rlf;
            fz *= rlf;
            sx = fy * up.z - fz * up.y;
            sy = fz * up.x - fx * up.z;
            sz = fx * up.y - fy * up.x;
            rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
            sx *= rls;
            sy *= rls;
            sz *= rls;
            ux = sy * fz - sz * fy;
            uy = sz * fx - sx * fz;
            uz = sx * fy - sy * fx;
            e = this.elements;
            e[0] = sx;
            e[1] = ux;
            e[2] = -fx;
            e[3] = 0;
            e[4] = sy;
            e[5] = uy;
            e[6] = -fy;
            e[7] = 0;
            e[8] = sz;
            e[9] = uz;
            e[10] = -fz;
            e[11] = 0;
            e[12] = 0;
            e[13] = 0;
            e[14] = 0;
            e[15] = 1;
            return this.translate(-eye.x, -eye.y, -eye.z);
        };
        Matrix4.prototype.lookAt = function (eye, target, up) {
            var x = new Vector3();
            var y = new Vector3();
            var z = new Vector3();
            var te = this.elements;
            z.subVectors(eye, target);
            if (z.lengthSq() === 0) {
                z.z = 1;
            }
            z.normalize();
            x.crossVectors(up, z);
            if (x.lengthSq() === 0) {
                if (Math.abs(up.z) === 1) {
                    z.x += 0.0001;
                }
                else {
                    z.z += 0.0001;
                }
                z.normalize();
                x.crossVectors(up, z);
            }
            x.normalize();
            y.crossVectors(z, x);
            te[0] = x.x;
            te[4] = y.x;
            te[8] = z.x;
            te[1] = x.y;
            te[5] = y.y;
            te[9] = z.y;
            te[2] = x.z;
            te[6] = y.z;
            te[10] = z.z;
            return this;
        };
        Matrix4.prototype.dropShadow = function (plane, light) {
            var mat = new Matrix4();
            var e = mat.elements;
            var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];
            e[0] = dot - light[0] * plane[0];
            e[1] = -light[1] * plane[0];
            e[2] = -light[2] * plane[0];
            e[3] = -light[3] * plane[0];
            e[4] = -light[0] * plane[1];
            e[5] = dot - light[1] * plane[1];
            e[6] = -light[2] * plane[1];
            e[7] = -light[3] * plane[1];
            e[8] = -light[0] * plane[2];
            e[9] = -light[1] * plane[2];
            e[10] = dot - light[2] * plane[2];
            e[11] = -light[3] * plane[2];
            e[12] = -light[0] * plane[3];
            e[13] = -light[1] * plane[3];
            e[14] = -light[2] * plane[3];
            e[15] = dot - light[3] * plane[3];
            return this.concat(mat);
        };
        Matrix4.prototype.dropShadowDirectionally = function (normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
            var a = planeX * normX + planeY * normY + planeZ * normZ;
            return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
        };
        Matrix4.prototype.makeRotationFromQuaternion = function (q) {
            var zero = new Vector3(0, 0, 0);
            var one = new Vector3(1, 1, 1);
            return this.compose(zero, q, one);
        };
        Matrix4.prototype.compose = function (position, quaternion, scale) {
            var te = this.elements;
            var x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
            var x2 = x + x, y2 = y + y, z2 = z + z;
            var xx = x * x2, xy = x * y2, xz = x * z2;
            var yy = y * y2, yz = y * z2, zz = z * z2;
            var wx = w * x2, wy = w * y2, wz = w * z2;
            var sx = scale.x, sy = scale.y, sz = scale.z;
            te[0] = (1 - (yy + zz)) * sx;
            te[1] = (xy + wz) * sx;
            te[2] = (xz - wy) * sx;
            te[3] = 0;
            te[4] = (xy - wz) * sy;
            te[5] = (1 - (xx + zz)) * sy;
            te[6] = (yz + wx) * sy;
            te[7] = 0;
            te[8] = (xz + wy) * sz;
            te[9] = (yz - wx) * sz;
            te[10] = (1 - (xx + yy)) * sz;
            te[11] = 0;
            te[12] = position.x;
            te[13] = position.y;
            te[14] = position.z;
            te[15] = 1;
            return this;
        };
        Matrix4.prototype.decompose = function (position, quaternion, scale) {
            var vector = new Vector3();
            var matrix = new Matrix4();
            var te = this.elements;
            var sx = vector.set(te[0], te[1], te[2]).length();
            var sy = vector.set(te[4], te[5], te[6]).length();
            var sz = vector.set(te[8], te[9], te[10]).length();
            var det = this.determinant();
            if (det < 0)
                sx = -sx;
            position.x = te[12];
            position.y = te[13];
            position.z = te[14];
            matrix.copy(this);
            var invSX = 1 / sx;
            var invSY = 1 / sy;
            var invSZ = 1 / sz;
            matrix.elements[0] *= invSX;
            matrix.elements[1] *= invSX;
            matrix.elements[2] *= invSX;
            matrix.elements[4] *= invSY;
            matrix.elements[5] *= invSY;
            matrix.elements[6] *= invSY;
            matrix.elements[8] *= invSZ;
            matrix.elements[9] *= invSZ;
            matrix.elements[10] *= invSZ;
            quaternion.setFromRotationMatrix(matrix);
            scale.x = sx;
            scale.y = sy;
            scale.z = sz;
            return this;
        };
        Matrix4.prototype.determinant = function () {
            var te = this.elements;
            var n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
            var n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
            var n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
            var n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
            return (n41 * (+n14 * n23 * n32
                - n13 * n24 * n32
                - n14 * n22 * n33
                + n12 * n24 * n33
                + n13 * n22 * n34
                - n12 * n23 * n34) +
                n42 * (+n11 * n23 * n34
                    - n11 * n24 * n33
                    + n14 * n21 * n33
                    - n13 * n21 * n34
                    + n13 * n24 * n31
                    - n14 * n23 * n31) +
                n43 * (+n11 * n24 * n32
                    - n11 * n22 * n34
                    - n14 * n21 * n32
                    + n12 * n21 * n34
                    + n14 * n22 * n31
                    - n12 * n24 * n31) +
                n44 * (-n13 * n22 * n31
                    - n11 * n23 * n32
                    + n11 * n22 * n33
                    + n13 * n21 * n32
                    - n12 * n21 * n33
                    + n12 * n23 * n31));
        };
        Matrix4.prototype.extractRotation = function (m) {
            var v1 = new Vector3();
            var te = this.elements;
            var me = m.elements;
            var scaleX = 1 / v1.setFromMatrixColumn(m, 0).length();
            var scaleY = 1 / v1.setFromMatrixColumn(m, 1).length();
            var scaleZ = 1 / v1.setFromMatrixColumn(m, 2).length();
            te[0] = me[0] * scaleX;
            te[1] = me[1] * scaleX;
            te[2] = me[2] * scaleX;
            te[3] = 0;
            te[4] = me[4] * scaleY;
            te[5] = me[5] * scaleY;
            te[6] = me[6] * scaleY;
            te[7] = 0;
            te[8] = me[8] * scaleZ;
            te[9] = me[9] * scaleZ;
            te[10] = me[10] * scaleZ;
            te[11] = 0;
            te[12] = 0;
            te[13] = 0;
            te[14] = 0;
            te[15] = 1;
            return this;
        };
        return Matrix4;
    }());
    function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00 === void 0) { m00 = 1; }
        if (m01 === void 0) { m01 = 0; }
        if (m02 === void 0) { m02 = 0; }
        if (m03 === void 0) { m03 = 0; }
        if (m10 === void 0) { m10 = 0; }
        if (m11 === void 0) { m11 = 1; }
        if (m12 === void 0) { m12 = 0; }
        if (m13 === void 0) { m13 = 0; }
        if (m20 === void 0) { m20 = 0; }
        if (m21 === void 0) { m21 = 0; }
        if (m22 === void 0) { m22 = 1; }
        if (m23 === void 0) { m23 = 0; }
        if (m30 === void 0) { m30 = 0; }
        if (m31 === void 0) { m31 = 0; }
        if (m32 === void 0) { m32 = 0; }
        if (m33 === void 0) { m33 = 1; }
        return new Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    }

    var Vector3 = (function () {
        function Vector3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = x; }
            if (z === void 0) { z = x; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Object.defineProperty(Vector3, "ZERO", {
            get: function () {
                return new Vector3();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector3, "ONE", {
            get: function () {
                return new Vector3(1);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector3, "UP", {
            get: function () {
                return new Vector3(0, 1, 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector3, "RIGHT", {
            get: function () {
                return new Vector3(1, 0, 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector3, "FORWARD", {
            get: function () {
                return new Vector3(0, 0, 1);
            },
            enumerable: false,
            configurable: true
        });
        Vector3.prototype.zero = function () {
            this.x = this.y = this.z = 0;
            return this;
        };
        Vector3.prototype.one = function () {
            this.x = this.y = this.z = 1;
            return this;
        };
        Vector3.prototype.up = function () {
            this.x = this.y = 0;
            this.z = 1;
            return this;
        };
        Vector3.prototype.right = function () {
            this.x = this.z = 0;
            this.y = 1;
            return this;
        };
        Vector3.prototype.forward = function () {
            this.x = this.y = 0;
            this.z = 1;
            return this;
        };
        Vector3.prototype.set = function (x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        };
        Vector3.prototype.copy = function (v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
            return this;
        };
        Vector3.prototype.clone = function () {
            return new Vector3().copy(this);
        };
        Vector3.prototype.add = function (v) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
            return this;
        };
        Vector3.prototype.addScalar = function (s) {
            this.x += s;
            this.y += s;
            this.z += s;
            return this;
        };
        Vector3.prototype.addVectors = function (a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this;
        };
        Vector3.prototype.addScaledVector = function (v, s) {
            this.x += v.x * s;
            this.y += v.y * s;
            this.z += v.z * s;
            return this;
        };
        Vector3.prototype.sub = function (v) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
            return this;
        };
        Vector3.prototype.subScalar = function (s) {
            this.x -= s;
            this.y -= s;
            this.z -= s;
            return this;
        };
        Vector3.prototype.subVectors = function (a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this;
        };
        Vector3.prototype.multiplyScalar = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
            return this;
        };
        Vector3.prototype.multiplyVectors = function (a, b) {
            this.x = a.x * b.x;
            this.y = a.y * b.y;
            this.z = a.z * b.z;
            return this;
        };
        Vector3.prototype.divide = function (v) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
            return this;
        };
        Vector3.prototype.divideScalar = function (scalar) {
            return this.multiplyScalar(1 / scalar);
        };
        Vector3.prototype.cross = function (v) {
            return this.crossVectors(this, v);
        };
        Vector3.prototype.crossVectors = function (a, b) {
            var ax = a.x, ay = a.y, az = a.z;
            var bx = b.x, by = b.y, bz = b.z;
            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;
            return this;
        };
        Vector3.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        };
        Vector3.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        };
        Vector3.prototype.lengthSq = function () {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        };
        Vector3.prototype.normalize = function () {
            var scalar = 1 / (this.length() || 1);
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
            return this;
        };
        Vector3.prototype.distanceTo = function (v) {
            return Math.sqrt(this.distanceToSquared(v));
        };
        Vector3.prototype.distanceToSquared = function (v) {
            var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
            return dx * dx + dy * dy + dz * dz;
        };
        Vector3.prototype.min = function (v) {
            this.x = Math.min(this.x, v.x);
            this.y = Math.min(this.y, v.y);
            this.z = Math.min(this.z, v.z);
            return this;
        };
        Vector3.prototype.max = function (v) {
            this.x = Math.max(this.x, v.x);
            this.y = Math.max(this.y, v.y);
            this.z = Math.max(this.z, v.z);
            return this;
        };
        Vector3.prototype.clamp = function (min, max) {
            this.x = Math.max(min.x, Math.min(max.x, this.x));
            this.y = Math.max(min.y, Math.min(max.y, this.y));
            this.z = Math.max(min.z, Math.min(max.z, this.z));
            return this;
        };
        Vector3.prototype.clampScalar = function (minVal, maxVal) {
            return this.clamp(new Vector3(minVal, minVal, minVal), new Vector3(maxVal, maxVal, maxVal));
        };
        Vector3.prototype.clampLength = function (min, max) {
            return this.divideScalar(this.length() || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
        };
        Vector3.prototype.applyMatrix4 = function (m) {
            var x = this.x, y = this.y, z = this.z;
            var e = m.elements;
            var w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
            this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
            this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
            this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
            return this;
        };
        Vector3.prototype.applyMatrix3 = function (m) {
            var x = this.x, y = this.y, z = this.z;
            var e = m.elements;
            this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]);
            this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]);
            this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]);
            return this;
        };
        Vector3.prototype.setFromMatrixPosition = function (m) {
            var e = m.elements;
            this.x = e[12];
            this.y = e[13];
            this.z = e[14];
            return this;
        };
        Vector3.prototype.setFromMatrixScale = function (m) {
            var sx = this.setFromMatrixColumn(m, 0).length();
            var sy = this.setFromMatrixColumn(m, 1).length();
            var sz = this.setFromMatrixColumn(m, 2).length();
            this.x = sx;
            this.y = sy;
            this.z = sz;
            return this;
        };
        Vector3.prototype.setFromMatrixColumn = function (m, index) {
            return this.fromArray(m.elements, index * 4);
        };
        Vector3.prototype.transformDirection = function (m) {
            var x = this.x, y = this.y, z = this.z;
            var e = m.elements;
            this.x = e[0] * x + e[4] * y + e[8] * z;
            this.y = e[1] * x + e[5] * y + e[9] * z;
            this.z = e[2] * x + e[6] * y + e[10] * z;
            return this.normalize();
        };
        Vector3.prototype.project = function (camera) {
            return this.applyMatrix4(camera.worldMatrixInverse).applyMatrix4(camera.projectionMatrix);
        };
        Vector3.prototype.unproject = function (camera) {
            return this.applyMatrix4(new Matrix4().setInverseOf(camera.projectionMatrix)).applyMatrix4(camera.worldMatrix);
        };
        Vector3.prototype.equals = function (v) {
            return ((v.x === this.x) && (v.y === this.y) && (v.z === this.z));
        };
        Vector3.prototype.fromArray = function (array, offset) {
            if (offset === void 0) { offset = 0; }
            this.x = array[offset];
            this.y = array[offset + 1];
            this.z = array[offset + 2];
            return this;
        };
        Vector3.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            array[offset] = this.x;
            array[offset + 1] = this.y;
            array[offset + 2] = this.z;
            return array;
        };
        return Vector3;
    }());
    function v3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        if (z === void 0) { z = x; }
        return new Vector3(x, y, z);
    }

    var Sphere = (function () {
        function Sphere(center, radius) {
            if (center === void 0) { center = new Vector3(); }
            if (radius === void 0) { radius = 0; }
            this.center = center;
            this.radius = radius;
        }
        Sphere.prototype.set = function (center, radius) {
            this.center.copy(center);
            this.radius = radius;
            return this;
        };
        Sphere.prototype.setFromPoints = function (points, optionalCenter) {
            var box = new Box3();
            var center = this.center;
            if (optionalCenter !== undefined) {
                center.copy(optionalCenter);
            }
            else {
                box.setFromPoints(points).getCenter(center);
            }
            var maxRadiusSq = 0;
            for (var i = 0, il = points.length; i < il; i++) {
                maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
            }
            this.radius = Math.sqrt(maxRadiusSq);
            return this;
        };
        Sphere.prototype.clone = function () {
            return new Sphere().copy(this);
        };
        Sphere.prototype.copy = function (sphere) {
            this.center.copy(sphere.center);
            this.radius = sphere.radius;
            return this;
        };
        Sphere.prototype.empty = function () {
            return (this.radius <= 0);
        };
        Sphere.prototype.containsPoint = function (point) {
            return (point.distanceToSquared(this.center) <= (this.radius * this.radius));
        };
        Sphere.prototype.distanceToPoint = function (point) {
            return (point.distanceTo(this.center) - this.radius);
        };
        Sphere.prototype.intersectsSphere = function (sphere) {
            var radiusSum = this.radius + sphere.radius;
            return sphere.center.distanceToSquared(this.center) <= (radiusSum * radiusSum);
        };
        Sphere.prototype.intersectsBox = function (box) {
            return box.intersectsSphere(this);
        };
        Sphere.prototype.clampPoint = function (point, target) {
            if (target === void 0) { target = new Vector3(); }
            var deltaLengthSq = this.center.distanceToSquared(point);
            target.copy(point);
            if (deltaLengthSq > (this.radius * this.radius)) {
                target.sub(this.center).normalize();
                target.multiplyScalar(this.radius).add(this.center);
            }
            return target;
        };
        Sphere.prototype.getBoundingBox = function (target) {
            if (target === void 0) { target = new Box3(); }
            target.set(this.center, this.center);
            target.expandByScalar(this.radius);
            return target;
        };
        Sphere.prototype.applyMatrix4 = function (matrix) {
            this.center.applyMatrix4(matrix);
            this.radius = this.radius * matrix.getMaxScaleOnAxis();
            return this;
        };
        Sphere.prototype.translate = function (offset) {
            this.center.add(offset);
            return this;
        };
        Sphere.prototype.equals = function (sphere) {
            return sphere.center.equals(this.center) && (sphere.radius === this.radius);
        };
        return Sphere;
    }());
    function sphere(center, radius) {
        if (center === void 0) { center = new Vector3(); }
        if (radius === void 0) { radius = 0; }
        return new Sphere(center, radius);
    }

    var Box3 = (function () {
        function Box3(min, max) {
            if (min === void 0) { min = new Vector3(+Infinity, +Infinity, +Infinity); }
            if (max === void 0) { max = new Vector3(-Infinity, -Infinity, -Infinity); }
            this.min = min;
            this.max = max;
        }
        Box3.prototype.set = function (min, max) {
            this.min.copy(min);
            this.max.copy(max);
            return this;
        };
        Box3.prototype.clone = function () {
            return new Box3().copy(this);
        };
        Box3.prototype.copy = function (box) {
            this.min.copy(box.min);
            this.max.copy(box.max);
            return this;
        };
        Box3.prototype.makeEmpty = function () {
            this.min.x = this.min.y = this.min.z = +Infinity;
            this.max.x = this.max.y = this.max.z = -Infinity;
            return this;
        };
        Box3.prototype.isEmpty = function () {
            return (this.max.x < this.min.x) || (this.max.y < this.min.y) || (this.max.z < this.min.z);
        };
        Box3.prototype.getCenter = function (out) {
            if (out === void 0) { out = new Vector3(); }
            return this.isEmpty() ? out.set(0, 0, 0) : out.addVectors(this.min, this.max).multiplyScalar(0.5);
        };
        Box3.prototype.getSize = function (out) {
            if (out === void 0) { out = new Vector3(); }
            return this.isEmpty() ? out.set(0, 0, 0) : out.subVectors(this.max, this.min);
        };
        Box3.prototype.setFromArray = function (array) {
            var minX = +Infinity;
            var minY = +Infinity;
            var minZ = +Infinity;
            var maxX = -Infinity;
            var maxY = -Infinity;
            var maxZ = -Infinity;
            for (var i = 0, l = array.length; i < l; i += 3) {
                var x = array[i];
                var y = array[i + 1];
                var z = array[i + 2];
                if (x < minX)
                    minX = x;
                if (y < minY)
                    minY = y;
                if (z < minZ)
                    minZ = z;
                if (x > maxX)
                    maxX = x;
                if (y > maxY)
                    maxY = y;
                if (z > maxZ)
                    maxZ = z;
            }
            this.min.set(minX, minY, minZ);
            this.max.set(maxX, maxY, maxZ);
            return this;
        };
        Box3.prototype.setFromCenterAndSize = function (center, size) {
            var v1 = new Vector3();
            var halfSize = v1.copy(size).multiplyScalar(0.5);
            this.min.copy(center).sub(halfSize);
            this.max.copy(center).add(halfSize);
            return this;
        };
        Box3.prototype.setFromPoints = function (points) {
            this.makeEmpty();
            for (var i = 0, il = points.length; i < il; i++) {
                this.expandByPoint(points[i]);
            }
            return this;
        };
        Box3.prototype.expandByPoint = function (point) {
            this.min.min(point);
            this.max.max(point);
            return this;
        };
        Box3.prototype.expandByVector = function (vector) {
            this.min.sub(vector);
            this.max.add(vector);
            return this;
        };
        Box3.prototype.expandByScalar = function (scalar) {
            this.min.addScalar(-scalar);
            this.max.addScalar(scalar);
            return this;
        };
        Box3.prototype.containsPoint = function (point) {
            return !(point.x < this.min.x || point.x > this.max.x ||
                point.y < this.min.y || point.y > this.max.y ||
                point.z < this.min.z || point.z > this.max.z);
        };
        Box3.prototype.containsBox = function (box) {
            return this.min.x <= box.min.x && box.max.x <= this.max.x &&
                this.min.y <= box.min.y && box.max.y <= this.max.y &&
                this.min.z <= box.min.z && box.max.z <= this.max.z;
        };
        Box3.prototype.intersectsBox = function (box) {
            return !(box.max.x < this.min.x || box.min.x > this.max.x ||
                box.max.y < this.min.y || box.min.y > this.max.y ||
                box.max.z < this.min.z || box.min.z > this.max.z);
        };
        Box3.prototype.intersectsSphere = function (sphere) {
            var closestPoint = new Vector3();
            this.clampPoint(sphere.center, closestPoint);
            return closestPoint.distanceToSquared(sphere.center) <= (sphere.radius * sphere.radius);
        };
        Box3.prototype.clampPoint = function (point, out) {
            if (out === void 0) { out = new Vector3(); }
            return out.copy(point).clamp(this.min, this.max);
        };
        Box3.prototype.distanceToPoint = function (point) {
            var v1 = new Vector3();
            var clampedPoint = v1.copy(point).clamp(this.min, this.max);
            return clampedPoint.sub(point).length();
        };
        Box3.prototype.getBoundingSphere = function (out) {
            if (out === void 0) { out = new Sphere(); }
            var v1 = new Vector3();
            this.getCenter(out.center);
            out.radius = this.getSize(v1).length() * 0.5;
            return out;
        };
        Box3.prototype.intersect = function (box) {
            this.min.max(box.min);
            this.max.min(box.max);
            if (this.isEmpty())
                this.makeEmpty();
            return this;
        };
        Box3.prototype.union = function (box) {
            this.min.min(box.min);
            this.max.max(box.max);
            return this;
        };
        Box3.prototype.applyMatrix4 = function (matrix) {
            var points = [
                new Vector3(),
                new Vector3(),
                new Vector3(),
                new Vector3(),
                new Vector3(),
                new Vector3(),
                new Vector3(),
                new Vector3()
            ];
            if (this.isEmpty())
                return this;
            points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
            points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
            points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
            points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
            points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
            points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
            points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
            points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
            this.setFromPoints(points);
            return this;
        };
        Box3.prototype.translate = function (offset) {
            this.min.add(offset);
            this.max.add(offset);
            return this;
        };
        Box3.prototype.equals = function (box) {
            return box.min.equals(this.min) && box.max.equals(this.max);
        };
        return Box3;
    }());

    var _lut = [];
    for (var i = 0; i < 256; i++) {
        _lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    var _Math = (function () {
        function _Math() {
        }
        _Math.generateUUID = function () {
            var d0 = Math.random() * 0xffffffff | 0;
            var d1 = Math.random() * 0xffffffff | 0;
            var d2 = Math.random() * 0xffffffff | 0;
            var d3 = Math.random() * 0xffffffff | 0;
            var uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' +
                _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' +
                _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] +
                _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
            return uuid.toUpperCase();
        };
        _Math.clamp = function (value, min, max) {
            return Math.max(min, Math.min(max, value));
        };
        _Math.euclideanModulo = function (n, m) {
            return ((n % m) + m) % m;
        };
        _Math.mapLinear = function (x, a1, a2, b1, b2) {
            return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
        };
        _Math.lerp = function (x, y, t) {
            return (1 - t) * x + t * y;
        };
        _Math.smoothstep = function (x, min, max) {
            if (x <= min)
                return 0;
            if (x >= max)
                return 1;
            x = (x - min) / (max - min);
            return x * x * (3 - 2 * x);
        };
        _Math.smootherstep = function (x, min, max) {
            if (x <= min)
                return 0;
            if (x >= max)
                return 1;
            x = (x - min) / (max - min);
            return x * x * x * (x * (x * 6 - 15) + 10);
        };
        _Math.randInt = function (low, high) {
            return low + Math.floor(Math.random() * (high - low + 1));
        };
        _Math.prototype.staticrandFloat = function (low, high) {
            return low + Math.random() * (high - low);
        };
        _Math.randFloatSpread = function (range) {
            return range * (0.5 - Math.random());
        };
        _Math.degToRad = function (degrees) {
            return degrees * _Math.DEG2RAD;
        };
        _Math.radToDeg = function (radians) {
            return radians * _Math.RAD2DEG;
        };
        _Math.isPowerOfTwo = function (value) {
            return (value & (value - 1)) === 0 && value !== 0;
        };
        _Math.ceilPowerOfTwo = function (value) {
            return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
        };
        _Math.floorPowerOfTwo = function (value) {
            return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
        };
        _Math.DEG2RAD = Math.PI / 180;
        _Math.RAD2DEG = 180 / Math.PI;
        return _Math;
    }());

    var _colorKeywords = {
        'aliceblue': 0xF0F8FF,
        'antiquewhite': 0xFAEBD7,
        'aqua': 0x00FFFF,
        'aquamarine': 0x7FFFD4,
        'azure': 0xF0FFFF,
        'beige': 0xF5F5DC,
        'bisque': 0xFFE4C4,
        'black': 0x000000,
        'blanchedalmond': 0xFFEBCD,
        'blue': 0x0000FF,
        'blueviolet': 0x8A2BE2,
        'brown': 0xA52A2A,
        'burlywood': 0xDEB887,
        'cadetblue': 0x5F9EA0,
        'chartreuse': 0x7FFF00,
        'chocolate': 0xD2691E,
        'coral': 0xFF7F50,
        'cornflowerblue': 0x6495ED,
        'cornsilk': 0xFFF8DC,
        'crimson': 0xDC143C,
        'cyan': 0x00FFFF,
        'darkblue': 0x00008B,
        'darkcyan': 0x008B8B,
        'darkgoldenrod': 0xB8860B,
        'darkgray': 0xA9A9A9,
        'darkgreen': 0x006400,
        'darkgrey': 0xA9A9A9,
        'darkkhaki': 0xBDB76B,
        'darkmagenta': 0x8B008B,
        'darkolivegreen': 0x556B2F,
        'darkorange': 0xFF8C00,
        'darkorchid': 0x9932CC,
        'darkred': 0x8B0000,
        'darksalmon': 0xE9967A,
        'darkseagreen': 0x8FBC8F,
        'darkslateblue': 0x483D8B,
        'darkslategray': 0x2F4F4F,
        'darkslategrey': 0x2F4F4F,
        'darkturquoise': 0x00CED1,
        'darkviolet': 0x9400D3,
        'deeppink': 0xFF1493,
        'deepskyblue': 0x00BFFF,
        'dimgray': 0x696969,
        'dimgrey': 0x696969,
        'dodgerblue': 0x1E90FF,
        'firebrick': 0xB22222,
        'floralwhite': 0xFFFAF0,
        'forestgreen': 0x228B22,
        'fuchsia': 0xFF00FF,
        'gainsboro': 0xDCDCDC,
        'ghostwhite': 0xF8F8FF,
        'gold': 0xFFD700,
        'goldenrod': 0xDAA520,
        'gray': 0x808080,
        'green': 0x008000,
        'greenyellow': 0xADFF2F,
        'grey': 0x808080,
        'honeydew': 0xF0FFF0,
        'hotpink': 0xFF69B4,
        'indianred': 0xCD5C5C,
        'indigo': 0x4B0082,
        'ivory': 0xFFFFF0,
        'khaki': 0xF0E68C,
        'lavender': 0xE6E6FA,
        'lavenderblush': 0xFFF0F5,
        'lawngreen': 0x7CFC00,
        'lemonchiffon': 0xFFFACD,
        'lightblue': 0xADD8E6,
        'lightcoral': 0xF08080,
        'lightcyan': 0xE0FFFF,
        'lightgoldenrodyellow': 0xFAFAD2,
        'lightgray': 0xD3D3D3,
        'lightgreen': 0x90EE90,
        'lightgrey': 0xD3D3D3,
        'lightpink': 0xFFB6C1,
        'lightsalmon': 0xFFA07A,
        'lightseagreen': 0x20B2AA,
        'lightskyblue': 0x87CEFA,
        'lightslategray': 0x778899,
        'lightslategrey': 0x778899,
        'lightsteelblue': 0xB0C4DE,
        'lightyellow': 0xFFFFE0,
        'lime': 0x00FF00,
        'limegreen': 0x32CD32,
        'linen': 0xFAF0E6,
        'magenta': 0xFF00FF,
        'maroon': 0x800000,
        'mediumaquamarine': 0x66CDAA,
        'mediumblue': 0x0000CD,
        'mediumorchid': 0xBA55D3,
        'mediumpurple': 0x9370DB,
        'mediumseagreen': 0x3CB371,
        'mediumslateblue': 0x7B68EE,
        'mediumspringgreen': 0x00FA9A,
        'mediumturquoise': 0x48D1CC,
        'mediumvioletred': 0xC71585,
        'midnightblue': 0x191970,
        'mintcream': 0xF5FFFA,
        'mistyrose': 0xFFE4E1,
        'moccasin': 0xFFE4B5,
        'navajowhite': 0xFFDEAD,
        'navy': 0x000080,
        'oldlace': 0xFDF5E6,
        'olive': 0x808000,
        'olivedrab': 0x6B8E23,
        'orange': 0xFFA500,
        'orangered': 0xFF4500,
        'orchid': 0xDA70D6,
        'palegoldenrod': 0xEEE8AA,
        'palegreen': 0x98FB98,
        'paleturquoise': 0xAFEEEE,
        'palevioletred': 0xDB7093,
        'papayawhip': 0xFFEFD5,
        'peachpuff': 0xFFDAB9,
        'peru': 0xCD853F,
        'pink': 0xFFC0CB,
        'plum': 0xDDA0DD,
        'powderblue': 0xB0E0E6,
        'purple': 0x800080,
        'rebeccapurple': 0x663399,
        'red': 0xFF0000,
        'rosybrown': 0xBC8F8F,
        'royalblue': 0x4169E1,
        'saddlebrown': 0x8B4513,
        'salmon': 0xFA8072,
        'sandybrown': 0xF4A460,
        'seagreen': 0x2E8B57,
        'seashell': 0xFFF5EE,
        'sienna': 0xA0522D,
        'silver': 0xC0C0C0,
        'skyblue': 0x87CEEB,
        'slateblue': 0x6A5ACD,
        'slategray': 0x708090,
        'slategrey': 0x708090,
        'snow': 0xFFFAFA,
        'springgreen': 0x00FF7F,
        'steelblue': 0x4682B4,
        'tan': 0xD2B48C,
        'teal': 0x008080,
        'thistle': 0xD8BFD8,
        'tomato': 0xFF6347,
        'turquoise': 0x40E0D0,
        'violet': 0xEE82EE,
        'wheat': 0xF5DEB3,
        'white': 0xFFFFFF,
        'whitesmoke': 0xF5F5F5,
        'yellow': 0xFFFF00,
        'yellowgreen': 0x9ACD32
    };
    var _hslA = { h: 0, s: 0, l: 0 };
    var _hslB = { h: 0, s: 0, l: 0 };
    var Color = (function () {
        function Color(r, g, b) {
            this.isColor = true;
            this.r = 1;
            this.g = 1;
            this.b = 1;
            if (!r)
                return this;
            (!g && !b) ? this.set(r) : this.setRGB(r, g, b);
        }
        Color.prototype.set = function (value) {
            if (value && value.isColor) {
                this.copy(value);
            }
            else if (typeof value === 'number') {
                this.setHex(value);
            }
            else if (typeof value === 'string') {
                this.setStyle(value);
            }
            return this;
        };
        Color.prototype.setScalar = function (scalar) {
            this.r = scalar;
            this.g = scalar;
            this.b = scalar;
            return this;
        };
        Color.prototype.setHex = function (hex) {
            hex = Math.floor(hex);
            this.r = (hex >> 16 & 255) / 255;
            this.g = (hex >> 8 & 255) / 255;
            this.b = (hex & 255) / 255;
            return this;
        };
        Color.prototype.setRGB = function (r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
            return this;
        };
        Color.prototype.setHSL = function (h, s, l) {
            h = _Math.euclideanModulo(h, 1);
            s = _Math.clamp(s, 0, 1);
            l = _Math.clamp(l, 0, 1);
            if (s === 0) {
                this.r = this.g = this.b = l;
            }
            else {
                var p = l <= 0.5 ? l * (1 + s) : l + s - (l * s);
                var q = (2 * l) - p;
                this.r = hue2rgb(q, p, h + 1 / 3);
                this.g = hue2rgb(q, p, h);
                this.b = hue2rgb(q, p, h - 1 / 3);
            }
            return this;
        };
        Color.prototype.setStyle = function (style) {
            function handleAlpha(string) {
                if (string === undefined)
                    return;
                if (parseFloat(string) < 1) {
                    console.warn('THREE.Color: Alpha component of ' + style + ' will be ignored.');
                }
            }
            var m;
            if (m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(style)) {
                var color_1;
                var name = m[1];
                var components = m[2];
                switch (name) {
                    case 'rgb':
                    case 'rgba':
                        if (color_1 = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
                            this.r = Math.min(255, parseInt(color_1[1], 10)) / 255;
                            this.g = Math.min(255, parseInt(color_1[2], 10)) / 255;
                            this.b = Math.min(255, parseInt(color_1[3], 10)) / 255;
                            handleAlpha(color_1[5]);
                            return this;
                        }
                        if (color_1 = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
                            this.r = Math.min(100, parseInt(color_1[1], 10)) / 100;
                            this.g = Math.min(100, parseInt(color_1[2], 10)) / 100;
                            this.b = Math.min(100, parseInt(color_1[3], 10)) / 100;
                            handleAlpha(color_1[5]);
                            return this;
                        }
                        break;
                    case 'hsl':
                    case 'hsla':
                        if (color_1 = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
                            var h = parseFloat(color_1[1]) / 360;
                            var s = parseInt(color_1[2], 10) / 100;
                            var l = parseInt(color_1[3], 10) / 100;
                            handleAlpha(color_1[5]);
                            return this.setHSL(h, s, l);
                        }
                        break;
                }
            }
            else if (m = /^\#([A-Fa-f0-9]+)$/.exec(style)) {
                var hex = m[1];
                var size = hex.length;
                if (size === 3) {
                    this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
                    this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
                    this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
                    return this;
                }
                else if (size === 6) {
                    this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
                    this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
                    this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
                    return this;
                }
            }
            if (style && style.length > 0) {
                return this.setColorName(style);
            }
            return this;
        };
        Color.prototype.setColorName = function (style) {
            var hex = _colorKeywords[style];
            if (hex !== undefined) {
                this.setHex(hex);
            }
            else {
                console.warn('THREE.Color: Unknown color ' + style);
            }
            return this;
        };
        Color.prototype.clone = function () {
            return new Color(this.r, this.g, this.b);
        };
        Color.prototype.copy = function (color) {
            this.r = color.r;
            this.g = color.g;
            this.b = color.b;
            return this;
        };
        Color.prototype.copyGammaToLinear = function (color, gammaFactor) {
            if (gammaFactor === undefined)
                gammaFactor = 2.0;
            this.r = Math.pow(color.r, gammaFactor);
            this.g = Math.pow(color.g, gammaFactor);
            this.b = Math.pow(color.b, gammaFactor);
            return this;
        };
        Color.prototype.copyLinearToGamma = function (color, gammaFactor) {
            if (gammaFactor === undefined)
                gammaFactor = 2.0;
            var safeInverse = (gammaFactor > 0) ? (1.0 / gammaFactor) : 1.0;
            this.r = Math.pow(color.r, safeInverse);
            this.g = Math.pow(color.g, safeInverse);
            this.b = Math.pow(color.b, safeInverse);
            return this;
        };
        Color.prototype.convertGammaToLinear = function (gammaFactor) {
            this.copyGammaToLinear(this, gammaFactor);
            return this;
        };
        Color.prototype.convertLinearToGamma = function (gammaFactor) {
            this.copyLinearToGamma(this, gammaFactor);
            return this;
        };
        Color.prototype.copySRGBToLinear = function (color) {
            this.r = SRGBToLinear(color.r);
            this.g = SRGBToLinear(color.g);
            this.b = SRGBToLinear(color.b);
            return this;
        };
        Color.prototype.copyLinearToSRGB = function (color) {
            this.r = LinearToSRGB(color.r);
            this.g = LinearToSRGB(color.g);
            this.b = LinearToSRGB(color.b);
            return this;
        };
        Color.prototype.convertSRGBToLinear = function () {
            this.copySRGBToLinear(this);
            return this;
        };
        Color.prototype.convertLinearToSRGB = function () {
            this.copyLinearToSRGB(this);
            return this;
        };
        Color.prototype.getHex = function () {
            return (this.r * 255) << 16 ^ (this.g * 255) << 8 ^ (this.b * 255) << 0;
        };
        Color.prototype.getHexString = function () {
            return ('000000' + this.getHex().toString(16)).slice(-6);
        };
        Color.prototype.getHSL = function (target) {
            if (target === undefined) {
                console.warn('THREE.Color: .getHSL() target is now required');
                target = { h: 0, s: 0, l: 0 };
            }
            var r = this.r, g = this.g, b = this.b;
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var hue, saturation;
            var lightness = (min + max) / 2.0;
            if (min === max) {
                hue = 0;
                saturation = 0;
            }
            else {
                var delta = max - min;
                saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
                switch (max) {
                    case r:
                        hue = (g - b) / delta + (g < b ? 6 : 0);
                        break;
                    case g:
                        hue = (b - r) / delta + 2;
                        break;
                    case b:
                        hue = (r - g) / delta + 4;
                        break;
                }
                hue /= 6;
            }
            target.h = hue;
            target.s = saturation;
            target.l = lightness;
            return target;
        };
        Color.prototype.getStyle = function () {
            return 'rgb(' + ((this.r * 255) | 0) + ',' + ((this.g * 255) | 0) + ',' + ((this.b * 255) | 0) + ')';
        };
        Color.prototype.offsetHSL = function (h, s, l) {
            this.getHSL(_hslA);
            _hslA.h += h;
            _hslA.s += s;
            _hslA.l += l;
            this.setHSL(_hslA.h, _hslA.s, _hslA.l);
            return this;
        };
        Color.prototype.add = function (color) {
            this.r += color.r;
            this.g += color.g;
            this.b += color.b;
            return this;
        };
        Color.prototype.addColors = function (color1, color2) {
            this.r = color1.r + color2.r;
            this.g = color1.g + color2.g;
            this.b = color1.b + color2.b;
            return this;
        };
        Color.prototype.addScalar = function (s) {
            this.r += s;
            this.g += s;
            this.b += s;
            return this;
        };
        Color.prototype.sub = function (color) {
            this.r = Math.max(0, this.r - color.r);
            this.g = Math.max(0, this.g - color.g);
            this.b = Math.max(0, this.b - color.b);
            return this;
        };
        Color.prototype.multiply = function (color) {
            this.r *= color.r;
            this.g *= color.g;
            this.b *= color.b;
            return this;
        };
        Color.prototype.multiplyScalar = function (s) {
            this.r *= s;
            this.g *= s;
            this.b *= s;
            return this;
        };
        Color.prototype.lerp = function (color, alpha) {
            this.r += (color.r - this.r) * alpha;
            this.g += (color.g - this.g) * alpha;
            this.b += (color.b - this.b) * alpha;
            return this;
        };
        Color.prototype.lerpHSL = function (color, alpha) {
            this.getHSL(_hslA);
            color.getHSL(_hslB);
            var h = _Math.lerp(_hslA.h, _hslB.h, alpha);
            var s = _Math.lerp(_hslA.s, _hslB.s, alpha);
            var l = _Math.lerp(_hslA.l, _hslB.l, alpha);
            this.setHSL(h, s, l);
            return this;
        };
        Color.prototype.equals = function (c) {
            return (c.r === this.r) && (c.g === this.g) && (c.b === this.b);
        };
        Color.prototype.fromArray = function (array, offset) {
            if (offset === void 0) { offset = 0; }
            this.r = array[offset];
            this.g = array[offset + 1];
            this.b = array[offset + 2];
            return this;
        };
        Color.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            array[offset] = this.r;
            array[offset + 1] = this.g;
            array[offset + 2] = this.b;
            return array;
        };
        Color.prototype.toJSON = function () {
            return this.getHex();
        };
        Color.NAMES = _colorKeywords;
        return Color;
    }());
    function hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * 6 * (2 / 3 - t);
        return p;
    }
    function SRGBToLinear(c) {
        return (c < 0.04045) ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
    }
    function LinearToSRGB(c) {
        return (c < 0.0031308) ? c * 12.92 : 1.055 * (Math.pow(c, 0.41666)) - 0.055;
    }
    function color(r, g, b) {
        return new Color(r, g, b);
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    var Quaternion = (function () {
        function Quaternion(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 1; }
            this.setFromUnitVectors = function () {
                var v1 = new Vector3();
                var r;
                var EPS = 0.000001;
                return function setFromUnitVectors(vFrom, vTo) {
                    if (v1 === undefined)
                        v1 = new Vector3();
                    r = vFrom.dot(vTo) + 1;
                    if (r < EPS) {
                        r = 0;
                        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                            v1.set(-vFrom.y, vFrom.x, 0);
                        }
                        else {
                            v1.set(0, -vFrom.z, vFrom.y);
                        }
                    }
                    else {
                        v1.crossVectors(vFrom, vTo);
                    }
                    this._x = v1.x;
                    this._y = v1.y;
                    this._z = v1.z;
                    this._w = r;
                    return this.normalize();
                };
            }();
            this._x = x;
            this._y = y;
            this._z = z;
            this._w = w;
        }
        Quaternion.slerp = function (qa, qb, qm, t) {
            return qm.copy(qa).slerp(qb, t);
        };
        Quaternion.slerpFlat = function (dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
            var x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3], x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
            if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
                var s = 1 - t, cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = (cos >= 0 ? 1 : -1), sqrSin = 1 - cos * cos;
                if (sqrSin > 0.0000000000000000001) {
                    var sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
                    s = Math.sin(s * len) / sin;
                    t = Math.sin(t * len) / sin;
                }
                var tDir = t * dir;
                x0 = x0 * s + x1 * tDir;
                y0 = y0 * s + y1 * tDir;
                z0 = z0 * s + z1 * tDir;
                w0 = w0 * s + w1 * tDir;
                if (s === 1 - t) {
                    var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
                    x0 *= f;
                    y0 *= f;
                    z0 *= f;
                    w0 *= f;
                }
            }
            dst[dstOffset] = x0;
            dst[dstOffset + 1] = y0;
            dst[dstOffset + 2] = z0;
            dst[dstOffset + 3] = w0;
        };
        Object.defineProperty(Quaternion.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._x = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Quaternion.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._y = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Quaternion.prototype, "z", {
            get: function () {
                return this._z;
            },
            set: function (value) {
                this._z = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Quaternion.prototype, "w", {
            get: function () {
                return this._w;
            },
            set: function (value) {
                this._w = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Quaternion.prototype.set = function (x, y, z, w) {
            this._x = x;
            this._y = y;
            this._z = z;
            this._w = w;
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.clone = function () {
            return new Quaternion(this._x, this._y, this._z, this._w);
        };
        Quaternion.prototype.copy = function (quaternion) {
            this._x = quaternion.x;
            this._y = quaternion.y;
            this._z = quaternion.z;
            this._w = quaternion.w;
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.setFromEuler = function (euler, update) {
            if (update === void 0) { update = true; }
            var x = euler._x, y = euler._y, z = euler._z, order = euler.order;
            var cos = Math.cos;
            var sin = Math.sin;
            var c1 = cos(x / 2);
            var c2 = cos(y / 2);
            var c3 = cos(z / 2);
            var s1 = sin(x / 2);
            var s2 = sin(y / 2);
            var s3 = sin(z / 2);
            if (order === 'XYZ') {
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
            }
            else if (order === 'YXZ') {
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
            }
            else if (order === 'ZXY') {
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
            }
            else if (order === 'ZYX') {
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
            }
            else if (order === 'YZX') {
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
            }
            else if (order === 'XZY') {
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
            }
            if (update)
                this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.setFromAxisAngle = function (axis, angle) {
            var halfAngle = angle / 2, s = Math.sin(halfAngle);
            this._x = axis.x * s;
            this._y = axis.y * s;
            this._z = axis.z * s;
            this._w = Math.cos(halfAngle);
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.setFromRotationMatrix = function (m) {
            var te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
            var s;
            if (trace > 0) {
                s = 0.5 / Math.sqrt(trace + 1.0);
                this._w = 0.25 / s;
                this._x = (m32 - m23) * s;
                this._y = (m13 - m31) * s;
                this._z = (m21 - m12) * s;
            }
            else if (m11 > m22 && m11 > m33) {
                s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
                this._w = (m32 - m23) / s;
                this._x = 0.25 * s;
                this._y = (m12 + m21) / s;
                this._z = (m13 + m31) / s;
            }
            else if (m22 > m33) {
                s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
                this._w = (m13 - m31) / s;
                this._x = (m12 + m21) / s;
                this._y = 0.25 * s;
                this._z = (m23 + m32) / s;
            }
            else {
                s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
                this._w = (m21 - m12) / s;
                this._x = (m13 + m31) / s;
                this._y = (m23 + m32) / s;
                this._z = 0.25 * s;
            }
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.angleTo = function (q) {
            return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
        };
        Quaternion.prototype.rotateTowards = function (q, step) {
            var angle = this.angleTo(q);
            if (angle === 0)
                return this;
            var t = Math.min(1, step / angle);
            this.slerp(q, t);
            return this;
        };
        Quaternion.prototype.inverse = function () {
            return this.conjugate();
        };
        Quaternion.prototype.conjugate = function () {
            this._x *= -1;
            this._y *= -1;
            this._z *= -1;
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.dot = function (v) {
            return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
        };
        Quaternion.prototype.lengthSq = function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        };
        Quaternion.prototype.length = function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        };
        Quaternion.prototype.normalize = function () {
            var l = this.length();
            if (l === 0) {
                this._x = 0;
                this._y = 0;
                this._z = 0;
                this._w = 1;
            }
            else {
                l = 1 / l;
                this._x = this._x * l;
                this._y = this._y * l;
                this._z = this._z * l;
                this._w = this._w * l;
            }
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.multiply = function (q, p) {
            if (p !== undefined) {
                console.warn('');
                return this.multiplyQuaternions(q, p);
            }
            return this.multiplyQuaternions(this, q);
        };
        Quaternion.prototype.premultiply = function (q) {
            return this.multiplyQuaternions(q, this);
        };
        Quaternion.prototype.multiplyQuaternions = function (a, b) {
            var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
            var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
            this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
            this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
            this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
            this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.slerp = function (qb, t) {
            if (t === 0)
                return this;
            if (t === 1)
                return this.copy(qb);
            var x = this._x, y = this._y, z = this._z, w = this._w;
            var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
            if (cosHalfTheta < 0) {
                this._w = -qb._w;
                this._x = -qb._x;
                this._y = -qb._y;
                this._z = -qb._z;
                cosHalfTheta = -cosHalfTheta;
            }
            else {
                this.copy(qb);
            }
            if (cosHalfTheta >= 1.0) {
                this._w = w;
                this._x = x;
                this._y = y;
                this._z = z;
                return this;
            }
            var sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;
            if (sqrSinHalfTheta <= 0.0000000000001) {
                var s = 1 - t;
                this._w = s * w + t * this._w;
                this._x = s * x + t * this._x;
                this._y = s * y + t * this._y;
                this._z = s * z + t * this._z;
                return this.normalize();
            }
            var sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
            var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
            var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
            this._w = (w * ratioA + this._w * ratioB);
            this._x = (x * ratioA + this._x * ratioB);
            this._y = (y * ratioA + this._y * ratioB);
            this._z = (z * ratioA + this._z * ratioB);
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.equals = function (quaternion) {
            return (quaternion._x === this._x) && (quaternion._y === this._y) && (quaternion._z === this._z) && (quaternion._w === this._w);
        };
        Quaternion.prototype.fromArray = function (array, offset) {
            if (offset === void 0) { offset = 0; }
            this._x = array[offset];
            this._y = array[offset + 1];
            this._z = array[offset + 2];
            this._w = array[offset + 3];
            this.onChangeCallback();
            return this;
        };
        Quaternion.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            array[offset] = this._x;
            array[offset + 1] = this._y;
            array[offset + 2] = this._z;
            array[offset + 3] = this._w;
            return array;
        };
        Quaternion.prototype.onChange = function (callback) {
            this.onChangeCallback = callback;
            return this;
        };
        Quaternion.prototype.onChangeCallback = function () {
        };
        return Quaternion;
    }());
    function quat(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 1; }
        return new Quaternion(x, y, z, w);
    }

    (function (RotationOrders) {
        RotationOrders["XYZ"] = "XYZ";
        RotationOrders["YZX"] = "YZX";
        RotationOrders["ZXY"] = "ZXY";
        RotationOrders["XZY"] = "XZY";
        RotationOrders["YXZ"] = "YXZ";
        RotationOrders["ZYX"] = "ZYX";
    })(exports.RotationOrders || (exports.RotationOrders = {}));
    var Euler = (function () {
        function Euler(_x, _y, _z, _order) {
            if (_x === void 0) { _x = 0; }
            if (_y === void 0) { _y = 0; }
            if (_z === void 0) { _z = 0; }
            if (_order === void 0) { _order = exports.RotationOrders.XYZ; }
            this._x = _x;
            this._y = _y;
            this._z = _z;
            this._order = _order;
        }
        Object.defineProperty(Euler.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._x = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Euler.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._y = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Euler.prototype, "z", {
            get: function () {
                return this._z;
            },
            set: function (value) {
                this._z = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Euler.prototype, "order", {
            get: function () {
                return this._order;
            },
            set: function (value) {
                this._order = value;
                this.onChangeCallback();
            },
            enumerable: false,
            configurable: true
        });
        Euler.prototype.set = function (x, y, z, order) {
            this._x = x;
            this._y = y;
            this._z = z;
            this._order = order || this._order;
            this.onChangeCallback();
            return this;
        };
        Euler.prototype.clone = function () {
            return new Euler(this._x, this._y, this._z, this._order);
        };
        Euler.prototype.copy = function (euler) {
            this._x = euler._x;
            this._y = euler._y;
            this._z = euler._z;
            this._order = euler._order;
            this.onChangeCallback();
            return this;
        };
        Euler.prototype.setFromRotationMatrix = function (m, order, update) {
            if (update === void 0) { update = true; }
            var te = m.elements;
            var m11 = te[0], m12 = te[4], m13 = te[8];
            var m21 = te[1], m22 = te[5], m23 = te[9];
            var m31 = te[2], m32 = te[6], m33 = te[10];
            order = order || this._order;
            if (order === 'XYZ') {
                this._y = Math.asin(clamp(m13, -1, 1));
                if (Math.abs(m13) < 0.99999) {
                    this._x = Math.atan2(-m23, m33);
                    this._z = Math.atan2(-m12, m11);
                }
                else {
                    this._x = Math.atan2(m32, m22);
                    this._z = 0;
                }
            }
            else if (order === 'YXZ') {
                this._x = Math.asin(-clamp(m23, -1, 1));
                if (Math.abs(m23) < 0.99999) {
                    this._y = Math.atan2(m13, m33);
                    this._z = Math.atan2(m21, m22);
                }
                else {
                    this._y = Math.atan2(-m31, m11);
                    this._z = 0;
                }
            }
            else if (order === 'ZXY') {
                this._x = Math.asin(clamp(m32, -1, 1));
                if (Math.abs(m32) < 0.99999) {
                    this._y = Math.atan2(-m31, m33);
                    this._z = Math.atan2(-m12, m22);
                }
                else {
                    this._y = 0;
                    this._z = Math.atan2(m21, m11);
                }
            }
            else if (order === 'ZYX') {
                this._y = Math.asin(-clamp(m31, -1, 1));
                if (Math.abs(m31) < 0.99999) {
                    this._x = Math.atan2(m32, m33);
                    this._z = Math.atan2(m21, m11);
                }
                else {
                    this._x = 0;
                    this._z = Math.atan2(-m12, m22);
                }
            }
            else if (order === 'YZX') {
                this._z = Math.asin(clamp(m21, -1, 1));
                if (Math.abs(m21) < 0.99999) {
                    this._x = Math.atan2(-m23, m22);
                    this._y = Math.atan2(-m31, m11);
                }
                else {
                    this._x = 0;
                    this._y = Math.atan2(m13, m33);
                }
            }
            else if (order === 'XZY') {
                this._z = Math.asin(-clamp(m12, -1, 1));
                if (Math.abs(m12) < 0.99999) {
                    this._x = Math.atan2(m32, m22);
                    this._y = Math.atan2(m13, m11);
                }
                else {
                    this._x = Math.atan2(-m23, m33);
                    this._y = 0;
                }
            }
            else {
                console.warn('Euler: .setFromRotationMatrix() given unsupported order: ' + order);
            }
            this._order = order;
            if (update)
                this.onChangeCallback();
            return this;
        };
        Euler.prototype.setFromQuaternion = function (q, order, update) {
            if (update === void 0) { update = true; }
            var matrix = new Matrix4();
            matrix.makeRotationFromQuaternion(q);
            return this.setFromRotationMatrix(matrix, order, update);
        };
        Euler.prototype.setFromVector3 = function (v, order) {
            return this.set(v.x, v.y, v.z, order || this._order);
        };
        Euler.prototype.reorder = function (newOrder) {
            var q = new Quaternion();
            q.setFromEuler(this);
            return this.setFromQuaternion(q, newOrder);
        };
        Euler.prototype.equals = function (euler) {
            return (euler._x === this._x) && (euler._y === this._y) && (euler._z === this._z) && (euler._order === this._order);
        };
        Euler.prototype.fromArray = function (array) {
            this._x = array[0];
            this._y = array[1];
            this._z = array[2];
            if (array[3] !== undefined)
                this._order = array[3];
            this.onChangeCallback();
            return this;
        };
        Euler.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            array[offset] = this._x;
            array[offset + 1] = this._y;
            array[offset + 2] = this._z;
            array[offset + 3] = this._order;
            return array;
        };
        Euler.prototype.toVector3 = function (optionalResult) {
            if (optionalResult) {
                return optionalResult.set(this._x, this._y, this._z);
            }
            else {
                return new Vector3(this._x, this._y, this._z);
            }
        };
        Euler.prototype.onChange = function (callback) {
            this.onChangeCallback = callback;
            return this;
        };
        Euler.prototype.onChangeCallback = function () {
        };
        return Euler;
    }());
    function euler(x, y, z, order) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (order === void 0) { order = exports.RotationOrders.XYZ; }
        return new Euler(x, y, z, order);
    }

    var _vector = new Vector3();
    var Matrix3 = (function () {
        function Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            if (m00 === void 0) { m00 = 1; }
            if (m01 === void 0) { m01 = 0; }
            if (m02 === void 0) { m02 = 0; }
            if (m10 === void 0) { m10 = 0; }
            if (m11 === void 0) { m11 = 1; }
            if (m12 === void 0) { m12 = 0; }
            if (m20 === void 0) { m20 = 0; }
            if (m21 === void 0) { m21 = 0; }
            if (m22 === void 0) { m22 = 1; }
            if (m00 instanceof Float32Array) {
                this.elements = m00;
            }
            else if (Array.isArray(m00)) {
                this.elements = new Float32Array(m00);
            }
            else {
                this.elements = new Float32Array([
                    m00, m01, m02,
                    m10, m11, m12,
                    m20, m21, m22,
                ]);
            }
        }
        Matrix3.prototype.set = function (n11, n12, n13, n21, n22, n23, n31, n32, n33) {
            var te = this.elements;
            te[0] = n11;
            te[1] = n21;
            te[2] = n31;
            te[3] = n12;
            te[4] = n22;
            te[5] = n32;
            te[6] = n13;
            te[7] = n23;
            te[8] = n33;
            return this;
        };
        Matrix3.prototype.identity = function () {
            this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
            return this;
        };
        Matrix3.prototype.clone = function () {
            return new Matrix3().fromArray(this.elements);
        };
        Matrix3.prototype.copy = function (m) {
            var te = this.elements;
            var me = m.elements;
            te[0] = me[0];
            te[1] = me[1];
            te[2] = me[2];
            te[3] = me[3];
            te[4] = me[4];
            te[5] = me[5];
            te[6] = me[6];
            te[7] = me[7];
            te[8] = me[8];
            return this;
        };
        Matrix3.prototype.setFromMatrix4 = function (m) {
            var me = m.elements;
            this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
            return this;
        };
        Matrix3.prototype.applyToBufferAttribute = function (attribute) {
            for (var i = 0, l = attribute.count; i < l; i++) {
                _vector.x = attribute.getX(i);
                _vector.y = attribute.getY(i);
                _vector.z = attribute.getZ(i);
                _vector.applyMatrix3(this);
                attribute.setXYZ(i, _vector.x, _vector.y, _vector.z);
            }
            return attribute;
        };
        Matrix3.prototype.multiply = function (m) {
            return this.multiplyMatrices(this, m);
        };
        Matrix3.prototype.premultiply = function (m) {
            return this.multiplyMatrices(m, this);
        };
        Matrix3.prototype.multiplyMatrices = function (a, b) {
            var ae = a.elements;
            var be = b.elements;
            var te = this.elements;
            var a11 = ae[0], a12 = ae[3], a13 = ae[6];
            var a21 = ae[1], a22 = ae[4], a23 = ae[7];
            var a31 = ae[2], a32 = ae[5], a33 = ae[8];
            var b11 = be[0], b12 = be[3], b13 = be[6];
            var b21 = be[1], b22 = be[4], b23 = be[7];
            var b31 = be[2], b32 = be[5], b33 = be[8];
            te[0] = a11 * b11 + a12 * b21 + a13 * b31;
            te[3] = a11 * b12 + a12 * b22 + a13 * b32;
            te[6] = a11 * b13 + a12 * b23 + a13 * b33;
            te[1] = a21 * b11 + a22 * b21 + a23 * b31;
            te[4] = a21 * b12 + a22 * b22 + a23 * b32;
            te[7] = a21 * b13 + a22 * b23 + a23 * b33;
            te[2] = a31 * b11 + a32 * b21 + a33 * b31;
            te[5] = a31 * b12 + a32 * b22 + a33 * b32;
            te[8] = a31 * b13 + a32 * b23 + a33 * b33;
            return this;
        };
        Matrix3.prototype.multiplyScalar = function (s) {
            var te = this.elements;
            te[0] *= s;
            te[3] *= s;
            te[6] *= s;
            te[1] *= s;
            te[4] *= s;
            te[7] *= s;
            te[2] *= s;
            te[5] *= s;
            te[8] *= s;
            return this;
        };
        Matrix3.prototype.determinant = function () {
            var te = this.elements;
            var a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
            return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
        };
        Matrix3.prototype.getInverse = function (matrix, throwOnDegenerate) {
            if (throwOnDegenerate === void 0) { throwOnDegenerate = false; }
            var me = matrix.elements, te = this.elements, n11 = me[0], n21 = me[1], n31 = me[2], n12 = me[3], n22 = me[4], n32 = me[5], n13 = me[6], n23 = me[7], n33 = me[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
            if (det === 0) {
                var msg = "Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (throwOnDegenerate === true) {
                    throw new Error(msg);
                }
                else {
                    console.warn(msg);
                }
                return this.identity();
            }
            var detInv = 1 / det;
            te[0] = t11 * detInv;
            te[1] = (n31 * n23 - n33 * n21) * detInv;
            te[2] = (n32 * n21 - n31 * n22) * detInv;
            te[3] = t12 * detInv;
            te[4] = (n33 * n11 - n31 * n13) * detInv;
            te[5] = (n31 * n12 - n32 * n11) * detInv;
            te[6] = t13 * detInv;
            te[7] = (n21 * n13 - n23 * n11) * detInv;
            te[8] = (n22 * n11 - n21 * n12) * detInv;
            return this;
        };
        Matrix3.prototype.transpose = function () {
            var tmp, m = this.elements;
            tmp = m[1];
            m[1] = m[3];
            m[3] = tmp;
            tmp = m[2];
            m[2] = m[6];
            m[6] = tmp;
            tmp = m[5];
            m[5] = m[7];
            m[7] = tmp;
            return this;
        };
        Matrix3.prototype.getNormalMatrix = function (matrix4) {
            return this.setFromMatrix4(matrix4).getInverse(this).transpose();
        };
        Matrix3.prototype.transposeIntoArray = function (r) {
            var m = this.elements;
            r[0] = m[0];
            r[1] = m[3];
            r[2] = m[6];
            r[3] = m[1];
            r[4] = m[4];
            r[5] = m[7];
            r[6] = m[2];
            r[7] = m[5];
            r[8] = m[8];
            return this;
        };
        Matrix3.prototype.setUvTransform = function (tx, ty, sx, sy, rotation, cx, cy) {
            var c = Math.cos(rotation);
            var s = Math.sin(rotation);
            this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
        };
        Matrix3.prototype.scale = function (sx, sy) {
            var te = this.elements;
            te[0] *= sx;
            te[3] *= sx;
            te[6] *= sx;
            te[1] *= sy;
            te[4] *= sy;
            te[7] *= sy;
            return this;
        };
        Matrix3.prototype.rotate = function (theta) {
            var c = Math.cos(theta);
            var s = Math.sin(theta);
            var te = this.elements;
            var a11 = te[0], a12 = te[3], a13 = te[6];
            var a21 = te[1], a22 = te[4], a23 = te[7];
            te[0] = c * a11 + s * a21;
            te[3] = c * a12 + s * a22;
            te[6] = c * a13 + s * a23;
            te[1] = -s * a11 + c * a21;
            te[4] = -s * a12 + c * a22;
            te[7] = -s * a13 + c * a23;
            return this;
        };
        Matrix3.prototype.translate = function (tx, ty) {
            var te = this.elements;
            te[0] += tx * te[2];
            te[3] += tx * te[5];
            te[6] += tx * te[8];
            te[1] += ty * te[2];
            te[4] += ty * te[5];
            te[7] += ty * te[8];
            return this;
        };
        Matrix3.prototype.equals = function (matrix) {
            var te = this.elements;
            var me = matrix.elements;
            for (var i = 0; i < 9; i++) {
                if (te[i] !== me[i])
                    return false;
            }
            return true;
        };
        Matrix3.prototype.fromArray = function (array, offset) {
            if (offset === void 0) { offset = 0; }
            for (var i = 0; i < 9; i++) {
                this.elements[i] = array[i + offset];
            }
            return this;
        };
        Matrix3.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            var te = this.elements;
            array[offset] = te[0];
            array[offset + 1] = te[1];
            array[offset + 2] = te[2];
            array[offset + 3] = te[3];
            array[offset + 4] = te[4];
            array[offset + 5] = te[5];
            array[offset + 6] = te[6];
            array[offset + 7] = te[7];
            array[offset + 8] = te[8];
            return array;
        };
        return Matrix3;
    }());
    function mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00 === void 0) { m00 = 1; }
        if (m01 === void 0) { m01 = 0; }
        if (m02 === void 0) { m02 = 0; }
        if (m10 === void 0) { m10 = 0; }
        if (m11 === void 0) { m11 = 1; }
        if (m12 === void 0) { m12 = 0; }
        if (m20 === void 0) { m20 = 0; }
        if (m21 === void 0) { m21 = 0; }
        if (m22 === void 0) { m22 = 1; }
        return new Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    }

    var Ray = (function () {
        function Ray(origin, direction) {
            if (origin === void 0) { origin = new Vector3(); }
            if (direction === void 0) { direction = new Vector3(); }
            this.origin = origin;
            this.direction = direction;
        }
        Ray.prototype.set = function (origin, direction) {
            this.origin.copy(origin);
            this.direction.copy(direction);
            return this;
        };
        Ray.prototype.clone = function () {
            return new Ray().copy(this);
        };
        Ray.prototype.copy = function (ray) {
            this.origin.copy(ray.origin);
            this.direction.copy(ray.direction);
            return this;
        };
        Ray.prototype.at = function (t, target) {
            return target.copy(this.direction).multiplyScalar(t).add(this.origin);
        };
        Ray.prototype.lookAt = function (v) {
            this.direction.copy(v).sub(this.origin).normalize();
            return this;
        };
        Ray.prototype.recast = function (t) {
            var v1 = new Vector3();
            this.origin.copy(this.at(t, v1));
            return this;
        };
        Ray.prototype.closestPointToPoint = function (point, out) {
            if (out === void 0) { out = new Vector3(); }
            out.subVectors(point, this.origin);
            var directionDistance = out.dot(this.direction);
            if (directionDistance < 0)
                return out.copy(this.origin);
            return out.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
        };
        Ray.prototype.distanceToPoint = function (point) {
            return Math.sqrt(this.distanceSqToPoint(point));
        };
        Ray.prototype.distanceSqToPoint = function (point) {
            var v1 = new Vector3();
            var directionDistance = v1.subVectors(point, this.origin).dot(this.direction);
            if (directionDistance < 0) {
                return this.origin.distanceToSquared(point);
            }
            v1.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
            return v1.distanceToSquared(point);
        };
        Ray.prototype.intersectSphere = function (sphere, out) {
            var v1 = new Vector3();
            v1.subVectors(sphere.center, this.origin);
            var tca = v1.dot(this.direction);
            var d2 = v1.dot(v1) - tca * tca;
            var radius2 = sphere.radius * sphere.radius;
            if (d2 > radius2)
                return null;
            var thc = Math.sqrt(radius2 - d2);
            var t0 = tca - thc;
            var t1 = tca + thc;
            if (t0 < 0 && t1 < 0)
                return null;
            if (t0 < 0)
                return this.at(t1, out);
            return this.at(t0, out);
        };
        Ray.prototype.intersectsSphere = function (sphere) {
            return this.distanceSqToPoint(sphere.center) <= (sphere.radius * sphere.radius);
        };
        Ray.prototype.intersectBox = function (box, out) {
            var tmin, tmax, tymin, tymax, tzmin, tzmax;
            var invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
            var origin = this.origin;
            if (invdirx >= 0) {
                tmin = (box.min.x - origin.x) * invdirx;
                tmax = (box.max.x - origin.x) * invdirx;
            }
            else {
                tmin = (box.max.x - origin.x) * invdirx;
                tmax = (box.min.x - origin.x) * invdirx;
            }
            if (invdiry >= 0) {
                tymin = (box.min.y - origin.y) * invdiry;
                tymax = (box.max.y - origin.y) * invdiry;
            }
            else {
                tymin = (box.max.y - origin.y) * invdiry;
                tymax = (box.min.y - origin.y) * invdiry;
            }
            if ((tmin > tymax) || (tymin > tmax))
                return null;
            if (tymin > tmin || tmin !== tmin)
                tmin = tymin;
            if (tymax < tmax || tmax !== tmax)
                tmax = tymax;
            if (invdirz >= 0) {
                tzmin = (box.min.z - origin.z) * invdirz;
                tzmax = (box.max.z - origin.z) * invdirz;
            }
            else {
                tzmin = (box.max.z - origin.z) * invdirz;
                tzmax = (box.min.z - origin.z) * invdirz;
            }
            if ((tmin > tzmax) || (tzmin > tmax))
                return null;
            if (tzmin > tmin || tmin !== tmin)
                tmin = tzmin;
            if (tzmax < tmax || tmax !== tmax)
                tmax = tzmax;
            if (tmax < 0)
                return null;
            return this.at(tmin >= 0 ? tmin : tmax, out);
        };
        Ray.prototype.intersectsBox = function (box) {
            return this.intersectBox(box, new Vector3()) !== null;
        };
        Ray.prototype.intersectTriangle = function (a, b, c, backfaceCulling, out) {
            var diff = new Vector3();
            var edge1 = new Vector3();
            var edge2 = new Vector3();
            var normal = new Vector3();
            edge1.subVectors(b, a);
            edge2.subVectors(c, a);
            normal.crossVectors(edge1, edge2);
            var DdN = this.direction.dot(normal);
            var sign;
            if (DdN > 0) {
                if (backfaceCulling)
                    return null;
                sign = 1;
            }
            else if (DdN < 0) {
                sign = -1;
                DdN = -DdN;
            }
            else {
                return null;
            }
            diff.subVectors(this.origin, a);
            var DdQxE2 = sign * this.direction.dot(edge2.crossVectors(diff, edge2));
            if (DdQxE2 < 0) {
                return null;
            }
            var DdE1xQ = sign * this.direction.dot(edge1.cross(diff));
            if (DdE1xQ < 0) {
                return null;
            }
            if (DdQxE2 + DdE1xQ > DdN) {
                return null;
            }
            var QdN = -sign * diff.dot(normal);
            if (QdN < 0) {
                return null;
            }
            return this.at(QdN / DdN, out);
        };
        Ray.prototype.applyMatrix4 = function (matrix4) {
            this.origin.applyMatrix4(matrix4);
            this.direction.transformDirection(matrix4);
            return this;
        };
        Ray.prototype.equals = function (ray) {
            return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
        };
        return Ray;
    }());
    function ray(origin, direction) {
        if (origin === void 0) { origin = new Vector3(); }
        if (direction === void 0) { direction = new Vector3(); }
        return new Ray(origin, direction);
    }

    var Vector2 = (function () {
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = x; }
            this.x = x;
            this.y = y;
        }
        Vector2.prototype.set = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        Vector2.prototype.copy = function (v) {
            this.x = v.x;
            this.y = v.y;
            return this;
        };
        Vector2.prototype.clone = function () {
            return new Vector2(this.x, this.y);
        };
        Vector2.prototype.add = function (v) {
            this.x += v.x;
            this.y += v.y;
            return this;
        };
        Vector2.prototype.addScalar = function (s) {
            this.x += s;
            this.y += s;
            return this;
        };
        Vector2.prototype.addVectors = function (a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this;
        };
        Vector2.prototype.addScaledVector = function (v, s) {
            this.x += v.x * s;
            this.y += v.y * s;
            return this;
        };
        Vector2.prototype.sub = function (v) {
            this.x -= v.x;
            this.y -= v.y;
            return this;
        };
        Vector2.prototype.subScalar = function (s) {
            this.x -= s;
            this.y -= s;
            return this;
        };
        Vector2.prototype.subVectors = function (a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this;
        };
        Vector2.prototype.multiply = function (v) {
            this.x *= v.x;
            this.y *= v.y;
            return this;
        };
        Vector2.prototype.multiplyScalar = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        };
        Vector2.prototype.divide = function (v) {
            this.x /= v.x;
            this.y /= v.y;
            return this;
        };
        Vector2.prototype.divideScalar = function (scalar) {
            return this.multiplyScalar(1 / scalar);
        };
        Vector2.prototype.applyMatrix3 = function (m) {
            var x = this.x, y = this.y;
            var e = m.elements;
            this.x = e[0] * x + e[3] * y + e[6];
            this.y = e[1] * x + e[4] * y + e[7];
            return this;
        };
        Vector2.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y;
        };
        Vector2.prototype.cross = function (v) {
            return this.x * v.y - this.y * v.x;
        };
        Vector2.prototype.lengthSq = function () {
            return this.x * this.x + this.y * this.y;
        };
        Vector2.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        Vector2.prototype.manhattanLength = function () {
            return Math.abs(this.x) + Math.abs(this.y);
        };
        Vector2.prototype.normalize = function () {
            return this.divideScalar(this.length() || 1);
        };
        Vector2.prototype.angle = function () {
            var angle = Math.atan2(this.y, this.x);
            if (angle < 0)
                angle += 2 * Math.PI;
            return angle;
        };
        Vector2.prototype.distanceTo = function (v) {
            return Math.sqrt(this.distanceToSquared(v));
        };
        Vector2.prototype.distanceToSquared = function (v) {
            var dx = this.x - v.x, dy = this.y - v.y;
            return dx * dx + dy * dy;
        };
        Vector2.prototype.manhattanDistanceTo = function (v) {
            return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
        };
        Vector2.prototype.setLength = function (length) {
            return this.normalize().multiplyScalar(length);
        };
        Vector2.prototype.lerp = function (v, alpha) {
            this.x += (v.x - this.x) * alpha;
            this.y += (v.y - this.y) * alpha;
            return this;
        };
        Vector2.prototype.lerpVectors = function (v1, v2, alpha) {
            return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
        };
        Vector2.prototype.equals = function (v) {
            return ((v.x === this.x) && (v.y === this.y));
        };
        Vector2.prototype.fromArray = function (array, offset) {
            if (offset === void 0) { offset = 0; }
            this.x = array[offset];
            this.y = array[offset + 1];
            return this;
        };
        Vector2.prototype.toArray = function (array, offset) {
            if (array === void 0) { array = []; }
            if (offset === void 0) { offset = 0; }
            array[offset] = this.x;
            array[offset + 1] = this.y;
            return array;
        };
        return Vector2;
    }());
    function v2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        return new Vector2(x, y);
    }

    var HashObject = (function () {
        function HashObject() {
            this._instanceId = 0;
            this._instanceType = "HashObject";
            this._instanceId = HashObject._object_id++;
        }
        Object.defineProperty(HashObject.prototype, "instanceId", {
            get: function () {
                return this._instanceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HashObject.prototype, "instanceType", {
            get: function () {
                return this._instanceType;
            },
            enumerable: false,
            configurable: true
        });
        HashObject._object_id = 0;
        return HashObject;
    }());

    var EventEmit = (function (_super) {
        tslib.__extends(EventEmit, _super);
        function EventEmit() {
            var _this = _super.call(this) || this;
            _this._emit = {};
            return _this;
        }
        EventEmit.prototype.on = function (type, fn, context, once) {
            if (context === void 0) { context = this; }
            if (once === void 0) { once = false; }
            if (!this._emit)
                this._emit = {};
            var listeners = this._emit;
            if (!listeners[type])
                listeners[type] = [];
            for (var _i = 0, _a = listeners[type]; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.context == context && v.fn == fn) {
                    console.log('已经添加过该事件');
                    return v;
                }
            }
            listeners[type].unshift(new EE(fn, context, once));
        };
        EventEmit.prototype.hasEvent = function (type) {
            return (!this._emit) ? false : !!this._emit[type];
        };
        EventEmit.prototype.off = function (type, fn, context) {
            if (context === void 0) { context = this; }
            if (!this._emit)
                return;
            var listeners = this._emit;
            var listenerArray = listeners[type];
            if (listenerArray) {
                for (var i = listenerArray.length - 1; i >= 0; i--) {
                    if (listenerArray[i].fn == fn && listenerArray[i].context == context) {
                        listenerArray.splice(i, 1);
                    }
                }
            }
        };
        EventEmit.prototype.offAll = function () {
            if (!this._emit)
                return;
            for (var key in this._emit) {
                delete this._emit[key];
            }
        };
        EventEmit.prototype.offByType = function (type) {
            if (!this._emit || !this._emit[type])
                return;
            this._emit[type].length = 0;
        };
        EventEmit.prototype.emit = function (type, data) {
            if (!this._emit || !this._emit[type])
                return;
            var listeners = this._emit;
            var listenerArray = listeners[type];
            for (var i = listenerArray.length - 1; i >= 0; i--) {
                var ee = listenerArray[i];
                ee.fn.call(ee.context, data);
            }
        };
        EventEmit.prototype.destroy = function () {
        };
        return EventEmit;
    }(HashObject));
    var EE = (function () {
        function EE(fn, context, once) {
            if (once === void 0) { once = false; }
            this.fn = fn;
            this.context = context;
            this.once = once;
        }
        return EE;
    }());

    var SystemEvent = (function (_super) {
        tslib.__extends(SystemEvent, _super);
        function SystemEvent() {
            return _super.call(this) || this;
        }
        return SystemEvent;
    }(EventEmit));

    (function (EventType) {
        var TouchType;
        (function (TouchType) {
            TouchType["CLICK"] = "click";
            TouchType["TouchStart"] = "touchstart";
            TouchType["TouchMove"] = "touchmove";
            TouchType["TouchEnd"] = "touchend";
            TouchType["TouchCancel"] = "touchcancel";
        })(TouchType = EventType.TouchType || (EventType.TouchType = {}));
    })(exports.EventType || (exports.EventType = {}));
    var Touch = (function () {
        function Touch(x, y, id) {
            this._id = id;
            this.startPoint = v2(x, y);
            this.point = v2(x, y);
            this.prevPoint = v2(x, y);
        }
        Touch.prototype.setTouchInfo = function (x, y) {
            this.prevPoint.copy(this.point);
            this.point.set(x, y);
        };
        Object.defineProperty(Touch.prototype, "location", {
            get: function () {
                return this.point.clone();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Touch.prototype, "locationX", {
            get: function () {
                return this.point.x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Touch.prototype, "locationY", {
            get: function () {
                return this.point.y;
            },
            enumerable: false,
            configurable: true
        });
        Touch.prototype.getLocation = function () {
            return this.point.clone();
        };
        Touch.prototype.getLocationX = function () {
            return this.point.x;
        };
        Touch.prototype.getLocationY = function () {
            return this.point.y;
        };
        Object.defineProperty(Touch.prototype, "prevLocation", {
            get: function () {
                return this.prevPoint.clone();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Touch.prototype, "prevLocationX", {
            get: function () {
                return this.prevPoint.x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Touch.prototype, "prevLocationY", {
            get: function () {
                return this.prevPoint.y;
            },
            enumerable: false,
            configurable: true
        });
        Touch.prototype.getPrevLocation = function () {
            return this.prevPoint.clone();
        };
        Touch.prototype.getPrevLocationX = function () {
            return this.prevPoint.x;
        };
        Touch.prototype.getPrevLocationY = function () {
            return this.prevPoint.y;
        };
        Object.defineProperty(Touch.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        Touch.prototype.getID = function () {
            return this.id;
        };
        Object.defineProperty(Touch.prototype, "delta", {
            get: function () {
                return this.point.clone().sub(this.prevPoint);
            },
            enumerable: false,
            configurable: true
        });
        Touch.prototype.getDelta = function () {
            return this.delta;
        };
        return Touch;
    }());
    function touch(x, y, id) {
        return new Touch(x, y, id);
    }

    var dpi = window.devicePixelRatio;
    var winSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };

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
            var canvas = this.canvas;
            var dpi = window.devicePixelRatio;
            console.log('dpi', dpi);
            var w = winSize.width;
            var h = winSize.height;
            canvas.width = w * dpi;
            canvas.height = h * dpi;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            this.gl.viewport(0, 0, canvas.width, canvas.height);
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

    var _a;
    var TouchType = exports.EventType.TouchType;
    var TouchFun = (_a = {},
        _a[TouchType.CLICK] = 'onClick',
        _a[TouchType.TouchStart] = 'onTouchStart',
        _a[TouchType.TouchMove] = 'onTouchMove',
        _a[TouchType.TouchEnd] = 'onTouchEnd',
        _a[TouchType.TouchCancel] = 'onTouchCancel',
        _a);
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
            this.onClick = function (e) {
                console.log('onClick', e);
            };
            this.touches = {};
            this.onTouchEvent = function (e) {
                var type = e.type;
                var points = [e.changedTouches[0]];
                var body = document.body;
                var canvasRect = _this.renderer.canvas.getBoundingClientRect();
                var adjustX = canvasRect.left - (body.scrollLeft || window.scrollX || 0);
                var adjustY = canvasRect.top - (body.scrollTop || window.scrollY || 0);
                var updateTouch = (type == 'touchstart')
                    ? function (x, y, id) { return _this.touches[id] = new Touch(x, y, id); }
                    : function (x, y, id) { return _this.touches[id].setTouchInfo(x, y); };
                var onFunc = TouchFun[type];
                points.forEach(function (value) {
                    var x = (value.clientX - adjustX) * window.devicePixelRatio;
                    var y = (value.clientY - adjustY) * window.devicePixelRatio;
                    var id = "t" + value.identifier;
                    updateTouch(x, y, id);
                    _this.currentScene[onFunc](_this.touches[id]);
                });
            };
            this.onResize = function () {
                winSize.width = window.innerWidth;
                winSize.height = window.innerHeight;
                _this.renderer.onResize();
                _this.currentScene && _this.currentScene.onResize();
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
        App.prototype.initEvent = function () {
            window.addEventListener('resize', this.onResize);
            var canvas = this.renderer.canvas;
            canvas.addEventListener(TouchType.TouchStart, this.onTouchEvent);
            canvas.addEventListener(TouchType.TouchMove, this.onTouchEvent);
            canvas.addEventListener(TouchType.TouchEnd, this.onTouchEvent);
            canvas.addEventListener(TouchType.TouchCancel, this.onTouchEvent);
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

    var Object3D = (function (_super) {
        tslib.__extends(Object3D, _super);
        function Object3D() {
            var _this = _super.call(this) || this;
            _this.type = 'Object3D';
            _this.name = '';
            _this.parent = null;
            _this.children = [];
            _this.up = Vector3.UP;
            _this.position = Vector3.ZERO;
            _this.rotation = new Euler();
            _this.quat = new Quaternion();
            _this.scale = Vector3.ONE;
            _this.alpha = 1;
            _this.visible = true;
            _this.worldMatrixNeedsUpdate = false;
            _this.matrixAutoUpdate = true;
            _this.worldMatrix = new Matrix4();
            _this.matrix = new Matrix4();
            _this.onQuatChange = function () {
                _this.rotation.setFromQuaternion(_this.quat, undefined, false);
            };
            _this.onRotationChange = function () {
                _this.quat.setFromEuler(_this.rotation, false);
            };
            _this.quat.onChange(_this.onQuatChange);
            _this.rotation.onChange(_this.onRotationChange);
            return _this;
        }
        Object3D.prototype.updateMatrix = function () {
            this.matrix.compose(this.position, this.quat, this.scale);
            this.worldMatrixNeedsUpdate = true;
        };
        Object3D.prototype.updateMatrixWorld = function (force) {
            if (this.matrixAutoUpdate)
                this.updateMatrix();
            if (this.worldMatrixNeedsUpdate || force) {
                if (this.parent === null) {
                    this.worldMatrix.copy(this.matrix);
                }
                else {
                    this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.matrix);
                }
                this.worldMatrixNeedsUpdate = false;
                force = true;
            }
            var children = this.children;
            for (var i = 0, l = children.length; i < l; i++) {
                children[i].updateMatrixWorld(force);
            }
        };
        Object3D.prototype.updateWorldMatrix = function (updateParents, updateChildren) {
            var parent = this.parent;
            if (updateParents && parent !== null) {
                parent.updateWorldMatrix(true, false);
            }
            if (this.matrixAutoUpdate)
                this.updateMatrix();
            if (this.parent === null) {
                this.worldMatrix.copy(this.matrix);
            }
            else {
                this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.matrix);
            }
            if (updateChildren) {
                var children = this.children;
                for (var i = 0, l = children.length; i < l; i++) {
                    children[i].updateWorldMatrix(false, true);
                }
            }
        };
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
    }(EventEmit));

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
        Scene.prototype.onClick = function (t) {
        };
        Scene.prototype.onTouchStart = function (t) {
        };
        Scene.prototype.onTouchMove = function (t) {
        };
        Scene.prototype.onTouchEnd = function (t) {
        };
        Scene.prototype.onTouchCancel = function (t) {
        };
        return Scene;
    }(Object3D));

    exports.Box3 = Box3;
    exports.Color = Color;
    exports.Euler = Euler;
    exports.EventEmit = EventEmit;
    exports.HashObject = HashObject;
    exports.Matrix3 = Matrix3;
    exports.Matrix4 = Matrix4;
    exports.Object3D = Object3D;
    exports.Quaternion = Quaternion;
    exports.Ray = Ray;
    exports.Scene = Scene;
    exports.Shader = Shader;
    exports.Sphere = Sphere;
    exports.SystemEvent = SystemEvent;
    exports.Touch = Touch;
    exports.Vector2 = Vector2;
    exports.Vector3 = Vector3;
    exports.WebGLRenderer = WebGLRenderer;
    exports._Math = _Math;
    exports.app = app;
    exports.color = color;
    exports.compileProgram = compileProgram;
    exports.director = director;
    exports.dpi = dpi;
    exports.euler = euler;
    exports.mat3 = mat3;
    exports.mat4 = mat4;
    exports.quat = quat;
    exports.ray = ray;
    exports.setPrecision = setPrecision;
    exports.sphere = sphere;
    exports.touch = touch;
    exports.v2 = v2;
    exports.v3 = v3;
    exports.winSize = winSize;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hycv.js.map
