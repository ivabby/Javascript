const name = "sam"
const repoCount = 20

// console.log(name+ repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("God Of War"); // Key-Value Pair [Index : Character]
// console.log(gameName);

// console.log(gameName.length);
// console.log(gameName.charAt(0));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('W'));
// console.log(gameName.substring(0,5)); // End Index is not included

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, -3);

console.log(citrus);
/*
Negative index counts back from the end of the array — if end < 0, 
end + array.length is used.

If end < -array.length, 0 is used.

If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.

If end is positioned before or at start after normalization, nothing is extracted.
*/