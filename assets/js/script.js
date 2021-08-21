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
var questions = document.querySelector("#questions")


// Quiz question array with all possible options & correct answers
var questionShownInQuiz = [
    {
        questionName: "Which is NOT a way to declare a variable in JavaScript?",
        allChoices: ["var", "let", "allow", "const"],
        rightAnswer: "allow"
    },
    {
        questionName: "Which would you use to write into the HTML element?",
        allChoices: ["document.write()", "window.alert()", "console.log()", "innerHTML"],
        rightAnswer: "innerHTML"
    },
    {
        questionName: "If a key has a function as a value, it is called a _?",
        allChoices: ["method", "value", "expression", "variable"],
        rightAnswer: "method"
    },
    {
        questionName: "The length property return the length of a __?",
        allChoices: ["string", "boolean", "number", "value pair"],
        rightAnswer: "string"
    },
    {
        questionName: "This is a question here? 5",
        allChoices: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: "answer1"
    },
    {
        questionName: "This is a question here? 6",
        allChoices: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: "answer1"
    }
]

// creating function to hide start page, start the questions and timer
function startQuiz() {
    //start timer, unhide questions, call next function to get questions
    quizStartHere.setAttribute("class", "hide");
    quizQuestionsHere.removeAttribute("class", "hide");
    timerId = setInterval(timerfunction, 1000);
    timeTimeBaby.textContent = time;
    questionShownInQuiz();
}
/* ^^ the start button event listener is at the bottom of thi js */

function quizQuestionsHere() {
    
}

// function for questions to start and proceed 
function displayQuestion() {
    var currentQuestion = displayQuestion
    quizScoresHere.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return quizScoresHere();
    } return quizScoresHere();

    var currentQuestion = questionShownInQuiz[currentQuestionIndex];

}

//var currentQuestion = question[currentQuestionIndex]

// creating a function for timer that subtracts time when wrong answers are selected
function timeTimeBaby() {
    var time = 100
    var timerInterval = setInterval(function () {
        if (time > 1) {
            timeTimeBaby.textContent = time + " seconds";
            time--;
        } else if (time === 1) {
            timeTimeBaby.textContent = time + " second!";
            time--;
        } else {
            clearInterval(timerInterval);
            quizScoreHere();
        }
    }, 1000);
}

// start button where click event starts the question + timer
quizStartBtn.addEventListener("click", startQuiz);

// choices of each question become clickable when selected
// choiceBtnA.addEventListener("click", rightAnswer);
// choiceBtnB.addEventListener("click", rightAnswer);
// choiceBtnC.addEventListener("click", rightAnswer);
// choiceBtnD.addEventListener("click", rightAnswer);