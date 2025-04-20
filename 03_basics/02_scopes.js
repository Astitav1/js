//scope => {}
// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ",a);
    
// }

// console.log("OUTER: ",a);

// console.log("----------");

function one(){
    const username = "Astitav"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
one()

//more with if else
if (true){
    const username = "Astitav"
    if(username === "Astitav"){
        const website = " Web Dev"
        console.log(username + website);
    }
    //console.log(website);
    
}

//console.log(username);

///--many syntax to write a function
console.log(addone(5)); //it print 6

function addone(num){
    return num +1
}

//but here
addtwo(5) //it shows => Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num+2
}