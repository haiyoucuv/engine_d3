
/**
 * 加载shader
 * @param gl
 * @param type
 * @param source
 * @returns {WebGLShader|null}
 */
function loadShader(gl, type, source) {
    // 创建一个shader
    const shader = gl.createShader(type);
    if (shader == null) {
        console.warn('无法创建shader');
        return null;
    }

    gl.shaderSource(shader, source);    // 添加指定shader的代码

    gl.compileShader(shader);    // 编译shader

    // 获取编译状态
    const complied = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!complied) {
        // 如果没有编译成功则拿到报错的信息
        const error = gl.getShaderInfoLog(shader);

        console.error(type, error);
        gl.deleteShader(shader);

        return null;

    }

    return shader;

}

/**
 * 创建一个gl程序
 * @param gl
 * @param vertexShaderSource
 * @param fragmentShaderSource
 * @returns {null|WebGLProgram}
 */
function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
    // 初始化shader
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) {
        return null;
    }

    // 创建一个gl程序
    const program = gl.createProgram();

    // 附加shader
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // link gl程序
    gl.linkProgram(program);

    // 检查link状态
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        const error = gl.getProgramInfoLog(program);
        console.error(error);
        // 删除
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }
    return program;
}
