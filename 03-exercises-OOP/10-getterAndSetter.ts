class User {
	private _username: string;

	constructor(newUser: string) {
		if (newUser.length >= 3) {
			this._username = newUser;
		} else {
			throw new Error("Username must be at least 3 characters long");
		}
	}

	get username(): string {
		return this._username;
	}

	set username(newUsername: string) {
		if (newUsername.length >= 3) {
			this._username = newUsername;
		} else {
			throw new Error("Username must be at least 3 characters long");
		}
	}
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
// const user = new User("jo");
// const user = new User("Martin");
// user.username = "Do";
