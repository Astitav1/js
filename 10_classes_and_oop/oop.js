const user = {
    username: "Astitav",
    isLoggedIn: true,
    Job: "Web Developer",

    getUserDetails: function(){
        //console.log(this);
        console.log(`Got the user details his name is: ${this.username}`);
    }
}
console.log(user.getUserDetails());

console.log(user);
console.log(user.username);
console.log(this)


function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Astitav", 12, true)
const userTwo = new User("Goswami", 12, true)
console.log(userOne);
console.log(userTwo);
