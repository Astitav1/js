//forof
//["","",""]
//[{},{},{}]
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//lets take a string
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}
//map
const map = new Map()
map.set('In', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('In', "India") //it will print dublicate , it always print unique
console.log(map);

for (const [key, Value] of map) {
    console.log(key, ':-', Value);
}
//this method not working on object //try on object
// const myObject = {
//     'game1': 'NFS',
//     'game2': 'GTA'
// }
// for (const [key, Value] of myObject) {
//     console.log(key , ':-', Value);
    
// }