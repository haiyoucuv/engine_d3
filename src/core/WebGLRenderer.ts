/*
 * Created by 还有醋v on 2020/9/6.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { Scene } from "../scene/Scene";

export class WebGLRenderer {

    public _canvas: HTMLCanvasElement;
    public get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    public set canvas(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
    }

    public _gl: WebGLRenderingContext;
    public get gl(): WebGLRenderingContext {
        return this._gl;
    }

    public set gl(gl: WebGLRenderingContext) {
        this._gl = gl;
    }

    constructor() {

    }

    public init() {
        const gl = this.gl;
        gl.clearColor(0.2, 0.2, 0.2, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // 设置一些参数
        gl.enable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }

    public onResize() {
        // this.canvas.width = document.documentElement.clientWidth;
        // this.canvas.height = document.documentElement.clientHeight;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    }


    public static create(canvas?: HTMLCanvasElement | string) {
        const renderer = new WebGLRenderer();
        if (!canvas) {
            renderer.canvas = document.createElement('canvas') as HTMLCanvasElement;
        } else if (typeof canvas == "string") {
            renderer.canvas = document.getElementById(canvas) as HTMLCanvasElement;
        } else {
            renderer.canvas = canvas;
        }

        const names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
        for (let v of names) {
            try {
                renderer.gl = renderer.canvas.getContext(v) as WebGLRenderingContext;
                break;
            } catch (e) {
            }
        }
        if (!renderer.gl) {
            throw 'WebGL not supported.';
        }

        renderer.init();

        return renderer;
    }


    public render(scene: Scene) {

    }
}
