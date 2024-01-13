// Global Scope
let a = 100
// const b = 20
// var c = 10

//  Block Scope
if(true) {
     let a = 10 // Cannot access 'a' outside this block of code
    const b = 20 // Cannot access 'b' outside this block of code
    var c = 30 // var scope is outside this block as well

    // console.log("Function: "+a);
    // console.log("Global Value inside function"+this.a);
}

// console.log("Global:" + a);
// console.log("Global: "+ b);
// console.log(c); // Var can be confusing as it can be modified at global level


function one() {
    const userName = "Sam"
    function two() {
        const website = "Youtube"
        // console.log(userName);
    }
    // console.log(website); // we cann't access website as it's scope is only inside function two()
    //  Error was on above line so below lines were not executed
    two();
}

// one();

if(true) {
    const userName = "Sam"
    if(userName === "Sam"){
        const website = "Youtube";
        // console.log(userName +" "+ website);
    }

    // console.log(website); // Error as scope of website is inside the nested if only
}



//  ---------------- Interesting --------------------------------------

//  Calling function before declaration
//  All function declarations are effectively at the top of the scope
console.log(addOne(5)); // No error

//  Function
function addOne(value) {
    return value + 1;
}

// addOne(5)


// ************* IMP *************************

// Function Hoisting Concept

//  Calling function before declaration
//  Function hoisting only works with function declarations — not with function expressions.
addTwo(5) // Error : Because addTwo is variable holding a expression


//  Function but also called as function expression
const addTwo = function(value) {
    return value + 2;
}

// addTwo(5)