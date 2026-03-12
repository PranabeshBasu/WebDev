//Spread Operator in JavaScript
let arr = [1, 2, 3, 4, 7, 9, 10, 34, 50, 2];
console.log(...arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));
console.log(..."Pranabesh Basu");

//Spread operator usage for Array Literals
let arr1 = [1, 2, 3, 4, 5];
let newarr = [...arr1];
console.log(newarr);

let charArr = [..."My name is Pranabesh Basu"];
console.log(charArr);

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let nums = [...even, ...odd];
console.log(nums);

//Spread operator usage for Object Literals
let details = {
    email: "pbasu@gmail.com",
    password: "1234"
}
console.log(details);
//spreading it into a new object
let finalDetails = {...details, countrycode: "IN"};
console.log(finalDetails);
//spreading array into a object
let no = [1, 4, 5, 7];
let obj = {...no};
console.log(obj);