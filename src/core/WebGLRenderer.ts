/*
 * Created by 还有醋v on 2020/9/6.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

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

    public static create(canvas: HTMLCanvasElement | string) {
        const renderer = new WebGLRenderer();
        if (typeof canvas == "string") {
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

        return renderer;

    }
}
