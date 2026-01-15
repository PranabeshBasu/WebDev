// Write a JavaScript function that returns array elements larger than a number

let num = 8;
let arr = [1, 2, 5, 9, 4];

let large = function(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) 
            return arr[i];
    }
}
console.log(large(arr,num));