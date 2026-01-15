let a = 10;
let b = 9;
let c = 20;
if(a > b){
    if(a > c){
        console.log(`${a} is the largest number`);
    }
    else{
        console.log(`${c} is the largest number`);
    }
}
else{
    if(b > c){
        console.log(`${b} is the largest number`);
    }
    else{
        console.log(`${c} is the largest number`);
    }
}