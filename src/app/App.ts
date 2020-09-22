/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { WebGLRenderer } from "../core";
import { Scene } from "../scene";
import { winSize } from "./const";
import { EventType, Touch } from "../event";
import TouchType = EventType.TouchType;

const TouchFun = {
    [TouchType.CLICK]: 'onClick',
    [TouchType.TouchStart]: 'onTouchStart',
    [TouchType.TouchMove]: 'onTouchMove',
    [TouchType.TouchEnd]: 'onTouchEnd',
    [TouchType.TouchCancel]: 'onTouchCancel',
}

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
            this.renderer.render(this.currentScene, null);
        }

        requestAnimationFrame(this.mainLoop);
    }

    private onClick = (e: MouseEvent) => {
        console.log('onClick', e);
    }

    private touches: { [key: string]: Touch } = {};
    private onTouchEvent = (e: TouchEvent) => {
        const type = e.type;
        const points = [e.changedTouches[0]];
        const body = document.body;
        const canvasRect = this.renderer.canvas.getBoundingClientRect();
        const adjustX = canvasRect.left - (body.scrollLeft || window.scrollX || 0);
        const adjustY = canvasRect.top - (body.scrollTop || window.scrollY || 0);

        const updateTouch = (type == 'touchstart')
            ? (x, y, id) => this.touches[id] = new Touch(x, y, id)
            : (x, y, id) => this.touches[id].setTouchInfo(x, y);

        const onFunc = TouchFun[type];

        points.forEach((value) => {
            const x = (value.clientX - adjustX) * window.devicePixelRatio;
            const y = (value.clientY - adjustY) * window.devicePixelRatio;
            const id = `t${value.identifier}`;
            updateTouch(x, y, id);
            this.currentScene[onFunc](this.touches[id]);
        });
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

        // canvas.on(TouchType.CLICK, this.onClick);
        canvas.addEventListener(TouchType.TouchStart, this.onTouchEvent);
        canvas.addEventListener(TouchType.TouchMove, this.onTouchEvent);
        canvas.addEventListener(TouchType.TouchEnd, this.onTouchEvent);
        canvas.addEventListener(TouchType.TouchCancel, this.onTouchEvent);
    }
}

export const app = App.create();

