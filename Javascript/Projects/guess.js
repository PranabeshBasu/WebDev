let no = prompt("enter your last range : ")
console.log(`The hidden no will be generated between 1 to ${no}`);
let hidden = Math.floor( Math.random() * no ) + 1;
let guess = prompt("now guess the number: ");
while(hidden != guess) {
    if(hidden == guess) console.log("You guessed it right");
    else console.log("You Failed");
    let choice = prompt("Enter your choice try or quit");
    if(choice == "try"){
       guess = prompt("again guess the number: ");
    }
    else if(choice == "quit"){
        console.log("You quitted!!");
        break;
    }
}