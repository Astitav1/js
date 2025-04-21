const myObject = {
    JS: 'JS',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple' 
}
//forin loop
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
    
}

//using forin loop for array
const programming = ["js", "rb", "py", "java", "c++"]
for (const key in programming) {
    console.log(programming[key]);
    
}

//imp q- diff bw forin and forof is forin print the key value and forof print value