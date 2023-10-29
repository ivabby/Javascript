// Dates

let myDate = new Date(); // Date is Object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());


let myCreatedDate = new Date(2023,0,12,5,60,20); // Month starts from index 0 in JS
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // Convert time to seconds

let newDate = new Date();
// console.log(newDate.getDate());

console.log(newDate.toLocaleString('default',{weekday:"long"}));
