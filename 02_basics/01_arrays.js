//array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
// console.log(myArr[2]); //print the index value

// //Array Methods

// myArr.push(6)
// myArr.pop(5)
// console.log(myArr);

// myArr.unshift(9) //.shift() => will remove the first element
// console.log(myArr); // it will add 9 on the starting of the array
// console.log(myArr.includes(9)); //=> will tell 9 is in the array or not

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // convert the array into string

// cocept of slice, splice
// important concept in interview

console.log("A", myArr);
const myn1 = myArr.slice(1, 3) //here it will include the index values of 1, 2
console.log(myn1);
console.log("B ",myArr);
//here comes the interview question 
//splice
const myn2 = myArr.splice(1, 3)// it will print the values from index values from 1,2,3 but removed it from the original array
console.log("C ", myArr); //C  [ 0, 4, 5 ] => splice removed the the index values of 1, 2, 3 from the original array 
console.log(myn2);
