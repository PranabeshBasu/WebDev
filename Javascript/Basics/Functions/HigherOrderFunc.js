function PrintHello(func,n) { /* This function is a Higher Order Function
    because it takes a function as an input*/
    for(let i = 0; i <= n; i++) {
        func();
    }
}

let sayHello = function(){
    console.log("Hello");
}
PrintHello(sayHello,10);