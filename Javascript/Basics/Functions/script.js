// Basic Function definition 
function printHello() {
    console.log("Hello");
}
function printName() {
    console.log("Pranabesh Basu");
}
function isAdult() {
    let age = 18;
    if (age >= 18) console.log("Adult");
    else console.log("Not Adult");
}
function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

//function calling
print1to5();
printHello();
printName();
isAdult();