console.log("Hello from JavaScript");

let randomNumber=Math.floor(Math.random()*3);

function getComputerChoice(){
	
	if(randomNumber==0){
		return "Rock";
	}else if(randomNumber==1){
		return "Paper";
	}else if(randomNumber==2){
		return "Scissors";
	}
}

const computerChoice = getComputerChoice(randomNumber).toLowerCase();

console.log("The computer chose " + computerChoice);

function getHumanChoice(){
	return prompt("Choose Rock, Paper or Scissors");
}

const humanChoice= getHumanChoice().toLowerCase();
console.log("You chose " + humanChoice);

let humanScore=0;
let computerScore=0;

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

playRound(humanChoice, computerChoice);
console.log("Human: " + humanScore + " points.");
console.log("Computer: " + computerScore + " points.");