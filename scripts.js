let result = ["rock", "paper", "scissors"];
function computerPlay() {
    return result[Math.floor(Math.random()*result.length)];
    
}
let computerResult = computerPlay();
let playerInput = ("ScIsSoRs");
function round() {
    if (playerInput.toLowerCase() === computerResult) {
        return["Tie!"];
    } else if (playerInput.toLowerCase() === "rock" && computerResult === "scissors") {
        return["Win!"];
    } else if (playerInput.toLowerCase() === "paper" && computerResult === "rock") {
        return["Win!"];
    } else if (playerInput.toLowerCase() === "scissors" && computerResult === "paper") {
        return["Win!"];
    } else {
        return["Lose!"];
    }

}
console.log(round(), "player="+playerInput.toLowerCase(), "computer="+computerResult);


