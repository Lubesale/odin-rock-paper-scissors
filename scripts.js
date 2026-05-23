//Function to get the randomized computer choice.
function getComputerChoice(randomNumber){
	
	if(randomNumber==0){
		return "Rock";
	}else if(randomNumber==1){
		return "Paper";
	}else if(randomNumber==2){
		return "Scissors";
	}
}

//Initializes the game score at 0, could probably remove and it would still work
let humanScore=0;
let computerScore=0;

//Function to play a round of rock, paper, scissors and log keep score
function playRound(humanSelection, computerSelection){
	if (humanSelection=="paper" && computerSelection=="rock"){
		humanScore++;
		console.log("Human Wins!");
	}else if(humanSelection=="paper" && computerSelection=="scissors"){
	    computerScore++;
	    console.log("Computer Wins!");
	}else if(humanSelection=="paper" && computerSelection=="paper"){
	    console.log("It's a tie!");
	}else if (humanSelection=="rock" && computerSelection=="scissors"){
	    humanScore++;
	    console.log("Human Wins!");
	}else if(humanSelection=="rock" && computerSelection=="paper"){
	    computerScore++;
	    console.log("Computer Wins!");
	}else if(humanSelection=="rock" && computerSelection=="rock"){
	    console.log("It's a tie!");
    }else if (humanSelection=="scissors" && computerSelection=="paper"){
	    humanScore++;
	    console.log("Human Wins!");
	}else if(humanSelection=="scissors" && computerSelection=="rock"){
	    computerScore++;
	    console.log("Computer Wins!");
	}else if(humanSelection=="scissors" && computerSelection=="scissors"){
	    console.log("It's a tie!");
    }
}

//Each button plays a round and logs the winner and the current score
//Math.floor(Math.random()*3) makes sure the number is 1, 2 or 3 and always integer
const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () => {
	playRound('rock', getComputerChoice(Math.floor(Math.random()*3)).toLowerCase());
	console.log("Human: " + humanScore + " points.");
	console.log("Computer: " + computerScore + " points.");
});

const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () => {
	playRound('paper', getComputerChoice(Math.floor(Math.random()*3)).toLowerCase());
	console.log("Human: " + humanScore + " points.");
	console.log("Computer: " + computerScore + " points.");
});

const buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', () => {
	playRound('scissors', getComputerChoice(Math.floor(Math.random()*3)).toLowerCase());
	console.log("Human: " + humanScore + " points.");
	console.log("Computer: " + computerScore + " points.");
});

const scoreBoard = document.querySelector('.score');
