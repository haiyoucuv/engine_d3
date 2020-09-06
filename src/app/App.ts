/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

class App {

    constructor() {

    }

    public static create() {
        return new App();
    }

    private _lt = Date.now();

    mainLoop() {
        const now = Date.now();
        const dt = now - this._lt;
        this._lt = now;

        requestAnimationFrame(this.mainLoop);
    }

}

export const app = App.create();
