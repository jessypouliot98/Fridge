import uniqid from 'uniqid';

abstract class Model {

	protected _uid = uniqid();

	public get uid() {
		return this._uid;
	}

	abstract toText(): string;

}

export default Model;
