/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { WebGLRenderer } from "../core/WebGLRenderer";
import { Scene } from "../scene/Scene";
import { winSize } from "./const";

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

    private onResize() {
        winSize.width = window.innerWidth;
        winSize.height = window.innerHeight;

        this.renderer.onResize();
        this.currentScene && this.currentScene.onResize();
    }

    private initEvent() {
        window.onresize = this.onResize;
    }
}

export const app = App.create();

