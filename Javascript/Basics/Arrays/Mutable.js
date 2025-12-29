// Strings are immutable
let str = "Pranabesh Basu";
str[2] = "n";
console.log(str);

// Arrays are mutable
let fruits = ["Banana", "Apple", "Orange"];
fruits[1] = "Pinapple";
console.log(fruits);

fruits[13] = "Strawberry";
console.log(fruits);

console.log(fruits.length);