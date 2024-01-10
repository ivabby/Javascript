// Function
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("M");
}

// sayMyName();

function addTwoNumber(number1,number2 ) { // Value passed are parameters
    // console.log(number1 + number2);

    // let result = number1 + number2;
    // return result;

    return number1 + number2;

    console.log("END of function"); // After return no lines are executed
    //  No errors thrown
}

// addTwoNumber(1,2); // Arguments
// addTwoNumber(1,"a") // Output : 1a
// addTwoNumber(1,null) // Output: 1

const result = addTwoNumber(1,2) // If Method didn't return anything so output is undefined
// console.log("Result: "+result);


// ---------------------------------------------------------------------------------------------------


function loginUserMessage(userName = "Pankaj") { // Define default value
    if(!userName) { // !userName is equivalent to userName === undefined
        return "Please enter a username";
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Sam"));
// console.log(loginUserMessage()); // Output : Undefined just logged in

// function calculateCartPrice(...num1) { // Output: num1 = 2,400,500,100
//     return num1;
// }


// function calculateCartPrice(val1,val2,...num1) { // Output: 2,400 num1 = 500,100
//     return num1;
// } 

// function calculateCartPrice(...num1,val1,val2) { // Output: Error as rest parameter needs to be last parameter
//     return num1;
// }


// console.log(calculateCartPrice(2,400,500,100));

const user = {
    name: "Sam"
}

function handleObject(anyObject) {
    console.log(`Name: ${anyObject.name}`);
}

// handleObject(user);

handleObject({name: "Mohan"});