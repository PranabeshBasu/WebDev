let str = "abAcdeIOyou";
function Vowels(str) {
    let check = str.toLowerCase();
    let count = 0;
    console.log(check);
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == 'a' ||
           str.charAt(i) == 'e' ||
           str.charAt(i) == 'i' || 
           str.charAt(i) == 'o' || 
           str.charAt(i) == 'u') {
            count++;
        }
    }
    return count;
}
console.log(Vowels(str));