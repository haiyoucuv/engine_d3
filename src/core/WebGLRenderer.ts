/*
 * Created by 还有醋v on 2020/9/6.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { Scene } from "../scene";
import { winSize } from "../app";
import { Shader } from "./shader/Shader";
import { BASE_SHADER } from "./shader/ShaderCode";
import { color, mat4, Mesh, v3 } from "..";
import { Camera } from "../camera";

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


    public shader: Shader;

    private constructor() {

    }

    public init() {
        const gl = this.gl;
        gl.clearColor(0.2, 0.2, 0.2, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // 设置一些参数
        gl.enable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        this.shader = new Shader(
            this.gl,
            BASE_SHADER.VERTEX,
            BASE_SHADER.FRAG
        );

        this.shader.use();

    }

    public onResize() {
        const canvas = this.canvas;
        const dpi = window.devicePixelRatio;
        console.log('dpi', dpi);
        const w = winSize.width;
        const h = winSize.height;
        canvas.width = w * dpi;
        canvas.height = h * dpi;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        this.gl.viewport(0, 0, canvas.width, canvas.height);
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
                // {
                //     antialias: true,
                //     antialiasSamples: 8,
                //     preserveDrawingBuffer: false
                // }
                renderer.gl = renderer.canvas.getContext(v,) as WebGLRenderingContext;
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

    private meshes: Mesh[] = [];

    public render(scene: Scene, camera: Camera) {
        scene.updateMatrixWorld();
        scene.render(this);
        this._render(scene, camera);
    }

    public addRenderMesh(mesh: Mesh) {
        this.meshes.push(mesh);
    }

    private _render(scene: Scene, camera: Camera) {
        const shader: Shader = this.shader;
        const gl = this.gl;

        this.meshes.forEach((mesh: Mesh) => {
            const {vertices, indices, uvs, normals, colors} = mesh.geometry;
            shader.attributes.pos.bind(vertices).pointer();
            shader.attributes.color.bind(colors).pointer();
            shader.attributes.normal.bind(normals).pointer();

            shader.uniforms.alpha = mesh.alpha;

            shader.uniforms.lightColor = color().toArray();

            const lightPos = v3(2, 2, -5);
            shader.uniforms.lightPos = lightPos.toArray();

            const viewPos = v3(2, 2, -5);

            const vp = mat4();
            vp.setPerspective(60, winSize.width / winSize.height, 1, 100);  // fov, aspect, near, far
            vp.multiply(mat4().setLookAt(viewPos, v3(), v3(0, 1, 0)));
            shader.uniforms.vp = vp.toArray();

            const model = mesh.worldMatrix;
            shader.uniforms.model = model.toArray();

            const normalMat = model.clone().invert().transpose();
            this.shader.uniforms.normalMat = normalMat.toArray();

            this.shader.uniforms.viewPos = viewPos.toArray();

            let indexBuffer = mesh.geometry.indexBuffer;
            if (!indexBuffer) {
                mesh.geometry.indexBuffer = indexBuffer = gl.createBuffer();
            }
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_BYTE, 0); // 从数组数据渲染图元

        });

        this.meshes.length = 0;
    }
}
