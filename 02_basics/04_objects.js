const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "s@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Astitav",
            lastname: "Goswami"
        }
    }
}

console.log(regularUser.fullname.userfullname);


///---merging objects in 1----//
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

/////////
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //will give op in array => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//for checking availibilty 
console.log(tinderUser.hasOwnProperty('isLogged'));
