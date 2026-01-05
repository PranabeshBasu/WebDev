let arr = [2, 7, 8, 9, 20, 0];
let largest = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(`Largest Element present in the array is ${largest}`);