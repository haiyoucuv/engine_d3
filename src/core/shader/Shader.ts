/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { compileProgram, setPrecision } from "./ShaderTools";
import { generateUniformAccessObject } from "./generateUniformAccessObject";
import { extractAttributes } from "./extractAttributes";
import { extractUniforms } from "./extractUniforms";

export class Shader {

    private program: WebGLProgram;

    /**
     *  The attributes of the shader as an object containing the following properties
     * {
     * 	type,
     * 	size,
     * 	location,
     * 	pointer
     * }
     * @member {Object}
     */
    attributes: any;

    uniformData: any;
    /**
     * The uniforms of the shader as an object containing the following properties
     * {
     * 	gl,
     * 	data
     * }
     * @member {Object}
     */
    uniforms: any;

    constructor(
        private gl: WebGLRenderingContext,
        vertexSrc: string,
        fragmentSrc: string,
        precision?: string,
        attributeLocations?
    ) {

        if (precision) {
            setPrecision(vertexSrc, precision);
            setPrecision(fragmentSrc, precision);
        }

        this.program = compileProgram(gl, vertexSrc, fragmentSrc);

        this.attributes = extractAttributes(gl, this.program);

        this.uniformData = extractUniforms(gl, this.program);

        this.uniforms = generateUniformAccessObject(gl, this.uniformData);
    }

    public use() {
        this.gl.useProgram(this.program);
        return this;
    }

    public destroy() {

        this.attributes = null;
        this.uniformData = null;
        this.uniforms = null;

        this.gl.deleteProgram(this.program);
    }

}
