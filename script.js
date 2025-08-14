let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice) {
    
    function getHumanChoice() {
        choice = prompt("Rock, Paper, or Scissors??")
        return choice
        }
    humanChoice = getHumanChoice()
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice)

    function getComputerChoice() {
        let num = Math.floor(Math.random() * 100)
        if (num <=33) {
            return "rock";
        }
        else if (num <=67) {
            return "paper";
        }
        else if (num >=68) {
            return "scissors";
        }
        }
    computerChoice = getComputerChoice()
    console.log(computerChoice)

    if (humanChoice === computerChoice) {
        console.log("You tied!")
    }

    else if (((humanChoice === "rock") && (computerChoice === "scissors")) || ((humanChoice === "scissors") && (computerChoice === "paper")) || ((humanChoice === "paper") && (computerChoice === "rock"))) {
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!!")
        humanScore = ++humanScore
        console.log(humanScore)
        console.log(computerScore)
    }

    else if (((humanChoice === "rock") && (computerChoice === "paper")) || ((humanChoice === "scissors") && (computerChoice === "rock")) || ((humanChoice === "paper") && (computerChoice === "scissors"))) {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + "!!")
        computerScore = ++computerScore
        console.log(humanScore)
        console.log(computerScore)
    }

}
console.log(playRound())