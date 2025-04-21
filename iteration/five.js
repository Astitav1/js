const coding = ["js", "rb", "py", "java", "c++"]
//call back functn and foreach - in callback funtion there is no name - direct - function (){}
coding.forEach( function (val) {
    //console.log(val);
})

coding.forEach( (item) => {
    //console.log(item);
    
} )

function printMe(item){
   // console.log(item);
    
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName: "Javascript",
        languageFilename: "js"
    },
    {
        languageName: "Java",
        languageFilename: "java"
    },
    {
        languageName: "Python",
        languageFilename: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )