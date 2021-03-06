// import uniqid from 'uniqid';

let i = 0;

const uniqid = () => {
	return `${new Date().getTime()}-${++i}`;
}

abstract class Model {

	protected _uid = uniqid();

	public get uid() {
		return this._uid;
	}

	abstract toText(): string;

}

export default Model;
