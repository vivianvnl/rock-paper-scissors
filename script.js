function playGame(playRound) {

let humanScore = 0
let computerScore = 0

confirm("Ready to start???")

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
            confirm("Computer said: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!\n\n" + "You tied!\n" + humanScore + " - " + computerScore);
        }

        else if (((humanChoice === "rock") && (computerChoice === "scissors")) || ((humanChoice === "scissors") && (computerChoice === "paper")) || ((humanChoice === "paper") && (computerChoice === "rock"))) {
            console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!!")
            humanScore = ++humanScore
            confirm("Computer said: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!\n\n" + "You win this round!\n" + humanScore + " - " + computerScore);
        }

        else if (((humanChoice === "rock") && (computerChoice === "paper")) || ((humanChoice === "scissors") && (computerChoice === "rock")) || ((humanChoice === "paper") && (computerChoice === "scissors"))) {
            console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + "!!")
            computerScore = ++computerScore
            confirm("Computer said: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!\n\n" + "You lose this round!\n" + humanScore + " - " + computerScore);
        }

    }

for (let i = 1; i <= 5; i++) {
    playRound()
    console.log(humanScore)
    console.log(computerScore)
}

if (humanScore === computerScore) {
    console.log("You tied!!! " + humanScore + " - " + computerScore)
    alert("Get your revenge next time!!!\n\nFinal Score: " + humanScore + " - " + computerScore);
}

if (humanScore > computerScore) {
    console.log("You win!!! " + humanScore + " - " + computerScore)
    alert("Congrats!!! You win!!!\n\nFinal Score: " + humanScore + " - " + computerScore);
}

if (computerScore > humanScore) {
    console.log("You lose!!! " + humanScore + " - " + computerScore)
    alert("Awwwh...You lose!!!\n\nFinal Score: " + humanScore + " - " + computerScore);
}

}

playGame()