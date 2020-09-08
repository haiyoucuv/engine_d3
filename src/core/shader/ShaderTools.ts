/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

/**
 * 加载shader
 * @param gl
 * @param type
 * @param source
 * @returns {WebGLShader|null}
 */
function loadShader(gl: WebGLRenderingContext, type: GLenum, source: string) {
    // 创建一个shader
    const shader = gl.createShader(type);
    if (shader == null) {
        throw '无法创建shader';
    }

    gl.shaderSource(shader, source);    // 添加指定shader的代码
    gl.compileShader(shader);    // 编译shader

    // 获取编译状态
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;

}

/**
 * 创建一个gl程序
 * @param gl
 * @param vertexSrc
 * @param fragmentSrc
 * @returns {null|WebGLProgram}
 */
export function compileProgram(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, attributeLocations?) {
    // 初始化shader
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexSrc);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

    if (!vertexShader || !fragmentShader) return;

    // 创建一个gl程序
    const program = gl.createProgram();

    // 附加shader
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // optionally, set the attributes manually for the program rather than letting WebGL decide..
    // （可选）手动为程序设置属性，而不是让WebGL决定。
    if (attributeLocations) {
        for (let i in attributeLocations) {
            gl.bindAttribLocation(program, attributeLocations[i], i);
        }
    }

    // link gl程序
    gl.linkProgram(program);

    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    // 检查link状态
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        console.error('gl.getError()', gl.getError());
        throw gl.getProgramInfoLog(program);
    }

    return program;
}


/**
 * 给shader source设置precision
 * Sets the float precision on the shader. If the precision is already present this function will do nothing
 * @param {string} src       the shader source
 * @param {string} precision The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 *
 * @return {string} modified shader source
 */
export function setPrecision(src: string, precision: string): string {
    return (src.substring(0, 9) !== 'precision')
        ? 'precision ' + precision + ' float;\n' + src
        : src;
}

