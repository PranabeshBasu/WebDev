let participants = ["Pranabesh" , "Rajbir", "Pritam", "Prantika", "Rayyan"];
//Destructuring in Arrays
let [winner, FirstRunnerup, SecondRunnerup, ...others] = participants;
console.log("Winner:",winner);
console.log("First:",FirstRunnerup);
console.log("Second:",SecondRunnerup);
console.log(others); 

//Object Destructuring
const student = {
    name: "Pritam Karak",
    class: 9,
    sec: 'c',
    email: "pkarak@gmail.com",
    password: "abcd"
};
let {name: user, class: standard} = student;
console.log(user);
console.log(standard);
