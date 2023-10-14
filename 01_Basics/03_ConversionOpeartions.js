let score = false

console.log(typeof score);
console.log(typeof(score)); // Same score

let valueInNumber = Number(score) // Convert to Number
console.log(typeof valueInNumber);

console.log(valueInNumber); 
/**
 * NaN - Not a number. Occurs when we convert to number and it contains value
 * other than number
 */

/**
 * false -> 0
 * true -> 1
 * undefined/String with characters and special characters -> NaN
 */

let isLoggedIn;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn+" "+booleanIsLoggedIn);

/**
 * 1 -> true
 * 0 -> false
 * "" -> false
 * "abc" -> true
 * null -> false
 * undefined -> false
 */

let someNumber
let stringNumber = String(someNumber)

console.log(typeof stringNumber+" "+stringNumber);
/**
 * 33 -> 33
 * null -> null
 * undefined -> undefined
 */


/**
 * Opeartions
 */

console.log(1+"2");   // 12
console.log("1"+2);   // 12
console.log(1+2+"2"); // 32
console.log(1+"2"+2); // 122

// Operation of string are confusion
//  Addition is done based on starting value