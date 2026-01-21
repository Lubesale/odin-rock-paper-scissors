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
