// collect user variable
    // what does the user want to input? 
    // make this into userChoice
//generate a computer move
    // randomly generate a computer move
    // store computer move in variable computerChoice
// who wins?
    // if user winns then alert("You Win!")
        // if user === R and computer === S
        // if user === P and computer === R
        // if user === S and computer === P
     // else alert ("Computer Wins!")  

let userScore = 0;
let computerScore = 0;

const whatHasUserSelected = () => {
    let userChoice =  prompt("Rock, Paper or Scissors?");
    userSelection = userChoice.toLowerCase();
    return userSelection;
}  

const whatHasComputerSelected = () => {
    let myArray = ["rock", "paper", "scissors"];
    let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
    alert("Computer Choses: " + computerChoice);
    return computerChoice;
}

const comparison = (userSelection, computerChoice) => {

    if (userSelection === "rock" && computerChoice === "scissors" || userSelection === "scissors" && computerChoice === "paper" || userSelection === "paper" && computerChoice === "rock"){
        alert("You win!");
        userScore++;
    } else if (userSelection === computerChoice) {
        alert("It's a draw!");
    } else {
        alert("You Lose!");
    }
    return result;
}

userSelection= whatHasUserSelected();
computerChoice = whatHasComputerSelected();
alert(comparison(userSelection, computerChoice));


// const game = () => {
//     let userScore = 0;
//     let computerScore = 0; 
//     while (userScore < 3 && computerScore < 3) {   
//         if (winner === true){
//             userScore++;
//         } else{
//             computerScore++;
//         }
//     } alert( " Your Score: " + userScore + " vs Computer Score: " + computerScore);
// }



