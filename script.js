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


const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const outcome = document.querySelector('.outcome')
const roundResult = document.querySelector('.roundResult')
const playerPoints = document.querySelector('.playerPoints');
const computerPoints = document.querySelector('.computerPoints')
const gameResult = document.querySelector('.gameResult')
const selectionButtons = document.querySelector('.selectionButtons')



const computerPlay = () => {
    const arrayOfChoices = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const computerSelection = arrayOfChoices[randomNum]
    return computerSelection
}





const playRound = (computerSelection, humanSelection) => {

    if (computerSelection == "Rock" && humanSelection == "scissors") {
        compScore++
        roundResult.innerText = "Computer wins, rock beats scissors"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (computerSelection == "Paper" && humanSelection == "rock") {
        compScore++
        roundResult.innerText = "Computer wins, paper beats rock"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (computerSelection == "Scissors" && humanSelection == "paper") {
        compScore++
        roundResult.innerText = "Computer wins, scissors beat paper"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (humanSelection == "rock" && computerSelection == "Scissors") {
        playerScore++
        roundResult.innerText = "You win! rock beats scissors"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (humanSelection == "paper" && computerSelection == "Rock") {
        playerScore++
        roundResult.innerText = "You win! paper beats rock"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (humanSelection == "scissors" && computerSelection == "Paper") {
        playerScore++
        roundResult.innerText = "You win! scissors beats paper"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (humanSelection == "rock" && computerSelection == "Rock") {
        roundResult.innerText = "Its a draw"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (humanSelection == "paper" && computerSelection == "Paper") {
        roundResult.innerText = "Its a draw"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
    } else if (humanSelection == "scissors" && computerSelection == "Scissors") {
        roundResult.innerText = "Its a draw"
        playerPoints.innerText = `You have won ${playerScore} games`
        computerPoints.innerText = `Computer has won ${compScore} games`
        
    }

    checkResult()

    
}

function checkResult() {
    if (compScore == 5) {
        gameResult.innerText = "Computer Wins the game!"
        selectionButtons.removeChild(rockButton)
        selectionButtons.removeChild(paperButton)
        selectionButtons.removeChild(scissorsButton)
        outcome.removeChild(roundResult)
        outcome.removeChild(playerPoints)
        outcome.removeChild(computerPoints)
    } else if (playerScore == 5) {
        gameResult.innerText = "You Won the game!"
        selectionButtons.removeChild(rockButton)
        selectionButtons.removeChild(paperButton)
        selectionButtons.removeChild(scissorsButton)
        outcome.removeChild(roundResult)
        outcome.removeChild(playerPoints)
        outcome.removeChild(computerPoints)
    } else {
        gameResult.innerText = "The first to five wins..."
    }
}
        

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const humanSelection = "rock"
    playRound(computerSelection, humanSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const humanSelection = "paper"
    playRound(computerSelection, humanSelection)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const humanSelection = "scissors"
    playRound(computerSelection, humanSelection)
})
// new function called game, plays round, logs score and keeps track of winner (loops with human inout each time, prompt will get user input)
//invoke loop to play game 
// make sure variables are INSIDE the loop, this way they change each time, if outside the loop they will get one value and it wont chnage as the loop stays inside the loop. 

// const game = () => {
//     // for (i = 0; i < 5; i++) {
//         // let humanSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
//         let computerSelection = computerPlay()
//         console.log(playRound(computerSelection, humanSelection))
//         console.log(`So far Player has won ${playerScore} and Computer has won ${compScore}`)
//     // }

//     if (compScore > playerScore) {
//         return "Computer Wins the game!"
//     } else if (playerScore > compScore) {
//         return "You Won the game!"
//     } else {
//         return "its a bloomin draw"
//     }
// }


// run the game on page refesh in the browser. when you open the page, it will run the JS, see this log in the genral scope and will invoke it straight away.

// console.log(game())


// create ui 

