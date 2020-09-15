/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { EventEmit } from "../event/EventEmit";
import { Matrix4 } from "../math/Matrix4";
import { Vector3 } from "../math/Vector3";
import { Euler } from "../math/Euler";
import { Quaternion } from "../math/Quaternion";

export class Object3D extends EventEmit {

    // public static defaultUp = Vector3.UP;

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

        this.quat.onChange(this.onQuatChange);
        this.rotation.onChange(this.onRotationChange);
    }

    private onQuatChange = () => {
        this.rotation.setFromQuaternion(this.quat, undefined, false);
    }

    private onRotationChange = () => {
        this.quat.setFromEuler(this.rotation, false);
    }


    /**
     * 跟新本地矩阵
     */
    public updateMatrix() {

        this.matrix.compose(this.position, this.quat, this.scale);

        this.worldMatrixNeedsUpdate = true;

    }

    /**
     * 向下更新worldMatrix
     */
    updateMatrixWorld(force) {

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

        var children = this.children;

        for (var i = 0, l = children.length; i < l; i++) {

            children[i].updateMatrixWorld(force);

        }

    }

    /**
     * 更新worldMatrix
     * @param updateParents
     * @param updateChildren
     */
    public updateWorldMatrix(updateParents, updateChildren) {

        var parent = this.parent;

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

            var children = this.children;

            for (var i = 0, l = children.length; i < l; i++) {

                children[i].updateWorldMatrix(false, true);

            }

        }

    }

    public init() {

    }

    public update(dt) {

    }

    public render() {
        this._render();


    }

    protected _render() {

    }

    public destroy() {

    }

    public onResize() {

    }
}

