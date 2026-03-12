let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenarr = arr.filter((el) => el % 2 == 0);
let oddarr = arr.filter((el) => el % 2 != 0);
console.log(evenarr);
console.log(oddarr);