const myArr = [0,1,2,3,4,5,true,"sam"];
const myHero = ["Iron Man","Captain America"]
const myArr2 = new Array(1,2,3,4)
// JS array are resizeable

// console.log(myArr[6]);

//  Shallow Copy - Same reference / Deep Copy - Different Reference

// Array Methods

// myArr.push(6) // Insert at end
// myArr.push(7)
// myArr.pop() // Delete from end

// myArr.unshift(9) // Insert at starting
// myArr.shift(); // Remove from Starting

// console.log(myArr.includes(9)); // Check if value is present
// console.log(myArr.indexOf(9)); // -1 if value doesn't exist

// console.log(myArr);


const newArr = myArr.join() // Converts array into string
// console.log(myArr);
// console.log(newArr);

// Slice , Splice
const myNewArr = myArr.slice(1,3) // Print elements from index 1 to 2. Exclude 3
console.log(myArr);
console.log(myNewArr);

const myNewArr2 = myArr.splice(1,3) // Print elements from index 1 to 3.
//  Deletes element from index 1 to 3 from original array also.
console.log(myArr);
console.log(myNewArr2);