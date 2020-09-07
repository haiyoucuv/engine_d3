
/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { mapType } from './mapType';
import { mapSize } from './mapSize';

/**
 * Extracts the attributes获取attributes属性
 * @class
 * @memberof glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the attributes from
 * @return attributes {Object}
 */
export function extractAttributes(gl: WebGLRenderingContext, program: WebGLProgram) {
    const attributes = {};

    //所有激活的ATTRIBUTES
    const totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (let i = 0; i < totalAttributes; i++) {
        const attribData = gl.getActiveAttrib(program, i);
        const type = mapType(gl, attribData.type);

        attributes[attribData.name] = {
            type: type,
            size: mapSize(type),
            location: gl.getAttribLocation(program, attribData.name),
            //TODO - make an attribute object
            pointer: function (type = gl.FLOAT, normalized = false, stride = 0, start = 0) {
                // console.log(this.location)
                gl.enableVertexAttribArray(this.location);
                gl.vertexAttribPointer(this.location, this.size, type, normalized, stride, start);
            }
        };
    }

    return attributes;
}
