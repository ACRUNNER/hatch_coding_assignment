interface Auth {
	isAuthenticated: boolean,
	email: string,
	logins: {[key: string]: string},
	signup: Function,
	authenticate: Function,
	signout: Function
}

export const fakeAuth: Auth = {
	isAuthenticated: false,
	email: '',
	logins: {
		'fake@email.com': 'password'
	},
	signup(email: string, password: string, cb: Function) {
		if(email in this.logins){
			setTimeout(function(){ cb(false)}, 100)
		} else {
			this.logins[email] = password
			this.isAuthenticated = true
			this.email = email
			setTimeout(function(){ cb(true)}, 100)
		}
	},
	authenticate(email: string, password: string, cb: Function) {
		if(email in this.logins && this.logins[email] === password){
			this.isAuthenticated = true
			this.email = email
			setTimeout(function(){ cb(true)}, 100)
		} else {
			setTimeout(function(){ cb(false)}, 100)
		}
	},
	signout(cb: Function) {
		this.isAuthenticated = false
		this.email = ''
		setTimeout(cb, 100)
	}
}