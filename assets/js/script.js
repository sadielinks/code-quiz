// listing the global variables
var quizStartHere = document.querySelector("#quizstartpage");
var quizQuestionsHere = document.querySelector("#quizquestions");
var quizScoresHere = document.querySelector("#quizhighscore");
var quizStartBtn = document.querySelector("#startBtn");
var quizScoreBtn = document.querySelector("#submitBtn");
var timeTimeBaby = document.querySelector("#timetimebaby");
var finalScoresHere = document.querySelector("#quizhighscore");
var initialsGoHere = document.querySelector("#intialsgohere");
var currentQuestionIndex = 0;
var finalQuestionIndex = currentQuestionIndex.length;
var choiceBtnA = document.querySelector("#A");
var choiceBtnB = document.querySelector("#B");
var choiceBtnC = document.querySelector("#C");
var choiceBtnD = document.querySelector("#D");
var resultsEl = document.querySelector("#answers")
var time = 100
var timerInterval



// Quiz questions + their respective answers
var question = [
    {
        questionName: "This is a question here?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 2",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 3",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 4",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 5",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 6",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 7",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 8",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 9",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        questionName: "This is a question here? 10",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    }
]

function timeTimeBaby() {

var timerInterval = setInterval(function() {
    time--;
    timerInterval.textContent = secondsLeft + " seconds";

    if(time === 0) {
      clearInterval(timerInterval);
      quizScoreHere();
    }
  }, 1000);
quizQuestionsHere.style.display = "block";
}

function startQuiz() {
    // start timer, hide start screen, unhide questions, call next function to get questions
    quizStartHere.setAttribute("class", "hide")
    quizQuestionsHere.removeAttribute("class", "hide")
    timerId = setInterval(timerfunction, 1000);
    timeTimeBaby.textContent = time
    //call function to get question
}

//function to call questions
//var currentQuestion = question[currentQuestionIndex]


quizStartBtn.addEventListener("click", startQuiz);

