const accountId = 123 // Constant Variable
let accountEmail = "sam@gmail.com" 
var accountPassword = "12345"
/*  
  Prefer not to use var
  var is not used because of scope. Its scope is everywhere not inside the block
*/
accountCity = "Delhi"
let accountState; // undefined

// accountId = 3 // Constant can't be changed

accountEmail = "abc@gmail.com"
accountPassword = "abc"
accountCity = "Mumbai"

console.log(accountEmail);

//  Other way to print as a table in single line
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])