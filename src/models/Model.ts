import uniqid from 'uniqid';

class Model {

	protected _uid = uniqid();

	public get uid() {
		return this._uid;
	}

}

export default Model;