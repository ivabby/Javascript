const user = {
    userName: "Sam",
    price: 9999,
    welcomeMessage: function() {
        console.log(`${this.userName} Welcome to website`); // this is used to get current context

        console.log(this); // Print current context
    }

}

// user.welcomeMessage; // No output : As welcomeMessage is function

// user.welcomeMessage();
// user.userName = "Mohan";
// user.welcomeMessage();

// console.log(this); // Output: {}  - Because we are inside node
//  If we print the above inside our browser : Output  will be the windows object

function chai() {
    let userName = "Sam"
    console.log(this);

    
    console.log(this.userName); // Output: undefined
    //  This as context will be used inside object only not inside function
}

// chai();

const arrowFunction = () => {
    let userName = "Sam"
    // console.log(this); // Output: {}
    // With arrow functions the this keyword always represents the object that defined the arrow function.
    // In our case the object was {}

    // console.log(this.userName);
}

arrowFunction();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// Implicit return
const addTwo = (num1,num2) => num1 + num2;

console.log(addTwo(2,3));