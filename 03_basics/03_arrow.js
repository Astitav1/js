//this
const user = {
    username: "Astitav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);  
    }
}
user.welcomeMessage()
console.log(this);

//arrow function
console.log("arrow function");
//method 1
const addTwon = (num1, num2) => {
    return num1 + num2
}
console.log(addTwon(4, 4))
//implicit return
//method 2

const addTwo = (num1, num2) => num1 + num2      //{agar curly braces use hua h to hme return keyword likhna hoga}
                                                //(agar parathesis lga h to return likhna imp nhi h)
console.log(addTwo(5, 4))

const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(5, 5))
 
const addTwo3 = (num1, num2) => ({username: "Astitav"})
console.log(addTwo3(5, 5))