// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log('DB Connected');
// }

// chai();

//  Function in IIFE
(function chai() {
    //  Named IIFE function
    console.log('DB Connected');
})();

//  1st () -> (Function Definition)
//  2nd () -> Execution of 1st ()
// Avoid polluting global namespace


//  Arrow function for IIFE
(() => {
    //  Unnamed IIFE
    console.log("Hello world!");
})();


// Variable inside IIFE
((user) => {
    console.log(`Hello ${user}`);
})("Sam");

