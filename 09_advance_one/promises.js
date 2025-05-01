const promiseOne = new Promise(function (resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
    
})

///--------Simpler way to write ----//
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");   
})

//data kaise late h
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Astitav", email: "astitav@xyz"})
    }, 1000)
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
        
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{                        //chaining = uper dot ki value hi niche aayegi
    console.log(username);
}).then((error)=>{
    console.log(error);
}).finally(()=> {console.log("The promise is either rejected or resolved")})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
        
    }, 1000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.