const marvelHeroes = ["Iron Man","Thor","Spiderman"]
const dcHeroes = ["Superman" , "Batman"]

// marvelHeroes.push(dcHeroes) // Insert array as array
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][0]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
const allHeroes = [...marvelHeroes , ...dcHeroes] // Spread Heroes
console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,[6,7,[8,9]]]]

const flatArray = anotherArray.flat(Infinity);
console.log(flatArray);

console.log(Array.isArray("Sam")); // Check if given object is array or not
console.log(Array.from("Sam")); // Convert String to Array
console.log(Array.from({name: "Sam"})); // Can't convert object to array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Creates array from arguments