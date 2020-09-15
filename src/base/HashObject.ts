/**
 * 基础
 */
export abstract class HashObject {
    protected _instanceId: number = 0;
    protected _instanceType: string = "HashObject";
    protected static _object_id = 0;

    constructor() {
        this._instanceId = HashObject._object_id++;
    }

    /**
     * 每一个对象都会有一个唯一的id码。
     * @property instanceId
     * @public
     * @since 1.0.0
     * @return {number}
     * @readonly
     * @example
     *      //获取 对象唯一码
     *      trace(this.instanceId);
     */
    public get instanceId(): number {
        return this._instanceId;
    }

    /**
     * 每一个类都有一个实例类型字符串，通过这个字符串，你能知道这个实例是从哪个类实例而来
     * @property instanceType
     * @since 1.0.3
     * @public
     * @return {string}
     * @readonly
     */
    public get instanceType(): string {
        return this._instanceType;
    }

    /**
     * 销毁一个对象
     * 销毁之前一定要从显示对象移除，否则将会出错
     * @method destroy
     * @since 2.0.0
     * @public
     * @return {void}
     */
    abstract destroy(): void;
}
