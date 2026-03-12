//Practice questions

//checking multiple of 10 or not
let arr = [5, 10, 15, 20, 25];
console.log(arr.every((el) => el % 10 == 0));

//Finding the minimum element 
let nums = [1, 3, 5, 0, 9];
let min = nums.reduce((min, el) => {
    if (min < el) {
        return min;
    }
    else {
        return el;
    }
})
console.log(min);