//Usage of return keyword
function sum(a, b) {
    return a+b;
}
console.log(sum(sum(2,3),4));

function isAdult(age) {
    if(age >= 18){
        return "Adult";
    }
    else{
        return "Not Adult";
    }
}
console.log(isAdult(23));

//After writing return keyword in a function the execution of the function stops
function twoSum(a,b) {
    console.log("Hello1");
    console.log("Hello2");
    return a+b;
    console.log("Hello3");
}
console.log(twoSum(5,3));