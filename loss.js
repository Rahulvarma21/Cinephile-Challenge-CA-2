var playerWon = [
    "Congratulations! You are a cinephile",
    "Great job! you did it",
    "gotta celebrate the win",
    "good good",
    "awesome!!"
];

var playerLost = [
    "let's try that again",
    "another one quiz ",
    "it's not over until you win!"
];

function randomPhrase(array) {
    var randomLine = Math.floor(Math.random() * array.length);
    return array[randomLine];
}

function rText(score) {
    if (score >= 6) {
        return randomPhrase(playerWon);
    } else {
        return randomPhrase(playerLost);
    }
}

let playagain_btn = document.getElementById("playagain");
playagain_btn.addEventListener("click", function () {
    window.location.href = "./index.html";
    console.log("playagain_btn");
});

const scoreElement = document.getElementById("score");
const score = localStorage.getItem("result");
scoreElement.innerText = score;

const nameStored = document.getElementById("namescore");
const name = localStorage.getItem("name");
nameStored.innerHTML = name +", "+ rText(score);
