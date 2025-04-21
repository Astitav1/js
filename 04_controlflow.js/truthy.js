//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false' , " ", [], {}, funstion(){}

const userEmail = []
if(userEmail){
    console.log("Got user email");
}
//it run the empty array 

//ex2
if (userEmail.length === 0){
    console.log("Array is empty");
}
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");   
}
//it also runs