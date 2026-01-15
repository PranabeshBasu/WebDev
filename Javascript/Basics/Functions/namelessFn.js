//1
let sum = function(a,b) { // Nameless Function
    return a + b;
}
console.log(sum(1,2)); //calling the function using variable name

//2
let hello = function() {
    console.log("Hello");
}
hello();
hello = function() {
    console.log("No Hello!! only NAMASTE"); //Updating the function expression
}
hello();