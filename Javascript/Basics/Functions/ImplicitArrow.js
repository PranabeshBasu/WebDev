// For single value return we can remove the return statement of the arrow function

const sum = (a,b) => (a+b);
console.log(sum(2,3));

const mult = (a,b) => (a*b);
console.log(mult(3,3));

const pow = (a,b) => (a**b);
console.log(pow(2,3));