//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//opt=> Thu Apr 17 2025 01:00:23 GMT+0530 (India Standard Time)
console.log(myDate.getDate());//give latest date as only 17
console.log(myDate.toDateString()); //Thu Apr 17 2025
console.log(myDate.toLocaleDateString());//17/04/2025

console.log(typeof myDate); // yes date is object

//--------------------//
let myCreatedDate = new Date(2025, 0, 17, 5, 3) //17/01/2025, 05:03:00 => its mean the month start from 0 in js
console.log(myCreatedDate.toLocaleString());

//-----------//
let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//converting miliseconds to seconds
