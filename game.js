// getting all the things required
const questin = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const timeCount = document.querySelector(".timer #time");
var cMusic = new Audio("./assets/correct.mp3");
var wMusic = new Audio("./assets/wrong.mp3");
let clearReferenceTime = undefined;
let score = 0;
ResetTime();
let questionCount = 0;
// questions

const questions = [
  {
    question: "Which is the strongest monster in monsterverse ?",
    options: [
      { text: "1. king kong", correct: false },
      { text: "2. Mothra", correct: false },
      { text: "3. godzilla", correct: true },
      { text: "4. king ghidorah", correct: false },
    ],
    attempt: false,
  },
  {
    question: "Who directed Munna Bhai M.B.B.S.  ?",
    options: [
      { text: "1. Anurag Kashyap", correct: false },
      { text: "2. Satyajit Ray", correct: false },
      { text: "3. Boyapati Sreenu", correct: false },
      { text: "4. Rajkumar Hirani", correct: true },
    ],
    attempt: false,
  },
  {
    question: "Which is the best cartoon ?",
    options: [
      { text: "1. Ben 10", correct: true },
      { text: "2. Tom and Jerry", correct: true },
      { text: "3. Oggy and the cockroaches", correct: true },
      { text: "4. Doraemon", correct: true },
    ],
    attempt: false,
  },

  {
    question: "Which movie do the buttons in the instructions page reference?",
    options: [
      { text: "1. Star wars", correct: false },
      { text: "2. Matrix", correct: true },
      { text: "3. RRR", correct: false },
      { text: "4. Blade Runner", correct: false },
    ],
    attempt: false,
  },

  {
    question: "There's a imposter among these options ?",
    options: [
      { text: "1. Superbad", correct: false },
      { text: "2. The Hangover", correct: false },
      { text: "3. Mark Antony", correct: false },
      { text: "4. 28 Days Later", correct: true },
    ],
    attempt: false,
  },

  {
    question: "Which is the best sci-fi movie of all time ?",
    options: [
      { text: "1. Terminator", correct: false },
      { text: "2. Alien", correct: false },
      { text: "3. 2001 - A Space Odyssey", correct: true },
      { text: "4. Blade Runner", correct: false },
    ],
    attempt: false,
  },

  {
    question:
      "Regarding the first line on the instructions page, Which movie is being referred ?",
    options: [
      { text: "1. Oldboy", correct: false },
      { text: "2. Fight Club", correct: true },
      { text: "3. Silence of the lambs", correct: false },
      { text: "4. The Godfather", correct: false },
    ],
    attempt: false,
  },
  {
    question: "Who won the first oscar in india ?",
    options: [
      { text: "1. A.R. Rahman", correct: false },
      { text: "2. kartiki Gonslave", correct: false },
      { text: "3. Gulzar", correct: false },
      { text: "4. Bhanu Athaiya", correct: true },
    ],
    attempt: false,
  },

  {
    question: "Whose life story was the basis for 'The Pursuit Of Happyness' ?",
    options: [
      { text: "1. Chris Gardner", correct: true },
      { text: "2. Jordan Belfort", correct: false },
      { text: "3. Wladyslaw Szpilman", correct: false },
      { text: "4. Frank Abagnale", correct: false },
    ],
    attempt: false,
  },
  {
    question:
      "which one of these movies was not direscted by Quentin Tarantino ?",
    options: [
      { text: "1. Kill Bill vol 1", correct: false },
      { text: "2. Pulp Ficion", correct: false },
      { text: "3. Death proof", correct: false },
      { text: "4. Shutter Island", correct: true },
    ],
    attempt: false,
  },
  {
    question:
      "On the homepage, you heard an audio clip. Can you identify the movie from which the audio is taken?",
    options: [
      { text: "1. Salaar", correct: false },
      { text: "2. Jurassic park", correct: true },
      { text: "3. Star Wars", correct: false },
      { text: "4. Harry Potter", correct: false },
    ],
    attempt: false,
  },
  {
    question:
      "Who is the best comedian?",
    options: [
      { text: "1. Johnny lever", correct: true },
      { text: "2. Vadivelu", correct: true },
      { text: "3. Brahmanandam", correct: true },
      { text: "4. Akshay Kumar", correct: false },
    ],
    attempt: false,
  },
];

