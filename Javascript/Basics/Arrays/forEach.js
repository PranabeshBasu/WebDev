let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    console.log(el);
}
arr.forEach(print);

// Directly passing a function
arr.forEach(function(el) {
    console.log(el);
});

//Passing an arrow function
arr.forEach((el) => {
    console.log(el);
});

// Usage of forEach for an array of objects
let arr1 = [
    {
        name: "Pranabesh Basu",
        marks: 90
    },
    {
        name: "Manabesh Basu",
        marks: 92
    },
    {
        name: "Rajashree Basu",
        marks: 95
    }
];
arr1.forEach((el) => {
    console.log(el.name);
    console.log(el.marks);
})