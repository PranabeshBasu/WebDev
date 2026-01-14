function getSum(num1, num2) {
    let sum = num1 + num2; //sum var is accessable within Function scope
    return sum;
}
// console.log(sum); It can not be accessed because of function scope
let sum = 45; // global scope;
console.log(sum);
console.log(getSum(2,3));