/*
 * Created by 还有醋v on 2020/9/8.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

/**
 * 取符合范围的值
 * @param value
 * @param min
 * @param max
 */
export function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}
