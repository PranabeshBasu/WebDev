let arr = [1, 2, 3, 4, 5];
let double = arr.map((el) => {
    return el * 2;
});
console.log(double);
let students = [
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
let gpa = students.map((el) => {
    return el.marks/10;
})
console.log(gpa);