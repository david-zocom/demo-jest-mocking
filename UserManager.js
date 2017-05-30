class UserManager {
	needsTesting() {
		this.deleteUser();
	}
	deleteUser() {
		throw new Error('User deleted!');
	}
}
// Import and export requires Babel or Webpack
//export default UserManager;
module.exports = UserManager;