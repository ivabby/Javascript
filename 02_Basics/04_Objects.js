// const tinderUser = {}  Non singelton 
const tinderUser = new Object(); // Singelton

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Naman",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firstName);

// If fullname doesn't exist -> Use if else or ?
// console.log(regularUser.fullname?.userFullName?.firstName);


// -------------------------------------------------------------------------------------------

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};

// Merge directly -> 
const obj3 = {obj1 , obj2} // Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

// Merge using spread opeartor
const obj4 = {...obj1 , ...obj2} // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj4);


// Using Object.assign
const obj5 = Object.assign({} , obj1, obj2) // First Variable is target object where all the object will be copied
// console.log(obj5);


// ----------------------------------------------------------------------------

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
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

console.log(users[0].id);

// Find all keys of a object
console.log(Object.keys(tinderUser)); // Returns an array of keys

// Find all values of a object
console.log(Object.values(tinderUser)); // Returns an array of values

// Find key value array of object
console.log(Object.entries(tinderUser)); // Returns an array of key : value pair


// Check if a property (key) is present in object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

