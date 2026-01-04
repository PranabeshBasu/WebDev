let fruits = ["Apple", "Banana", "Orange", "Mango", "Pinapple"];
for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}
// Now if we have given condition to access only the fruits with odd indices
console.log("Printing fruits present at the odd indices: ");
for(let i = 1; i < fruits.length; i++){
    if(i % 2 != 0){
        console.log(fruits[i]);
    }
}