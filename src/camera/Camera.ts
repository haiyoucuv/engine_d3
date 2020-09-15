/*
 * Created by 还有醋v on 2020/9/8.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */


import { Object3D } from "../base/Object3D";

export class Camera extends Object3D {

    public worldMatrixInverse
    public matrixWorldInverse;
    public projectionMatrix;
    public projectionMatrixInverse;

    constructor() {
        super();
    }
}