// displaying the questions
let randomNumber;
let i = 0;
function mquestion(i) {
  questin.innerHTML = questions[i].question;
  option1.innerHTML = questions[i].options[0].text;
  option2.innerHTML = questions[i].options[1].text;
  option3.innerHTML = questions[i].options[2].text;
  option4.innerHTML = questions[i].options[3].text;
}

// not letting questions to repeat again
let questionRandom;
let repeatedQuestions = [];
randomQuestion();
function randomQuestion() {
  randomNumber = Math.floor(Math.random() * questions.length);

  questionRandom = questions[randomNumber];
  questionCount++;

  if (questionCount <= 12 && questionRandom.attempt == true) {
    questionCount--;
    randomQuestion();
  }
  mquestion(randomNumber);
  questions.splice(randomNumber, 1);
}

// setting timer

function ResetTime() {
  let Time = 15;
  timeCount.innerText = Time;
  clearReferenceTime = setInterval(() => {
    Time = Time - 1;
    timeCount.innerText = Time;
    if (Time <= 0 && score <= 5) {
      window.location.href = "./loss.html";
      clearInterval(clearReferenceTime);
    } else if (Time == 0 && score > 5) {
      window.location.href = "./win.html";
      clearInterval(clearReferenceTime);
    }
  }, 1000);
}

//  score
function updateScore() {
  score++;
  localStorage.setItem("result", score);
}

// when the options are clicked
let flag = false;
const option_1 = document.querySelector(".option:nth-child(1)");
const option_2 = document.querySelector(".option:nth-child(2)");
const option_3 = document.querySelector(".option:nth-child(3)");
const option_4 = document.querySelector(".option:nth-child(4)");

option_1.addEventListener("click", function () {
  if (flag == false && questionRandom.options[0].correct === true) {
    updateScore();
    flag = true;
    option_1.classList.add("correct");
    cMusic.play();
  } else if (flag == false) {
    flag = true;
    option_1.classList.add("wrong");
    wMusic.play();
  }
  questionRandom.attempt = true;
});

option_2.addEventListener("click", function () {
  if (flag == false && questionRandom.options[1].correct === true) {
    updateScore();
    flag = true;
    option_2.classList.add("correct");
    cMusic.play();
  } else if (flag == false) {
    flag = true;
    option_2.classList.add("wrong");
    wMusic.play();
  }
  questionRandom.attempt = true;
});

option_3.addEventListener("click", function () {
  if (flag == false && questionRandom.options[2].correct === true) {
    updateScore();
    flag = true;
    option_3.classList.add("correct");
    cMusic.play();
  } else if (flag == false) {
    flag = true;
    option_3.classList.add("wrong");
    wMusic.play();
  }
  questionRandom.attempt = true;
});

option_4.addEventListener("click", function () {
  if (flag == false && questionRandom.options[3].correct === true) {
    updateScore();
    flag = true;
    option_4.classList.add("correct");
    cMusic.play();
  } else if (flag == false) {
    flag = true;
    option_4.classList.add("wrong");
    wMusic.play();
  }
  questionRandom.attempt = true;
});

// nextbutton

const next_btn = document.querySelector(".nextbtn");
next_btn.addEventListener("click", function () {
  flag = false;
  option_1.classList.remove("correct");
  option_2.classList.remove("correct");
  option_3.classList.remove("correct");
  option_4.classList.remove("correct");

  option_1.classList.remove("wrong");
  option_2.classList.remove("wrong");
  option_3.classList.remove("wrong");
  option_4.classList.remove("wrong");
  clearInterval(clearReferenceTime);
  ResetTime();
  if (questionCount == 12) {
    if (score <= 5) {
      window.location.href = "./loss.html";
      console.log("Loose");
    }
    if (score > 5) {
      window.location.href = "./win.html";
      console.log("Win");
    }
  } else {
    randomQuestion();
  }
});