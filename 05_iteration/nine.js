//reduce
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0) //-acc value

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

//
const shoppingCart = [
    {
        itemname: "py course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "js course",
        price: 5999
    },
    {
        itemname: "ds course",
        price: 12999
    },
]
const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(PriceToPay);
