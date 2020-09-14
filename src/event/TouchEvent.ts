/*
 * Created by 还有醋v on 2020/9/9.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { v2, Vector2 } from "../math/Vector2";

export namespace EventType {
    export enum TouchType {
        CLICK = 'click',
        TouchStart = 'touchstart',
        TouchMove = 'touchmove',
        TouchEnd = 'touchend',
        TouchCancel = 'touchcancel',
    }
}

export class Touch {

    private _id;
    private startPoint: Vector2;
    private point: Vector2;
    private prevPoint: Vector2;

    constructor(x: number, y: number, id) {
        this._id = id;
        this.startPoint = v2(x, y);
        this.point = v2(x, y);
        this.prevPoint = v2(x, y);
    }

    public setTouchInfo(x, y) {
        this.prevPoint.copy(this.point);
        this.point.set(x, y);
    }

    public get location(): Vector2 {
        return this.point.clone();
    }

    public get locationX(): number {
        return this.point.x;
    }

    public get locationY(): number {
        return this.point.y;
    }

    public getLocation(): Vector2 {
        return this.point.clone();
    }

    public getLocationX(): number {
        return this.point.x;
    }

    public getLocationY(): number {
        return this.point.y;
    }

    public get prevLocation(): Vector2 {
        return this.prevPoint.clone();
    }

    public get prevLocationX(): number {
        return this.prevPoint.x;
    }

    public get prevLocationY(): number {
        return this.prevPoint.y;
    }

    public getPrevLocation(): Vector2 {
        return this.prevPoint.clone();
    }

    public getPrevLocationX(): number {
        return this.prevPoint.x;
    }

    public getPrevLocationY(): number {
        return this.prevPoint.y;
    }

    private get id() {
        return this._id;
    }

    public getID() {
        return this.id;
    }

    public get delta(): Vector2 {
        return this.point.clone().sub(this.prevPoint);
    }

    public getDelta() {
        return this.delta;
    }

}


export function touch(x: number, y: number, id): Touch {
    return new Touch(x, y, id);
}
