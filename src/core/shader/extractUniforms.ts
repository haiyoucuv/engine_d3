import { mapType } from './mapType';
import { defaultValue } from './defaultValue';

/**
 * Extracts the uniforms 获取uniforms属性
 * @class
 * @memberof glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the uniforms from
 * @return uniforms {Object} ，所有uniform的集合
 * 每个uniform的格式
 * {
 *  type: uniform的类型，'float','vec2'等等
 *	size: uniformData.size,决定uniform赋值用什么方法
 *	location: WebGLUniformLocation,uniform变量的存储地址
 *	value: 默认值
 * }
 */
export function extractUniforms(gl: WebGLRenderingContext, program: WebGLProgram) {
    const uniforms = {};

    const totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (let i = 0; i < totalUniforms; i++) {
        const uniformData: WebGLActiveInfo = gl.getActiveUniform(program, i);
        const name = uniformData.name.replace(/\[.*?\]/, "");
        const type = mapType(gl, uniformData.type);

        uniforms[name] = {
            type: type,
            size: uniformData.size,
            location: gl.getUniformLocation(program, name),
            value: defaultValue(type, uniformData.size)
        };
    }

    return uniforms;
}
