// if

const isUserLoggedIn = true;

// if(2 == "2") {
//     console.log("Executed");
// } else {
//     console.log("Not executed");
// }

//  Opeartos
// < ,  > , <= , >= , == , != , === - Match content and data type

const temperature = 41

// if(temperature  < 50) {
//     console.log("Temperature less then 50");
// }
// else {
//     console.log("Temp greater then 50");
// }


// const score = 200
// if(score > 100) {
//     // const power = "FLY";
//     var power = "FLY";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); 
// Error if variable is inside if



const months = 3
// switch(months) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     default:
//         console.log("Default");
// }


//  Falsy Value:
//  false, 0 , -0 , BigInt, 0n , "" , null , undefined , NaN

//  Truthy Value:
//  "0" , "false" , " " , [] , {} , function(){}

const name = "Sam"
// if(name) {
//     console.log("Name is not empty");
// }

const userEmail = "";

//  Condition to check empty string
// if(userEmail.length === 0) {
//     console.log("Empty email");
// }

const emptyObj = {};

//  Condition to check empty object
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// false == 0  - true
// false == '' - true
// 0 == ''     - true



// --------------------------------


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5??10; // Output: 5

// val1 = null??10; // Output: 10

// val1 = undefined??15; // Output: 15

// val1 = undefined ?? 10 ?? 20; // Output : 10


// console.log(val1); 

// -------------------------------


// Terniary Opertaor
// Condition ? True : False