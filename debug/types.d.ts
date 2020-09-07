
declare module engine{
export  class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    get length(): number;
    static clone(v: any): Vector3;
    set(x?: number, y?: number, z?: number): Vector3;
    copy(v: Vector3): Vector3;
    add(value: Vector3 | number): Vector3;
    adds(...values: (Vector3 | number)[]): Vector3;
    addScaled(value: Vector3 | number, scale: number): Vector3;
    sub(value: Vector3 | number): Vector3;
    subs(...values: (Vector3 | number)[]): Vector3;
    scale(value: number): Vector3;
    scales(...values: number[]): Vector3;
    divide(value: Vector3 | number): Vector3;
    divides(...values: (Vector3 | number)[]): Vector3;
    dot(v: Vector3): number;
    crossVector(v: Vector3): Vector3;
    cross(v1: Vector3, v2: Vector3): Vector3;
    normalize(): Vector3;
}

export  class EventDispatcher {
    private _listeners;
    constructor();
    addEventListener(type: string, listener: any): void;
    hasEventListener(type: string, listener: any): boolean;
    removeEventListener(type: string, listener: any): void;
    dispatchEvent(event: any): void;
}

export  class Object3D extends EventDispatcher {
    constructor();
    init(): void;
    update(dt: any): void;
    render(): void;
    protected _render(): void;
    destroy(): void;
    onResize(): void;
}

export  class Scene extends Object3D {
    constructor();
    update(dt: any): void;
    protected _render(): void;
}

export  class WebGLRenderer {
    _canvas: HTMLCanvasElement;
    get canvas(): HTMLCanvasElement;
    set canvas(canvas: HTMLCanvasElement);
    _gl: WebGLRenderingContext;
    get gl(): WebGLRenderingContext;
    set gl(gl: WebGLRenderingContext);
    constructor();
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
    constructor();
    static create(): App;
    private _lt;
    private mainLoop;
    private onResize;
    private initEvent;
}

export  const app: App;

export {};

export class Director {
    constructor();
    static create(): Director;
    get currentScene(): Scene;
    changeScene(scene: any): void;
}

export  const director: Director;

export {};

export  const devicePixelRatio: number;

export  function compileProgram(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, attributeLocations?: any): WebGLProgram;

export  function setPrecision(src: string, precision: string): string;

export  class Shader {
    private gl;
    private program;
    constructor(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, precision?: string, attributeLocations?: any);
    use(): this;
    destroy(): void;
}
}
