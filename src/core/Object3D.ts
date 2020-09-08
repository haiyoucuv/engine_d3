/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { EventDispatcher } from "../event/EventDispatcher";
import { Matrix4 } from "../math/Matrix4";

export class Object3D extends EventDispatcher {

    /**
     * 世界矩阵
     */
    _worldMatrix: Matrix4 = new Matrix4();
    /**
     * 本地矩阵
     */
    _localMatrix: Matrix4 = new Matrix4();

    parent: Object3D;

    // updateWorldMatrix(updateParents, updateChildren) {
    //
    //     var parent = this.parent;
    //
    //     if (updateParents === true && parent !== null) {
    //
    //         parent.updateWorldMatrix(true, false);
    //
    //     }
    //
    //     if (this.matrixAutoUpdate) this.updateMatrix();
    //
    //     if (this.parent === null) {
    //
    //         this.matrixWorld.copy(this.matrix);
    //
    //     } else {
    //
    //         this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
    //
    //     }
    //
    //     // update children
    //
    //     if (updateChildren === true) {
    //
    //         var children = this.children;
    //
    //         for (var i = 0, l = children.length; i < l; i++) {
    //
    //             children[i].updateWorldMatrix(false, true);
    //
    //         }
    //
    //     }
    //
    // }

    constructor() {
        super();
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

