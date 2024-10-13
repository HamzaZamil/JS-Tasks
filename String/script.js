let a = "Welcome to Orange";

console.log(a.toUpperCase(), "'UpperCase'");
console.log(a.slice(8, 11).toUpperCase(), "'Slice & UpperCase'");
console.log(a.replace("to", "from"), "'Replace'");
console.log(a.toLowerCase(), "'LowerCase'");
console.log(a.length, "length");
console.log(`Welcome to "Orange"`, "'Using Backtecks'");
console.log(a + " Jordan", "'Concatination'");

// Cactus example
// let sample = "cactus";
// let firstLetter = sample.charAt(0);
// let count = 0;
// let result = sample.replace(new RegExp(firstLetter, "g"), (match) => {
//   count++;
//   return count === 2 ? "*" : match;
// });
// console.log(result, "replacing c with star");

let b = "cactus";
console.log(b.replace(b.charAt(2), "*"), "'Replace & charAt'");
