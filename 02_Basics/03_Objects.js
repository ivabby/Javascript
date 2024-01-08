// Singleton
// const tinderUser = new Object();

//Object.create

// Symbols
const mySym = Symbol("Key1");

// Object Literals
const JsUser = {
  name: "Sam", // System converts key name to "name" - string
  "full name": "Sam Singh",
  age: 20,
  location: "Pune",
  email: "sam@gmail.com",
  isLoggedIn: false,
  lastLoginDats: ["Monday", "Saturday"],
  // mySym: "My Key1", // String value not used as Symbol
  [mySym]: "Key1"
};

// Ways to access properties of Object
console.log(JsUser.name);
// console.log(JsUser[name]); // Error
console.log(JsUser["name"]);

console.log(JsUser["full name"]); // Can't write like JsUser.full name

console.log(JsUser[mySym]);

// JsUser.email = "samsing@gmail.com"
// Object.freeze(JsUser) // No more modification can be done on object
// JsUser.age = 50 // Willn't reflect in object
// console.log(JsUser);


JsUser.greeting = function() {
  console.log("Hello JS User");
} // Function can be defined inside object and reference can be a variable


JsUser.greeting(); // Call function

JsUser.greeting2 = function() {
  console.log(`Hello JS User ${this.name}`); 
  // this.name to refer to current object reference
}

JsUser.greeting2();