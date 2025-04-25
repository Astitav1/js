const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const myNums = myNumbers.map( (num) => num + 10 )

//chaining - applying two or more methods
const newNums = myNumbers
                         .map((num) => num*10 ) //op=> [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
                         .map((num) => num+1)   // op=> [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                         .filter((num) => num >= 40) //op=> [41, 51, 61, 71, 81, 91, 101]

console.log(newNums);