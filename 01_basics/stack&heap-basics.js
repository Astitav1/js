// Stack(Primitive) and heap(Non-Primitive)
let myYoutubename = "HitestChaudhary"
let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne
userTwo.email = "astitav@google.com"

console.log(userOne.email);
console.log(userTwo.email);