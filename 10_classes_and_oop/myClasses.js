class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    encryptPassword(){
        return `${this.username}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "abc@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.username}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}abc`
}

const tea =  new User("tea", "tea@bosd.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());