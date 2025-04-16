console.log(2<1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//beyond this not recommended
//data types are not same here 
console.log("2">1); //here it will convert string then compare the values 
console.log("02">1);

console.log(null<0);
console.log(null == 0);
console.log(null>=0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//strict checking ===
console.log("2"===2); //also check datatype so give op=> false