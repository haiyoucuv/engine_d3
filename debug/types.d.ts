
declare module hycv{
export  function clamp(value: number, min: number, max: number): number;

export  class Quaternion {
    private _x;
    private _y;
    private _z;
    private _w;
    constructor(x?: number, y?: number, z?: number, w?: number);
    static slerp(qa: any, qb: any, qm: any, t: any): any;
    static slerpFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any, t: any): void;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    set(x: any, y: any, z: any, w: any): this;
    clone(): Quaternion;
    copy(quaternion: any): this;
    setFromEuler(euler: any, update?: any): this;
    setFromAxisAngle(axis: any, angle: any): this;
    setFromRotationMatrix(m: any): this;
    setFromUnitVectors: (vFrom: any, vTo: any) => any;
    angleTo(q: any): number;
    rotateTowards(q: any, step: any): this;
    inverse(): this;
    conjugate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    normalize(): this;
    multiply(q: any, p: any): this;
    premultiply(q: any): this;
    multiplyQuaternions(a: any, b: any): this;
    slerp(qb: any, t: any): this;
    equals(quaternion: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    onChange(callback: any): this;
    private onChangeCallback;
}

export  function quat(x?: number, y?: number, z?: number, w?: number): Quaternion;

export  class Matrix4 {
    elements: Float32Array;
    readonly isMatrix4: true;
    constructor(m00?: number | Float32Array | number[], m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number);
    /**
     * 初始化本矩阵
     */
    setIdentity(): this;
    set(n11: any, n12: any, n13: any, n14: any, n21: any, n22: any, n23: any, n24: any, n31: any, n32: any, n33: any, n34: any, n41: any, n42: any, n43: any, n44: any): this;
    copy(src: Matrix4): this;
    clone(): Matrix4;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    /**
     * Multiply the matrix from the right.
     * @param other The multiply matrix
     * @return this
     */
    concat(other: Matrix4): this;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    /**
     * Multiply the three-dimensional vector.
     * @param pos  The multiply vector
     * @return The result of multiplication(Float32Array)
     */
    multiplyVector3(pos: Vector3): Vector3;
    /**
     * Multiply the four-dimensional vector.
     * @param pos  The multiply vector
     * @return The result of multiplication(Float32Array)
     */
    /**
     * Transpose the matrix.转置
     * @return this
     */
    transpose(): this;
    /**
     * Calculate the inverse matrix of specified matrix, and set to this.将一矩阵的逆赋给自己
     * @param other The source matrix
     * @return this
     */
    setInverseOf(other: Matrix4): this;
    /**
     * Calculate the inverse matrix of this, and set to this.
     * @return this
     */
    invert(): this;
    /**
     * Set the orthographic projection matrix.正交投影矩阵
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @return this
     */
    setOrtho(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
    /**
     * Multiply the orthographic projection matrix from the right.
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @return this
     */
    ortho(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
    /**
     * Set the perspective projection matrix.
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    setFrustum(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
    /**
     * Multiply the perspective projection matrix from the right.
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    frustum(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
    /**
     * Set the perspective projection matrix by fovy and aspect.
     * @param fovy The angle between the upper and lower sides of the frustum.
     * @param aspect The aspect ratio of the frustum. (width/height)
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    setPerspective(fovy: number, aspect: number, near: number, far: number): this;
    makePerspective(left: any, right: any, top: any, bottom: any, near: any, far: any): this;
    /**
     * Multiply the perspective projection matrix from the right.
     * @param fovy The angle between the upper and lower sides of the frustum.
     * @param aspect The aspect ratio of the frustum. (width/height)
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    perspective(fovy: any, aspect: any, near: any, far: any): this;
    /**
     * Set the matrix for scaling.
     * @param x The scale factor along the X axis
     * @param y The scale factor along the Y axis
     * @param z The scale factor along the Z axis
     * @return this
     */
    setScale(x: any, y: any, z: any): this;
    /**
     * Multiply the matrix for scaling from the right.
     * @param x The scale factor along the X axis
     * @param y The scale factor along the Y axis
     * @param z The scale factor along the Z axis
     * @return this
     */
    scale(x: any, y: any, z: any): this;
    getMaxScaleOnAxis(): number;
    /**
     * Set the matrix for translation.
     * @param x The X value of a translation.
     * @param y The Y value of a translation.
     * @param z The Z value of a translation.
     * @return this
     */
    setTranslate(x: any, y: any, z: any): this;
    /**
     * Multiply the matrix for translation from the right.
     * @param x The X value of a translation.
     * @param y The Y value of a translation.
     * @param z The Z value of a translation.
     * @return this
     */
    translate(x: any, y: any, z: any): this;
    /**
     * Set the matrix for rotation.
     * The vector of rotation axis may not be normalized.
     * @param angle The angle of rotation (degrees)
     * @param x The X coordinate of vector of rotation axis.
     * @param y The Y coordinate of vector of rotation axis.
     * @param z The Z coordinate of vector of rotation axis.
     * @return this
     */
    setRotate(angle: any, x: any, y: any, z: any): this;
    /**
     * Multiply the matrix for rotation from the right.
     * The vector of rotation axis may not be normalized.
     * @param angle The angle of rotation (degrees)
     * @param x The X coordinate of vector of rotation axis.
     * @param y The Y coordinate of vector of rotation axis.
     * @param z The Z coordinate of vector of rotation axis.
     * @return this
     */
    rotate(angle: any, x: any, y: any, z: any): this;
    /**
     * Set the viewing matrix.
     * @return this
     * @param eye
     * @param center
     * @param up
     */
    setLookAt(eye: Vector3, center: Vector3, up: Vector3): this;
    lookAt(eye: Vector3, target: Vector3, up: Vector3): this;
    /**
     * Multiply the matrix for project vertex to plane from the right.
     * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
     * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
     * @return this
     */
    dropShadow(plane: any, light: any): this;
    /**
     * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
     * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
     * @param normY
     * @param normZ
     * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
     * @param planeY
     * @param planeZ
     * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
     * @param lightY
     * @param lightZ
     * @return this
     */
    dropShadowDirectionally(normX: any, normY: any, normZ: any, planeX: any, planeY: any, planeZ: any, lightX: any, lightY: any, lightZ: any): this;
    makeRotationFromQuaternion(q: any): this;
    compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
    decompose(position: any, quaternion: any, scale: any): this;
    determinant(): number;
    extractRotation(m: any): this;
}

export  function mat4(m00?: number | Float32Array | number[], m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number): Matrix4;

export  class EventDispatcher {
    private _listeners;
    constructor();
    addEventListener(type: string, listener: any): void;
    hasEventListener(type: string, listener: any): boolean;
    removeEventListener(type: string, listener: any): void;
    dispatchEvent(event: any): void;
}

export  class Object3D extends EventDispatcher {
    /**
     * 世界矩阵
     */
    _worldMatrix: Matrix4;
    /**
     * 本地矩阵
     */
    _localMatrix: Matrix4;
    parent: Object3D;
    constructor();
    init(): void;
    update(dt: any): void;
    render(): void;
    protected _render(): void;
    destroy(): void;
    onResize(): void;
}

export  class Camera extends Object3D {
    worldMatrixInverse: any;
    matrixWorldInverse: any;
    projectionMatrix: any;
    projectionMatrixInverse: any;
    constructor();
}

export  class Matrix3 {
    elements: Float32Array;
    readonly isMatrix3: true;
    constructor(m00?: number | Float32Array | number[], m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number);
    set(n11: any, n12: any, n13: any, n21: any, n22: any, n23: any, n31: any, n32: any, n33: any): this;
    identity(): this;
    clone(): Matrix3;
    copy(m: any): this;
    setFromMatrix4(m: any): this;
    applyToBufferAttribute(attribute: any): any;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    multiplyScalar(s: any): this;
    determinant(): number;
    getInverse(matrix: any, throwOnDegenerate?: boolean): this;
    transpose(): this;
    getNormalMatrix(matrix4: any): this;
    transposeIntoArray(r: any): this;
    setUvTransform(tx: any, ty: any, sx: any, sy: any, rotation: any, cx: any, cy: any): void;
    scale(sx: any, sy: any): this;
    rotate(theta: any): this;
    translate(tx: any, ty: any): this;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
}

export  function mat3(m00?: number | Float32Array | number[], m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number): Matrix3;

export  class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): this;
    copy(v: Vector3): this;
    clone(): Vector3;
    add(v: Vector3): this;
    addScalar(s: number): this;
    addVectors(a: Vector3, b: Vector3): this;
    addScaledVector(v: Vector3, s: number): this;
    sub(v: Vector3): this;
    subScalar(s: any): this;
    subVectors(a: Vector3, b: Vector3): this;
    multiplyScalar(scalar: number): this;
    multiplyVectors(a: Vector3, b: Vector3): this;
    divide(v: Vector3): this;
    divideScalar(scalar: number): this;
    cross(v: Vector3): this;
    crossVectors(a: Vector3, b: Vector3): this;
    dot(v: Vector3): number;
    /**
     * 长度
     */
    length(): number;
    lengthSq(): number;
    /**
     * 标准化，长度为1
     */
    normalize(): this;
    distanceTo(v: Vector3): number;
    distanceToSquared(v: Vector3): number;
    min(v: Vector3): this;
    max(v: Vector3): this;
    clamp(min: Vector3, max: Vector3): this;
    clampScalar(minVal: number, maxVal: number): this;
    clampLength(min: number, max: number): this;
    /**
     * applyMatrix4
     * @param m
     */
    applyMatrix4(m: Matrix4): this;
    /**
     * applyMatrix3
     * @param m
     */
    applyMatrix3(m: Matrix3): this;
    /**
     * 从矩阵获得位置
     * @param m
     */
    setFromMatrixPosition(m: Matrix4): this;
    /**
     * 从矩阵获得缩放值
     * @param m
     */
    setFromMatrixScale(m: Matrix4): this;
    setFromMatrixColumn(m: Matrix4, index: number): this;
    transformDirection(m: Matrix4): this;
    /**
     * 转换成屏幕坐标，范围-1到1，可根据stage转换成stage上坐标，或者canvas坐标
     * @param camera
     */
    project(camera: Camera): this;
    unproject(camera: Camera): this;
    equals(v: Vector3): boolean;
    fromArray(array: number[] | Float32Array, offset?: number): this;
    toArray(array?: number[], offset?: number): number[];
}

export  function v3(x?: number, y?: number, z?: number): Vector3;

export  class Sphere {
    center: Vector3;
    radius: number;
    constructor(center?: Vector3, radius?: number);
    set(center: Vector3, radius: number): this;
    setFromPoints(points: Vector3[], optionalCenter?: Vector3): this;
    clone(): Sphere;
    copy(sphere: Sphere): this;
    empty(): boolean;
    containsPoint(point: Vector3): boolean;
    distanceToPoint(point: Vector3): number;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Sphere): boolean;
    clampPoint(point: Vector3, target?: Vector3): Vector3;
    getBoundingBox(target?: Box3): Box3;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(sphere: Sphere): boolean;
}

