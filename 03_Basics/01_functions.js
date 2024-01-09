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

console.log(loginUserMessage("Sam"));
console.log(loginUserMessage()); // Output : Undefined just logged in