declare abstract class Model {
    protected _uid: string;
    get uid(): string;
    abstract toText(): string;
}
export default Model;
