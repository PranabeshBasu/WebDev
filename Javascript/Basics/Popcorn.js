let price = 250;
let size;
if(price == 250){
    size = "XL";
}
else if(price == 200){
    size = "L";
}
else if(price == 100){
    size = "M";
}
else if(price == 50){
    size = "S";
}
else{
    console.log("Invalid size");
}
console.log(size);