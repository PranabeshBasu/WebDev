//Example: str=“abcdabcdefgggh” 
// ans=“abcdefgh”
let str = "abcdabcdefgggh";
console.log(str);
function Unique(str) {
    let u = "";
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if (u.indexOf(char) == -1) { // -1 means element not added yet
            u += char;

        }
    }
    return u;
}
let finalStr = Unique(str);
console.log(finalStr);