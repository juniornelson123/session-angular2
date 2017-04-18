export class Session{
	key = "currentUser"

	create(user){
		localStorage.setItem(this.key, JSON.stringify(user))
	}

	currentUser(){
		return localStorage.getItem(JSON.parse(this.key))
	}

	setCurrentUser(user){
		this.remove()
		this.create(user)
		return this.currentUser()

	}

	remove(){
		localStorage.removeItem(this.key)
	}
}