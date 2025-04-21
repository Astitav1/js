//if
//types of operators => <, >, <=, >=, ==, !=, ===, !==

const isUserloggedIn = true
const temperature = 41

if (temperature === 40 ){
    console.log("less than 40");
}
else {
    console.log("Temp is not valid");
}

console.log("-----------");
//nested if else

const balance = 1000

if (balance < 500){
    console.log("less than 500");
}
else if (balance < 750){
    console.log("less than 750");
}
else if (balance < 1000){
    console.log("less than 1000");
}
else {
    console.log("less than 1500");   
}

console.log("-----------");

const UserloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(UserloggedIn && debitCard){
    console.log("Allow to website");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User logged in");
}

//Nullish Coalescing Operator (??): null undefined 
console.log("Nullish Coalescing Operator (??): null undefined ");

let val1, val2, val3, val4;
val1 = 5 ?? 10 //o/p=> 5
val2 = null ?? 10  // => 10
val3 = undefined ?? 15 // op=> 15
val4 = null ?? 10 ?? 20 // op=> 10

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Terniary Operator
// condition ? true : false 
const iceteaPrice = 100
iceteaPrice >= 150? console.log("less than 80") : console.log("More than 80");

