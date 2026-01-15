//These are the separate functions
let odd = function(n) {
    console.log(!(n % 2 == 0));
}

let even = function(n) {
    console.log(n % 2 == 0);
}
// even(10);
// odd(3);

//OddEvenFactory function will return custom functions as per request

function OddEvenFactory(request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("Wrong request entered");
    }
}

let request = "odd"; //odd/even
let func = OddEvenFactory("odd");
console.log(func);
func(3);