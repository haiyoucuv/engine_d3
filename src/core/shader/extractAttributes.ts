
/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { Attribute } from "./Attribute";

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
        const newAttribute = Attribute.create(gl, program, attribData);
        newAttribute.init();
        // console.log(attribData);
        // console.log(newAttribute);
        attributes[attribData.name] = newAttribute
    }

    return attributes;
}
