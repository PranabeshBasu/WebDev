let num = 287152;
let sum = 0;
while(num > 0){
    let lastdigit = num % 10;
    sum += lastdigit;
    num = Math.floor(num/10);
}
console.log(`The sum of the digits of the number is ${sum}`);