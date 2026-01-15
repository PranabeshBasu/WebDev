let start = 1;
let end = 10;
function Random(start,end) {
    let diff = end - start;
    let rand = Math.floor(Math.random() * diff) + start;
    return rand;
}
console.log(Random(start,end));
console.log(Random(start,end));
console.log(Random(start,end));
console.log(Random(start,end));
console.log(Random(start,end));
console.log(Random(start,end));