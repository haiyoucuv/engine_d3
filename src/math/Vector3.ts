/*
 * Created by 还有醋v on 2020/9/4.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

export class Vector3 {

    constructor(
        public x: number = 0,
        public y: number = 0,
        public z: number = 0
    ) {

    }

    public get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public static clone(v): Vector3 {
        return new Vector3().copy(v);
    }

    public set(x: number = 0, y: number = 0, z: number = 0): Vector3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    public copy(v: Vector3): Vector3 {
        return this.set(v.x, v.y, v.z);
    }

    public add(value: Vector3 | number): Vector3 {
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
    }

    public adds(...values: (Vector3 | number)[]): Vector3 {
        values.forEach(value => {
            this.add(value);
        });
        return this;
    }

    public addScaled(value: Vector3 | number, scale: number): Vector3 {
        this.sub(value).scale(scale);
        return this;
    }

    public sub(value: Vector3 | number): Vector3 {
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
    }

    public subs(...values: (Vector3 | number)[]): Vector3 {
        values.forEach(value => {
            this.sub(value);
        });
        return this;
    }

    public scale(value: number): Vector3 {
        this.x *= value;
        this.y *= value;
        this.z *= value;
        return this;
    }

    public scales(...values: number[]): Vector3 {
        values.forEach(value => {
            this.scale(value);
        });
        return this;
    }

    public divide(value: Vector3 | number): Vector3 {
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
    }

    public divides(...values: (Vector3 | number)[]): Vector3 {
        values.forEach(value => {
            this.divide(value);
        });
        return this;
    }

    public dot(v: Vector3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    public crossVector(v: Vector3): Vector3 {
        this.x = this.y * v.z - this.z * v.y;
        this.y = this.z * v.x - this.x * v.z;
        this.z = this.x * v.y - this.y * v.x;
        return this;
    }

    public cross(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3().copy(v1).crossVector(v2);
    }

    public normalize(): Vector3 {
        return this.scale(1 / (this.length || 1));
    }

}
