// computer choice, random rock, paper or scissors

function computerChoice() {
    let choice = Math.random();

    if (choice >= 0.67) {
        let result = "Computer Scissors"
        return result
    } else if (choice <= 0.33) {
        let result = "Computer Rock"
        return result
    } else {
        return result
    }
}



// play a round, human input vs computer input, humans should be case in- sensitive. return a string with the result. 


function round() {
    let computer = computerChoice();
    let human = prompt("Rock, Paper or Scissors Sir?").toLowerCase();
    

    if (computer === "Computer Rock" && human === "scissors") {
        alert("Computer wins")
    } else if (computer === "Computer Paper" && human === "rock") {
        alert("Computer wins")
    } else if (computer === "Computer Scissors" && human === "paper") {
        alert("Computer wins")
    } else if (human === "rock" && computer === "Computer Scissors") {
        alert("You win!")
    } else if (human === "paper" && computer === "Computer Rock") {
        alert("You win!")
    } else if (human === "scissors" && computer === "Computer Paper") {
        alert("You win!")
    } else if (human === "rock" && computer === "Computer Rock") {
        alert("Its a draw")
    } else if (human === "paper" && computer === "Computer paper") {
        alert("Its a draw")
    } else if (human === "scissors" && computer === "Computer Scissors") {
        alert("Its a draw")
    }
}

// new function called game, plays round, logs score and keeps track of winner (loops with human inout each time, prompt will get user input)