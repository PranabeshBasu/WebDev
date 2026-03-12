function sum(a, b = 2) {
    return a + b;
}
console.log(sum(1));
console.log(sum(1,3)); // default value of b will be replaced

function sub(a = 1, b) {
    return a - b;
}
console.log(sub(2)); // NaN 2 will be assigned to a only b will be undefined