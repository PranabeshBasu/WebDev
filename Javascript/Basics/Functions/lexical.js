function outerFunc() {
    let x = 9;
    let y = 10;
    // console.log(a); can not be accessed here
    function innerFunc() {
        let a = 12;// this a variable can not be accessed outside this inner function
        console.log(x); // These variables can be accessed because of lexical scoping
        console.log(y);
    }
innerFunc();
}
// console.log(innerFunc); can not be accessed only can be accessed within the scope of outerFunc()
outerFunc();