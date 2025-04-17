const score = 400
console.log(score);

//giving number in output
const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length); //giver the length of the input as we have 1000 => 4 lenth
console.log(balance.toFixed(1));//give max value after decimal 

const otherNumber =  123.8966
console.log(otherNumber.toPrecision(4)); ///give the naearest value
console.log(otherNumber.toPrecision(3)); //123.89 => 124

// ++++++++++++ MATH ++++++//
console.log(Math);
console.log(Math.abs(-4));//convert the -ve value into +ve
console.log(Math.round(4.7));//give round off values => 4.7 - 5
console.log(Math.floor(4.9));//give the base value onlt like 4.9 => 4
console.log(Math.min(6,4,7,3));//give the minimum value 
console.log(Math.max(4,7,3,9));

/////////////////
console.log((Math).random()); // it will genreate the value betwn 0-1
console.log(((Math).random()*10)+1); //chances of coming a 0 will be not possible
console.log(Math.floor(Math.random()*10)+1);//using a floor value to remove decimal values

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min); //formula for coming a value between a range