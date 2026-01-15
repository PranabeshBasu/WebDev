let num = 12;
if((num % 3 === 0) && ((num+1 === 15) || (num-1 === 11))){
    console.log(`${num} is correct`);
}
else{
    console.log("Invalid");
}