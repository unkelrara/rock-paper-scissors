let result = ["rock", "paper", "scissors"];
function computerPlay() {
    return result[Math.floor(Math.random() * result.length)];

}
let playerCount = 0;
let computerCount = 0;
let playerInput = "rock";/*prompt("Rock, paper or scissors?")*/
let roundResult = round();
let computerResult;
function round() {
    let playerInput = prompt("Rock, paper or scissors?");
    let computerResult = computerPlay();
    console.log("computer="+computerResult);
    console.log("player="+playerInput);
    if ((playerInput.toLowerCase() === "rock" && computerResult === "scissors") ||
        (playerInput.toLowerCase() === "paper" && computerResult === "rock") ||
        (playerInput.toLowerCase() === "scissors" && computerResult === "paper")) {
        playerCount++
        console.log("win");
        return ["Win!"]
    } else if (playerInput.toLowerCase() === computerResult) {
        console.log("tie");
        return ["tie!"]
    } else {
        computerCount++
        console.log("lose");
        return ["Lose!"]
    }
}
let counter = 0;
do {
    round();
    counter++;
    if (playerCount === 5){
        console.log("You win!");
    }
    if (computerCount === 5){
        console.log("You Lose! Good day sir!");
    }
} while ((playerCount < 5) && (computerCount < 5) && (counter < 20));

/*console.log(roundResult, "player=" + playerInput.toLowerCase(), "computer=" + computerResult);*/
console.log(playerCount);
console.log(computerCount);

