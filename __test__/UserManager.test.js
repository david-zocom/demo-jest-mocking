// Import and export requires Babel or Webpack
//import UserManager from '../UserManager.js';
const UserManager = require('../UserManager.js');


describe('needsTesting', () => {
	// does not throw
	// deleteUser is called exactly once
	test('does not throw', () => {
		let um = new UserManager();
		let mockDeleteUser = jest.fn();
		um.deleteUser = mockDeleteUser;
		let fun = () => {
			um.needsTesting();
		};
		expect( fun ).not.toThrow();
	});
	
	test('deleteUser is called exactly once', () => {
		let um = new UserManager();
		let mockDeleteUser = jest.fn();
		um.deleteUser = mockDeleteUser;
		um.needsTesting();
		//console.log('mockDeleteUser.mock',mockDeleteUser.mock);
		expect( mockDeleteUser.mock.calls.length ).toBe( 1 );
	});
})

/*
  console.log __test__\UserManager.test.js:28
mockDeleteUser.mock == { 
	calls: [ 
		[], 
		[ 55 ], 
		[ true, false ], 
		[ [Object] ] 
	],
    instances:[ 
		UserManager: { 
			deleteUser: [Object] 
		},
	 	undefined,
        undefined,
        undefined 
	] 
}*/












