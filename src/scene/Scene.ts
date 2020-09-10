/*
 * Created by 还有醋v on 2020/9/7.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

import { Object3D } from "../core/Object3D";
import { Touch } from "../event/TouchEvent";

export class Scene extends Object3D {
    constructor() {
        super();
    }

    public update(dt) {

    }

    protected _render() {

    }

    public onClick(t: Touch) {
        console.log(t);
    }

    public onMouseDown(t: Touch) {

    }

    public onMouseMove(t: Touch) {

    }

    public onMouesOver(t: Touch) {

    }

    public onMouseOut(t: Touch) {

    }

    public onMouseUp(t: Touch) {

    }
}


