/*
 * Created by 还有醋v on 2020/9/22.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { HashObject } from "./HashObject";

export class Geometry extends HashObject {

    protected _instanceType = "Geometry";

    public indices: Uint8Array;

    public indexBuffer: WebGLBuffer;

    constructor(
        public vertices: Float32Array,
        indices?: Uint8Array,
        public normals: Float32Array = new Float32Array(vertices.length),
        public uvs: Float32Array = new Float32Array(vertices.length / 3 * 2),
        public colors: Float32Array = new Float32Array(vertices.length)
            .map(() => {
                return 1;
            }),//不传就全是白色,
    ) {
        super();

        this.indices = indices ? new Uint8Array(indices) : null;

    }

    public destroy(): void {
    }
}
