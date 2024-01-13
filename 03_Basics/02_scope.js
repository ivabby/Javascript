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