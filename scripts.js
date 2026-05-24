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

const resultsMessage = document.querySelector('.round-results');
const message = document.createElement('h3');
resultsMessage.appendChild(message);




//Function to play a round of rock, paper, scissors and log keep score
function playRound(humanSelection, computerSelection){
	if (humanSelection=="paper" && computerSelection=="rock"){
		humanScore++;
		message.textContent = "Human Wins!!";
	}else if(humanSelection=="paper" && computerSelection=="scissors"){
	    computerScore++;
	    message.textContent = "Computer Wins!";
	}else if(humanSelection=="paper" && computerSelection=="paper"){
	    message.textContent = "It's a tie!";
	}else if (humanSelection=="rock" && computerSelection=="scissors"){
	    humanScore++;
	    message.textContent = "Human Wins!!";
	}else if(humanSelection=="rock" && computerSelection=="paper"){
	    computerScore++;
	    message.textContent = "Computer Wins!";
	}else if(humanSelection=="rock" && computerSelection=="rock"){
	    message.textContent = "It's a tie!";
    }else if (humanSelection=="scissors" && computerSelection=="paper"){
	    humanScore++;
	    message.textContent = "Human Wins!!";
	}else if(humanSelection=="scissors" && computerSelection=="rock"){
	    computerScore++;
	    message.textContent = "Computer Wins!";
	}else if(humanSelection=="scissors" && computerSelection=="scissors"){
	    message.textContent = "It's a tie!";
    }
}

//Adds score to scoreboard initialized at 0
const scoreBoard = document.querySelector('.score');
const scoreList = document.createElement('ul');

const humanList = document.createElement('li');
humanList.textContent = "Human: " + humanScore + " points.";
scoreList.appendChild(humanList);

const computerList = document.createElement('li');
computerList.textContent = "Computer: " + computerScore + " points.";
scoreList.appendChild(computerList);

scoreBoard.appendChild(scoreList);

//Each button plays a round and logs the winner and the current score
//Math.floor(Math.random()*3) makes sure the number is 1, 2 or 3 and always integer
const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () => {
	playRound('rock', getComputerChoice(Math.floor(Math.random()*3)).toLowerCase());
	humanList.textContent = "Human: " + humanScore + " points.";
	computerList.textContent = "Computer: " + computerScore + " points.";
});

const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () => {
	playRound('paper', getComputerChoice(Math.floor(Math.random()*3)).toLowerCase());
	humanList.textContent = "Human: " + humanScore + " points.";
	computerList.textContent = "Computer: " + computerScore + " points.";
});

const buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', () => {
	playRound('scissors', getComputerChoice(Math.floor(Math.random()*3)).toLowerCase());
	humanList.textContent = "Human: " + humanScore + " points.";
	computerList.textContent = "Computer: " + computerScore + " points.";
});



