class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){  // static rokta h access hone se
        return `123`
    }
}

const Astitav = new User("Astitav")
console.log(Astitav.createId());

class Teacher extends User {
    constructor(username, email){
    super(username)
    this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId);