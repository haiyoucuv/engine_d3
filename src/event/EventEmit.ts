/*
 * Created by 还有醋v on 2020/9/15.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { HashObject } from "../base/HashObject";

export class EventEmit extends HashObject {

    private _emit: { [key: string]: EE[] } = {};


    constructor() {
        super();
    }

    /**
     * 添加监听
     * @param {string | number} type
     * @param {Function} fn
     * @param context
     * @param once
     * @returns {EE}
     */
    public on(type: string | number, fn: Function, context: any = this, once: boolean = false) {

        if (!this._emit) this._emit = {};

        const listeners = this._emit;

        if (!listeners[type]) listeners[type] = [];

        for (let v of listeners[type]) {
            if (v.context == context && v.fn == fn) {
                console.log('已经添加过该事件');
                return v;
            }
        }

        listeners[type].unshift(new EE(fn, context, once));

    }

    /**
     * 是否有此类型监听
     * @param {string | number} type
     * @returns {boolean}
     */
    public hasEvent(type: string | number) {
        return (!this._emit) ? false : !!this._emit[type];
    }

    /**
     * 移除监听
     * @param {string | number} type
     * @param {Function} fn
     * @param context
     */
    public off(type: string | number, fn: Function, context: any = this) {

        if (!this._emit) return;

        const listeners = this._emit;
        const listenerArray = listeners[type];

        if (listenerArray) {
            for (let i = listenerArray.length - 1; i >= 0; i--) {
                if (listenerArray[i].fn == fn && listenerArray[i].context == context) {
                    listenerArray.splice(i, 1);
                }
            }
        }
    }

    /**
     * 移除所有监听
     */
    public offAll() {
        if (!this._emit) return;
        for (let key in this._emit) {
            delete this._emit[key];
        }
    }

    /**
     * 移除某一类型的所有事件
     * @param {string | number} type
     */
    public offByType(type: string | number) {
        if (!this._emit || !this._emit[type]) return;
        this._emit[type].length = 0;
    }

    /**
     * 触发事件
     * @param type
     * @param data
     */
    public emit(type: string | number, data?: any) {

        if (!this._emit || !this._emit[type]) return;

        const listeners = this._emit;
        const listenerArray = listeners[type];

        for (let i = listenerArray.length - 1; i >= 0; i--) {
            const ee = listenerArray[i];
            ee.fn.call(ee.context, data);
        }
    }

    public destroy() {

    }
}

/**
 * 为了实现带入this和once
 * 暂不做回收处理，因为存在引用fn,context.内存销毁可能出问题
 * 如果非要作回收，回收时必须将fn,context置null；这样还有必要回收？
 */
class EE {
    fn: Function;
    context: any;
    once: boolean;

    constructor(fn: Function, context: any, once: boolean = false) {
        this.fn = fn;
        this.context = context;
        this.once = once;
    }
}

