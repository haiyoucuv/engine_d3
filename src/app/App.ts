/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { WebGLRenderer } from "../core/WebGLRenderer";
import { Scene } from "../scene/Scene";
import { dpi, winSize } from "./const";
import { touch, TouchEvent } from "../event/TouchEvent";

class App {

    private renderer: WebGLRenderer;

    private _currentScene: Scene;
    public set currentScene(scene: Scene) {
        this._currentScene = scene;
    }

    public get currentScene(): Scene {
        return this._currentScene;
    }

    private constructor() {

        this.renderer = WebGLRenderer.create(
            // document.getElementById('canvas') as HTMLCanvasElement
        );

        document.body.appendChild(this.renderer.canvas);
        // this.renderer.canvas.addEventListener('onMouse')

        this.onResize();
        this.initEvent();

        this.mainLoop();
    }

    public static create() {
        return new App();
    }

    private _lt = Date.now();

    private mainLoop = () => {
        const now = Date.now();
        const dt = (now - this._lt) / 1000;
        this._lt = now;

        if (this.currentScene) {
            this.currentScene.update(dt);
            this.renderer.render(this.currentScene);
        }

        requestAnimationFrame(this.mainLoop);
    }

    private onClick = (e: MouseEvent) => {
        // touch(e.clientX, e.clientY)
        console.log('onClick', e);
    }

    private onMouseDown = (e: MouseEvent) => {
        console.log('onMouseDown', e);

    }

    private onMouseMove = (e: MouseEvent) => {
        console.log('onMouseMove', e);

    }

    private onMouesOver = (e: MouseEvent) => {
        console.log('onMouesOver', e);

    }

    private onMouseOut = (e: MouseEvent) => {
        console.log('onMouseOut', e);

    }

    private onMouseUp = (e: MouseEvent) => {
        console.log('onMouseUp', e);

    }

    private onResize = () => {
        winSize.width = window.innerWidth;
        winSize.height = window.innerHeight;
        // @ts-ignore
        // hycv.dpi = window.devicePixelRatio;

        this.renderer.onResize();
        this.currentScene && this.currentScene.onResize();
    }

    private initEvent() {
        // window.onresize = this.onResize;
        window.addEventListener('resize', this.onResize);

        const canvas = this.renderer.canvas;

        canvas.addEventListener(TouchEvent.CLICK, this.onClick);
        canvas.addEventListener(TouchEvent.TouchDown, this.onMouseDown);
        canvas.addEventListener(TouchEvent.TouchMove, this.onMouseMove);
        canvas.addEventListener(TouchEvent.TouchOver, this.onMouesOver);
        canvas.addEventListener(TouchEvent.TouchOut, this.onMouseOut);
        canvas.addEventListener(TouchEvent.TouchUp, this.onMouseUp);
    }
}

export const app = App.create();

