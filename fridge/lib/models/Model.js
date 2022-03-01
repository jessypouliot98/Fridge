import uniqid from 'uniqid';
class Model {
    constructor() {
        this._uid = uniqid();
    }
    get uid() {
        return this._uid;
    }
}
export default Model;
