// computer choice, random rock, paper or scissors

// function computerChoice() {
//     let choice = Math.random();

//     if (choice >= 0.67) {
//         let result = "Computer Scissors"
//         return result
//     } else if (choice <= 0.33) {
//         let result = "Computer Rock"
//         return result
//     } else if ((choice > 0.33) && (choice < 0.67)) {
//         let result = "Computer Paper"
//         return result
//     }
// }

let playerScore = 0
let compScore = 0

const computerPlay = () => {
    const arrayOfChoices = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const computerChoice = arrayOfChoices[randomNum]
    return computerChoice
}



const playRound = (computerSelection, humanSelection) => {


    if (computerSelection == "Rock" && humanSelection == "scissors") {
        compScore++
        return "Computer wins, rock beats scissors"
        
    } else if (computerSelection == "Paper" && humanSelection == "rock") {
        compScore++
        return "Computer wins, paper beats rock"
    } else if (computerSelection == "Scissors" && humanSelection == "paper") {
        compScore++
        return "Computer wins, scissors beat paper"
    } else if (humanSelection == "rock" && computerSelection == "Scissors") {
        playerScore++
        return "You win! rock beats scissors"
    } else if (humanSelection == "paper" && computerSelection == "Rock") {
        playerScore++
        return "You win! paper beats rock"
    } else if (humanSelection == "scissors" && computerSelection == "Paper") {
        playerScore++
        return "You win! scissors beats paper"
    } else if (humanSelection == "rock" && computerSelection == "Rock") {
        return "Its a draw"
    } else if (humanSelection == "paper" && computerSelection == "Paper") {
        return "Its a draw"
    } else if (humanSelection == "scissors" && computerSelection == "Scissors") {
        return "Its a draw"
    }
}


// new function called game, plays round, logs score and keeps track of winner (loops with human inout each time, prompt will get user input)
//invoke loop to play game 
// make sure variables are INSIDE the loop, this way they change each time, if outside the loop they will get one value and it wont chnage as the loop stays inside the loop. 

const game = () => {
    for (i = 0; i < 5; i++) {
        let humanSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = computerPlay()
        console.log(playRound(computerSelection, humanSelection))
        console.log(`So far Player has won ${playerScore} and Computer has won ${compScore}`)
    }

    if (compScore > playerScore) {
        return "Computer Wins the game!"
    } else if (playerScore > compScore) {
        return "You Won the game!"
    } else {
        return "its a bloomin draw"
    }
}


// run the game on page refesh in the browser. when you open the page, it will run the JS, see this log in the genral scope and will invoke it straight away.

console.log(game())

