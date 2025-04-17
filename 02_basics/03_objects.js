//object literals

//declaring a symbol
const mySym = Symbol("Key1") //intervw questn- take a symbol and add it in object and *print it but as a symbol*


const Jsuser = {
    name: "Astitav",
    "full name": "Astitav Goswami", //it can only be accesed through bracet method
    [mySym]: "Key1", //using [ ] for symbolise the symbol in output
    age: 18,
    location: "Jaipur",
    email: "astitav@jio.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//“Dot is default, Bracket is backup – use it when the key is dynamic or weird.”
//“Dot notation is preferred for simplicity, but bracket notation is powerful when using dynamic keys or special characters.”
console.log(Jsuser.email);
console.log(Jsuser["email"]); //best way 
console.log(Jsuser["full name"]);
// console.log(Jsuser["mySym"]); // op=> Key1 but as a(string)
console.log(Jsuser[mySym]);
console.log(typeof Jsuser[mySym]);

//Object.freeze(Jsuser) //use to freeze the object and no outside changes
console.log(Jsuser);

console.log("-------------");
//using functions
Jsuser.greeting = function () {
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

