//player score variable to update the score 
let HumanScore = 0;
let ComputerScore = 0;

//function for the computer choice 
function getComputerChoice(){
    let number = Math.random();

    if(number >= 0 && number <= 0.3){
        return "PAPER";
    }
    if(number > 0.3 && number <= 0.6){
        return "SCISSOR";
    }else{
        return "ROCK";
    }
}

//function for the human choice 
function getHumanChoice(){
    let choose = prompt(`Enter your choice between : "ROCK" , "PAPER" and "SCISSOR"`);

    return choose = choose.toUpperCase();
}

// logic to play for single round 
function playRound(humanChoice , computerChoice){

    //condition for tie 
    if(humanChoice.toUpperCase() == computerChoice){
        console.log(`It's a Tie! ${humanChoice.toUpperCase()} and ${computerChoice} are equal`);
    }
    // condition for winning case 
    if(humanChoice.toUpperCase() == "PAPER" && computerChoice == "ROCK"){
        console.log(`You Win! ${humanChoice.toUpperCase()} beats ${computerChoice}`);
        HumanScore++;
    }
    if(humanChoice.toUpperCase() == "ROCK" && computerChoice == "SCISSOR"){
        console.log(`You Win! ${humanChoice.toUpperCase()} beats ${computerChoice}`);
        HumanScore++;
    }
    if(humanChoice.toUpperCase() == "SCISSOR" && computerChoice == "PAPER"){
        console.log(`You Win! ${humanChoice.toUpperCase()} beats ${computerChoice}`);
        HumanScore++;
    }

    // condition for loosing case 
    if(humanChoice.toUpperCase() == "PAPER" && computerChoice == "SCISSOR"){
        console.log(`You loose! ${computerChoice} beats ${humanChoice.toUpperCase()}`);
        ComputerScore++
    }
     if(humanChoice.toUpperCase() == "ROCK" && computerChoice == "PAPER"){
        console.log(`You loose! ${computerChoice} beats ${humanChoice.toUpperCase()}`);
        ComputerScore++
    }
     if(humanChoice.toUpperCase() == "SCISSOR" && computerChoice == "ROCK"){
        console.log(`You loose! ${computerChoice} beats ${humanChoice.toUpperCase()}`);
        ComputerScore++
    }
}

// function to play entire game 5 times 
function playGame(){
    let i = 0;
    while(i<5){
        const humanSelection =getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection , computerSelection);

        i++;
    }
}

// logic to show the score of the players 
if(HumanScore == ComputerScore){
    console.log();
    console.log("It's aTie");
    console.log(`Your Score : ${HumanScore} ans Computer Score : ${ComputerScore} are equal`);
}
if(HumanScore > ComputerScore){
    console.log();
    console.log("You Win!");
    console.log(`Your Score is : ${HumanScore} `);
    console.log(`Computer Score is ${ComputerScore}`);
}else{
    console.log();
    console.log("You loose");
    console.log(`Your Score is : ${HumanScore} `);
    console.log(`Computer Score is ${ComputerScore}`);
}

// calling the function for playing game 5 times 
playGame();