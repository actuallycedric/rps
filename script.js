const holder = document.querySelector(".buttonHolder");
const start = document.querySelector("#start");

let rock, paper, scissors;

let humanScore = 0;
let computerScore = 0;
let matchStarted = false;


const winnerDialogue = document.querySelector(".whoWon");
const scoreboard = document.querySelector(".scoreboard");

function computerChoice(){
    let i = Math.random() * 3; // randNum to randomize computer choices

    if(0 <= i && i <= 1) return "rock";
     if(1 <= i && i <= 2) return "paper";
      if(2 <= i && i <= 3) return "scissors"; 
}
function round(human, computer){
    if(checkWinner()){
        rock.remove();
        paper.remove();
        scissors.remove();
    }

    if((human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human == "scissors" && computer === "paper")){
            humanScore++;
            winnerDialogue.innerText = "Human wins!"; // win conditions for human
    }
    else{
        if(human === computer){
        winnerDialogue.innerText = "Tie!"; // tie condition
        }
        else{
            computerScore++;
            winnerDialogue.innerText = "Computer wins!"; // the rest is losses
        }
    }

    scoreboard.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner(){
    if(humanScore === 5 || computerScore === 5){ // first to 5
        
         rock.removeEventListener("click", () => {
            round("rock", computerChoice());
        });

        paper.removeEventListener("click", () => {
            round("paper", computerChoice());
        });

        scissors.removeEventListener("click", () => {
            round("scissors", computerChoice());
        });

        matchStarted = false;

        return true;
    }
    return false;

    
}



function match(){
    matchStarted = true;

    console.log("Match started");

    rock = document.createElement("button");
    paper = document.createElement("button");
    scissors = document.createElement("button");
    rock.innerText = "rock";
    paper.innerText = "paper";
    scissors.innerText = "scissors";

    holder.appendChild(rock);
    holder.appendChild(paper);
    holder.appendChild(scissors);

    humanScore = 0;
    computerScore = 0;
    scoreboard.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;

    rock.addEventListener("click", () => {
        round("rock", computerChoice());
    });

    paper.addEventListener("click", () => {
        round("paper", computerChoice());
    });

    scissors.addEventListener("click", () => {
        round("scissors", computerChoice());
    });

    
}

start.addEventListener("click", () => {
    if(!matchStarted){
        match();
    }
});

