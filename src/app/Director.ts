/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { app } from "./App";
import { Scene } from "../scene/Scene";

class Director {

    private constructor() {

    }

    public static create() {
        return new Director();
    }

    public get currentScene(): Scene {
        return app.currentScene;
    }

    public changeScene(scene) {
        const oldScene = this.currentScene;
        app.currentScene = scene;
        app.currentScene.init();
        oldScene && oldScene.destroy();
    }


}

export const director = Director.create();
