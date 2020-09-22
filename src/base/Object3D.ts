/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */


import { EventEmit } from "../event";
import { Euler, Matrix4, Quaternion, Vector3 } from "../math";
import { WebGLRenderer } from "../core";

export class Object3D extends EventEmit {

    // public static defaultUp = Vector3.UP;

    public isObject3D: true;
    public type = 'Object3D';
    public name = '';

    public parent: Object3D = null;
    public children: Object3D[] = [];

    public up = Vector3.UP;
    public position = Vector3.ZERO;
    public rotation = new Euler();
    public quat = new Quaternion();
    public scale = Vector3.ONE;

    public alpha = 1;   // alpha

    public visible = true;  // 显示或者隐藏

    private worldMatrixNeedsUpdate = false; // 世界矩阵是否需要更新
    private matrixAutoUpdate = true;    // 自动跟新本地矩阵

    /**
     * 世界矩阵
     */
    worldMatrix: Matrix4 = new Matrix4();

    /**
     * 本地矩阵
     */
    matrix: Matrix4 = new Matrix4();

    constructor() {
        super();

        this.quat.onChange(() => {
            this.rotation.setFromQuaternion(this.quat, undefined, false);
        });

        this.rotation.onChange(() => {
            this.quat.setFromEuler(this.rotation, false);
        });

    }

    public add(obj: Object3D) {
        if (obj.parent == this) return obj;

        if (obj.parent) obj.parent.remove(obj);

        this.children.push(obj);

        return obj;
    }

    public remove(obj: Object3D) {
        if (!obj.parent || obj.parent != this) return;
        const children = this.children;
        return children.splice(children.indexOf(obj), 1);
    }

    /**
     * 跟新本地矩阵
     */
    public updateMatrix() {

        this.matrix.compose(this.position, this.quat, this.scale);

        this.worldMatrixNeedsUpdate = true;

    }

    public applyMatrix(matrix: Matrix4) {

        if (this.matrixAutoUpdate) this.updateMatrix();

        this.matrix.premultiply(matrix);

        this.matrix.decompose(this.position, this.quat, this.scale);

    }

    /**
     * 向下更新worldMatrix
     */
    updateMatrixWorld(force = false) {

        if (this.matrixAutoUpdate) this.updateMatrix();

        if (this.worldMatrixNeedsUpdate || force) {

            if (this.parent === null) {

                this.worldMatrix.copy(this.matrix);

            } else {

                this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.matrix);

            }

            this.worldMatrixNeedsUpdate = false;

            force = true;

        }

        // update children

        const children = this.children;

        for (let i = 0, l = children.length; i < l; i++) {

            children[i].updateMatrixWorld(force);

        }

    }

    /**
     * 更新worldMatrix
     * @param updateParents
     * @param updateChildren
     */
    public updateWorldMatrix(updateParents, updateChildren) {

        const parent = this.parent;

        if (updateParents && parent !== null) {

            parent.updateWorldMatrix(true, false);

        }

        if (this.matrixAutoUpdate) this.updateMatrix();

        if (this.parent === null) {

            this.worldMatrix.copy(this.matrix);

        } else {

            this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.matrix);

        }

        // update children

        if (updateChildren) {

            const children = this.children;

            for (let i = 0, l = children.length; i < l; i++) {

                children[i].updateWorldMatrix(false, true);

            }

        }

    }

    public init() {

    }

    public update(dt) {

    }

    public render(renderer: WebGLRenderer) {
        this._render(renderer);

        const children = this.children;
        children.forEach((child) => {
            child.visible && child.render(renderer);
        });
    }

    // 子类重写
    protected _render(renderer) {

    }

    public destroy() {

    }

    public onResize() {

    }
}

