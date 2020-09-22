/*
 * Created by 还有醋v on 2020/9/22.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { Object3D } from "./Object3D";
import { WebGLRenderer } from "../core";
import { Geometry } from "./Geometry";

export class Mesh extends Object3D {

    constructor(
        public geometry: Geometry,
    ) {
        super();

    }

    protected _render(renderer: WebGLRenderer) {
        renderer.addRenderMesh(this);
    }
}
