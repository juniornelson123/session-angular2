export class Session{
	public key = "currentUser"

	create(user){
		localStorage.setItem(this.key, JSON.stringify(user))
		
		localStorage.setItem("authorization", 'true')
	}

	currentUser(){
		return localStorage.getItem(JSON.parse(this.key))
	}

	authenticated(){
		return localStorage.getItem("authorization")
		//return localStorage.get("autorization", true)
	}
	
	setCurrentUser(user){
		this.remove()
		this.create(user)
		return this.currentUser()

	}

	remove(){
		localStorage.removeItem(this.key)
	}

	logout(){
		localStorage.removeItem("authorization")
	}
}