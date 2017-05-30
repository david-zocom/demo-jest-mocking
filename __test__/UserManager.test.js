// Import and export requires Babel or Webpack
//import UserManager from '../UserManager.js';
const UserManager = require('../UserManager.js');


describe('needsTesting', () => {
	// does not throw
	// deleteUser is called exactly once
	test('does not throw', () => {
		let um = new UserManager();
		let fun = () => {
			um.needsTesting();
		};
		expect( fun ).not.toThrow();
	});
	
	test('deleteUser is called exactly once', () => {
		let um = new UserManager();
		let mockDeleteUser = jest.fn();
		um.needsTesting();
		expect( mockDeleteUser.mock.calls.length ).toBe( 1 );
	});
})
