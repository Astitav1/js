const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "Batman"]

// marvel_heros.push(dc_heroes) // even if we use .concat then also same op  
// //op=> [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'Batman' ] ]
// console.log(marvel_heros);// yha array ke andar array aagya 

//=======using spread========//
const all_new_heros = [...marvel_heros, ...dc_heroes]
console.log(all_new_heros); //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'Batman' ]
// we use spread method to join the array 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// agar bhot array ke andar hai kaisare to hm .flat use krke sbko ek array bna skte h 
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array); //op=> [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


//-----checking hitesh is array oe not-----//
console.log(Array.isArray("Hitesh")) //false op
console.log(Array.from("Hitesh")); //op=> [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh"})); //imp for intervies op=>[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

