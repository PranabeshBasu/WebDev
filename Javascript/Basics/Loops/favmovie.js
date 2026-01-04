const favmovie = "Avatar";
let guess = prompt("Enter my favorite movie name");
while(guess != favmovie){
    if(guess == "quit"){
        console.log("You quit!");
        break; //The loop will not execute further! it will stop here.
    }
    console.log("You guessed it wrong!!");
    guess = prompt("Enter my favorite movie name");
}
if(guess == favmovie){
    console.log(`Yes ${guess} is my favorite movie`);
}