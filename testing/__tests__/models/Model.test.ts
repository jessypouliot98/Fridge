import Model from "../../../lib/models/Model";

class Test extends Model {
	public toText() {
		return 'foo';
	}
}

describe('Model', () => {
	it('requires a function "toText" that returns a string', () => {
		const test = new Test();
		
		expect(test).toBeInstanceOf(Model);
	});

	it('has a unique id with a string value of 16 characters', () => {
		const test = new Test();
		
		expect(typeof test.uid).toBe('string');
		expect(test.uid).toHaveLength(16);
	});
});