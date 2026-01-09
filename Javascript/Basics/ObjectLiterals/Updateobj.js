let student = {
    name : "Pranabesh Basu",
    age : 21,
    sec : 'C',
    roll : 19,
    city : "Kolkata",
    group : 2
};
console.log(student);
student.age = 22; // updating values
console.log(student);
student.sub = ["CN", "OOP", "DSA", "OS", "DBMS"]; //adding new property
console.log(student);
delete student.group; //deleting existing property
console.log(student);