export  function sphere(center?: Vector3, radius?: number): Sphere;

export  class Box3 {
    min: Vector3;
    max: Vector3;
    constructor(min?: Vector3, max?: Vector3);
    set(min: Vector3, max: Vector3): this;
    clone(): Box3;
    copy(box: Box3): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    /**
     * 获取中心点
     * @param out
     */
    getCenter(out?: Vector3): Vector3;
    /**
     * 获取对角线向量
     * @param out
     */
    getSize(out?: Vector3): Vector3;
    /**
     *
     * @param array 一般是顶点一维数组
     */
    setFromArray(array: number[] | Float32Array): this;
    setFromCenterAndSize(center: Vector3, size: Vector3): this;
    setFromPoints(points: Vector3[]): this;
    /**
     * 为了包含该点坐标
     * @param point
     */
    expandByPoint(point: Vector3): this;
    /**
     * 为了xyz分别根据vector进行扩展
     * @param vector
     */
    expandByVector(vector: Vector3): this;
    expandByScalar(scalar: number): this;
    containsPoint(point: Vector3): boolean;
    containsBox(box: Box3): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    clampPoint(point: Vector3, out?: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    getBoundingSphere(out?: Sphere): Sphere;
    intersect(box: Box3): this;
    union(box: Box3): this;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(box: Box3): boolean;
}

export  class _Math {
    static DEG2RAD: number;
    static RAD2DEG: number;
    constructor();
    static generateUUID(): string;
    static clamp(value: any, min: any, max: any): number;
    static euclideanModulo(n: any, m: any): number;
    static mapLinear(x: any, a1: any, a2: any, b1: any, b2: any): any;
    static lerp(x: any, y: any, t: any): number;
    static smoothstep(x: any, min: any, max: any): number;
    static smootherstep(x: any, min: any, max: any): number;
    static randInt(low: any, high: any): any;
    staticrandFloat(low: any, high: any): any;
    static randFloatSpread(range: any): number;
    static degToRad(degrees: any): number;
    static radToDeg(radians: any): number;
    static isPowerOfTwo(value: any): boolean;
    static ceilPowerOfTwo(value: any): number;
    static floorPowerOfTwo(value: any): number;
}

export  class Color {
    static NAMES: {
        aliceblue: number;
        antiquewhite: number;
        aqua: number;
        aquamarine: number;
        azure: number;
        beige: number;
        bisque: number;
        black: number;
        blanchedalmond: number;
        blue: number;
        blueviolet: number;
        brown: number;
        burlywood: number;
        cadetblue: number;
        chartreuse: number;
        chocolate: number;
        coral: number;
        cornflowerblue: number;
        cornsilk: number;
        crimson: number;
        cyan: number;
        darkblue: number;
        darkcyan: number;
        darkgoldenrod: number;
        darkgray: number;
        darkgreen: number;
        darkgrey: number;
        darkkhaki: number;
        darkmagenta: number;
        darkolivegreen: number;
        darkorange: number;
        darkorchid: number;
        darkred: number;
        darksalmon: number;
        darkseagreen: number;
        darkslateblue: number;
        darkslategray: number;
        darkslategrey: number;
        darkturquoise: number;
        darkviolet: number;
        deeppink: number;
        deepskyblue: number;
        dimgray: number;
        dimgrey: number;
        dodgerblue: number;
        firebrick: number;
        floralwhite: number;
        forestgreen: number;
        fuchsia: number;
        gainsboro: number;
        ghostwhite: number;
        gold: number;
        goldenrod: number;
        gray: number;
        green: number;
        greenyellow: number;
        grey: number;
        honeydew: number;
        hotpink: number;
        indianred: number;
        indigo: number;
        ivory: number;
        khaki: number;
        lavender: number;
        lavenderblush: number;
        lawngreen: number;
        lemonchiffon: number;
        lightblue: number;
        lightcoral: number;
        lightcyan: number;
        lightgoldenrodyellow: number;
        lightgray: number;
        lightgreen: number;
        lightgrey: number;
        lightpink: number;
        lightsalmon: number;
        lightseagreen: number;
        lightskyblue: number;
        lightslategray: number;
        lightslategrey: number;
        lightsteelblue: number;
        lightyellow: number;
        lime: number;
        limegreen: number;
        linen: number;
        magenta: number;
        maroon: number;
        mediumaquamarine: number;
        mediumblue: number;
        mediumorchid: number;
        mediumpurple: number;
        mediumseagreen: number;
        mediumslateblue: number;
        mediumspringgreen: number;
        mediumturquoise: number;
        mediumvioletred: number;
        midnightblue: number;
        mintcream: number;
        mistyrose: number;
        moccasin: number;
        navajowhite: number;
        navy: number;
        oldlace: number;
        olive: number;
        olivedrab: number;
        orange: number;
        orangered: number;
        orchid: number;
        palegoldenrod: number;
        palegreen: number;
        paleturquoise: number;
        palevioletred: number;
        papayawhip: number;
        peachpuff: number;
        peru: number;
        pink: number;
        plum: number;
        powderblue: number;
        purple: number;
        rebeccapurple: number;
        red: number;
        rosybrown: number;
        royalblue: number;
        saddlebrown: number;
        salmon: number;
        sandybrown: number;
        seagreen: number;
        seashell: number;
        sienna: number;
        silver: number;
        skyblue: number;
        slateblue: number;
        slategray: number;
        slategrey: number;
        snow: number;
        springgreen: number;
        steelblue: number;
        tan: number;
        teal: number;
        thistle: number;
        tomato: number;
        turquoise: number;
        violet: number;
        wheat: number;
        white: number;
        whitesmoke: number;
        yellow: number;
        yellowgreen: number;
    };
    isColor: boolean;
    r: number;
    g: number;
    b: number;
    constructor(r?: number | Color | string, g?: any, b?: any);
    set(value: any): this;
    setScalar(scalar: any): this;
    setHex(hex: any): this;
    setRGB(r: any, g: any, b: any): this;
    setHSL(h: any, s: any, l: any): this;
    setStyle(style: any): this;
    setColorName(style: any): this;
    clone(): Color;
    copy(color: any): this;
    copyGammaToLinear(color: any, gammaFactor: any): this;
    copyLinearToGamma(color: any, gammaFactor: any): this;
    convertGammaToLinear(gammaFactor: any): this;
    convertLinearToGamma(gammaFactor: any): this;
    copySRGBToLinear(color: any): this;
    copyLinearToSRGB(color: any): this;
    convertSRGBToLinear(): this;
    convertLinearToSRGB(): this;
    getHex(): number;
    getHexString(): string;
    getHSL(target: any): any;
    getStyle(): string;
    offsetHSL(h: any, s: any, l: any): this;
    add(color: any): this;
    addColors(color1: any, color2: any): this;
    addScalar(s: any): this;
    sub(color: any): this;
    multiply(color: any): this;
    multiplyScalar(s: any): this;
    lerp(color: any, alpha: any): this;
    lerpHSL(color: any, alpha: any): this;
    equals(c: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    toJSON(): number;
}

export  function color(r?: any, g?: any, b?: any): Color;

export  enum RotationOrders {
    XYZ = "XYZ",
    YZX = "YZX",
    ZXY = "ZXY",
    XZY = "XZY",
    YXZ = "YXZ",
    ZYX = "ZYX"
}

export  class Euler {
    private _x;
    private _y;
    private _z;
    private _order;
    constructor(_x?: number, _y?: number, _z?: number, _order?: RotationOrders);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get order(): RotationOrders;
    set order(value: RotationOrders);
    set(x: any, y: any, z: any, order: any): this;
    clone(): Euler;
    copy(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4, order: RotationOrders, update: any): this;
    setFromQuaternion(q: Quaternion, order: any, update?: any): this;
    setFromVector3(v: any, order: RotationOrders): this;
    reorder(newOrder: any): this;
    equals(euler: any): boolean;
    fromArray(array: any): this;
    toArray(array?: any[], offset?: number): any[];
    toVector3(optionalResult: any): any;
    onChange(callback: any): this;
    onChangeCallback(): void;
}

export  function euler(x?: number, y?: number, z?: number, order?: RotationOrders): Euler;

export  class Ray {
    origin: Vector3;
    direction: Vector3;
    constructor(origin?: Vector3, direction?: Vector3);
    set(origin: Vector3, direction: Vector3): this;
    clone(): Ray;
    copy(ray: Ray): this;
    at(t: number, target: Vector3): Vector3;
    lookAt(v: Vector3): this;
    recast(t: number): this;
    closestPointToPoint(point: Vector3, out?: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    distanceSqToPoint(point: Vector3): number;
    intersectSphere(sphere: Sphere, out: Vector3): Vector3;
    intersectsSphere(sphere: Sphere): boolean;
    intersectBox(box: Box3, out: Vector3): Vector3;
    intersectsBox(box: Box3): boolean;
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, out: Vector3): Vector3;
    applyMatrix4(matrix4: Matrix4): this;
    equals(ray: Ray): boolean;
}

export  function ray(origin?: Vector3, direction?: Vector3): Ray;

export  class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): this;
    copy(v: Vector2): this;
    clone(): Vector2;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    applyMatrix3(m: any): this;
    dot(v: any): number;
    cross(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    angle(): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
}

export  function v2(x?: number, y?: number): Vector2;

export  class SystemEvent {
    constructor();
}

export  enum TouchEvent {
    CLICK = "click",
    TouchDown = "mousedown",
    TouchMove = "mousemove",
    TouchOver = "mouseover",
    TouchOut = "mouseout",
    TouchUp = "mouseup"
}

export  class Touch {
    private _id;
    private startPoint;
    private point;
    private prevPoint;
    _type: TouchEvent;
    constructor(x: number, y: number, id: any, type: TouchEvent);
    setTouchInfo(x: any, y: any, id: any): void;
    get type(): TouchEvent;
    get location(): Vector2;
    get locationX(): number;
    get locationY(): number;
    getLocation(): Vector2;
    getLocationX(): number;
    getLocationY(): number;
    get prevLocation(): Vector2;
    get prevLocationX(): number;
    get prevLocationY(): number;
    getPrevLocation(): Vector2;
    getPrevLocationX(): number;
    getPrevLocationY(): number;
    private get id();
    getID(): any;
    get delta(): Vector2;
    getDelta(): Vector2;
}

export  class Scene extends Object3D {
    constructor();
    update(dt: any): void;
    protected _render(): void;
    onClick: (e: any) => void;
    onMouseDown: (e: any) => void;
    onMouseMove: (e: any) => void;
    onMouesOver(e: any): void;
    onMouseOut: (e: any) => void;
    onMouseUp: (e: any) => void;
}

export  let dpi: number;

export  const winSize: {
    width: number;
    height: number;
}

export  class WebGLRenderer {
    _canvas: HTMLCanvasElement;
    get canvas(): HTMLCanvasElement;
    set canvas(canvas: HTMLCanvasElement);
    _gl: WebGLRenderingContext;
    get gl(): WebGLRenderingContext;
    set gl(gl: WebGLRenderingContext);
    private constructor();
    init(): void;
    onResize(): void;
    static create(canvas?: HTMLCanvasElement | string): WebGLRenderer;
    render(scene: Scene): void;
}

export class App {
    private renderer;
    private _currentScene;
    set currentScene(scene: Scene);
    get currentScene(): Scene;
    private constructor();
    static create(): App;
    private _lt;
    private mainLoop;
    private onClick;
    private onMouseDown;
    private onMouseMove;
    private onMouesOver;
    private onMouseOut;
    private onMouseUp;
    private onResize;
    private initEvent;
}

export  const app: App;

export {};

export class Director {
    private constructor();
    static create(): Director;
    get currentScene(): Scene;
    changeScene(scene: any): void;
}

export  const director: Director;

export {};

export  function compileProgram(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, attributeLocations?: any): WebGLProgram;

export  function setPrecision(src: string, precision: string): string;

export  function generateUniformAccessObject(gl: WebGLRenderingContext, uniformData: any): {
    data: {};
}

export  function mapType(gl: any, type: any): any;

export  function mapSize(type: string): number;

export  class Attribute {
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    name: string;
    size: number;
    type: string;
    location: GLint;
    buffer: WebGLBuffer;
    private _bufferData;
    set bufferData(bufferData: any);
    get bufferData(): any;
    private constructor();
    static create(gl: WebGLRenderingContext, program: WebGLProgram, attribData: WebGLActiveInfo): Attribute;
    init(): this;
    enable(): void;
    disable(): void;
    bind(bufferData: any): void;
    pointer(type?: number, normalized?: boolean, stride?: number, start?: number): void;
}

export  function extractAttributes(gl: WebGLRenderingContext, program: WebGLProgram): {};

export  function defaultValue(type: string, size: number): false | any[] | Int32Array | Float32Array | 0;

export  function extractUniforms(gl: WebGLRenderingContext, program: WebGLProgram): {};

export  class Shader {
    private gl;
    private program;
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
    constructor(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, precision?: string, attributeLocations?: any);
    use(): this;
    destroy(): void;
}
}
