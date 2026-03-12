let arr = [1, 2, 3, 4, 5];
let fact = arr.reduce((fact, el) => {
    console.log(fact);
    return fact * el;
});
console.log(fact);

//Finding Maximum element of an array using reduce function
let arr1 = [1, 2, 9, 5, 10, 20, 3, 4];

let max = arr1.reduce((m, el) => {
    if (m > el) {
        return m;
    }
    else {
        return el;
    }
});
console.log(`max element: ${max}`);
