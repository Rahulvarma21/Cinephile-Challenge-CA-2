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
    "it's not over until you win!",
    "Try Again",
    "sorry! you lost"
];

function randomLine(list) {
    var randomText = Math.floor(Math.random() * list.length);
    return list[randomText];
}

function rText(score) {
    if (score >= 6) {
        return randomLine(playerWon);
    } else {
        return randomLine(playerLost);
    }
}

let playagain_btn = document.getElementById("playagain");
playagain_btn.addEventListener("click", function () {
    window.location.href = "./index.html";
    console.log("playagain_btn");
});

// getting score from Storage

const scoreElement = document.getElementById("score");
const score = localStorage.getItem("result");
scoreElement.innerText = score;

// getting name from Storage

const nameStored = document.getElementById("namescore");
const name = localStorage.getItem("name");
nameStored.innerHTML = name +", "+ rText(score);
