// Immediately Invoked Function Expressions (IIFE) => () ()
//Inyerviw question - why we use IIFE 
//Ans - 1) jo functions immediately exectue hojaye
// Ans -2) global scope ke pollution se kai baar problem hoti h to uske pollution ko htane keliye iife use hota h

//named iifd - named h chai
(function chai(){
    console.log(`DB CONNECTED`);    
})(); // here()= exection

//using another example with arrow fn
//simple iife - no name here 
( () => {
    console.log(`DB CONNECTED ANOTHER`);
    
})();

( (name) => {
    console.log(`DB CONNECTED ANOTHER ${name}`);
    
})('Astitav');