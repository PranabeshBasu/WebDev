let str = ["My ", "name ", "is ", "Pranabesh Basu!!"];
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
let fs = concat(str);
console.log(fs);