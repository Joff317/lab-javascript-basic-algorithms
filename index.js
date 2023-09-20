// Iteration 1: Names and Input
// Driver Name
let hacker1 = "Zed";

console.log(`The driver's name is ${hacker1}`);

// Navigator Name
let hacker2 = "AZed";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let newDriverChar = hacker1.toUpperCase();
let newName = ""
for (let i = 0; i < newDriverChar.length; i++){
   newName += (newDriverChar[i]) + " "
}
console.log(newName);

// let separatedBySpace = newDriverChar.split("", hacker1.length).join(" ");
// console.log(separatedBySpace);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--){
   reverseName += hacker2[i]
}
// let reverseName = hacker2.split("").reverse().join("");
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:

if(hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2){
   console.log("Yo, the navigator goes first, definitely.");
} else {
   console.log("What?! You both have the same name?");
}

// let newArray = [];
// newArray.push(hacker1, hacker2);
// console.log(newArray);

// let sortByLexicographic = newArray.sort((a, b) => {
//   if (a > b) {
//     console.log("The driver's name goes first.");
//   } else if (a < b) {
//     console.log("Yo, the navigator goes first, definitely.");
//   } else {
//     console.log("What?! You both have the same name?");
//   }
// });



