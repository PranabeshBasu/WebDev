// Creating methods for an Object
const calculator = {
    add: function(a ,b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mult: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        return a / b;
    }
};
console.log(calculator.add(5,3));
console.log(calculator.div(5,3));
console.log(calculator.div(10,2));
console.log(calculator.mult(3,4));
