// listing the global variables
var quizStartHere = document.querySelector("#quizstartpage");
var quizQuestionsHere = document.querySelector("#quizquestions");
var quizEndsHere = document.querySelector("#quizoverscreen");
var quizScoresHere = document.querySelector('#quizhighscores')
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
var resultsEl = document.querySelector("#answers");
var timeLeft = 100;
var timerInterval
var questions = document.querySelector("#questions");
var userPlayScore = 0;


// Quiz question array with all possible options & correct answers
var questionShownInQuiz = [
    {
        questionName: "Which is NOT a way to declare a variable in JavaScript?",
        A:"var", 
        B:"let", 
        C:"allow", 
        D: "const",
        rightAnswer: "C"
    },
    {
        questionName: "Which would you use to write into the HTML element?",
        A:"document.write()",
        B:"window.alert()",
        C:"console.log()",
        D:".innerHTML",
        rightAnswer: "D"
    },
    {
        questionName: "If a key has a function as a value, it is called a ___?",
        A:"method",
        B:"value",
        C:"expression", 
        D:"variable",
        rightAnswer: "A"
    },
    {
        questionName: "The length property return the length of a ___?",
        A:"string",
        B:"boolean",
        C:"number",
        D:"value pair",
        rightAnswer: "A"
    },
    {
        questionName: "This is a question here? 5",
        A:"x",
        B:"y",
        C:"z",
        D:"zed",
        rightAnswer: "B"
    },
    {
        questionName: "The conditions inside of if/else statements are enclosed within ___?",
        A:"parentheses ()",
        B:"angle brackets <>",
        C:"curly brackets {}",
        D:"square brackets []",
        rightAnswer: "C"
    }
]

// creating function to hide start page, start the questions and timer
function startQuiz() {
    //start timer, unhide questions, call next function to get questions
    quizStartHere.setAttribute("class", "hide");
    quizQuestionsHere.classList.remove("hide");
    displayQuestion();
    // timerId = setInterval(timerfunction, 1000);
    // timeTimeBaby.textContent = time;
    // questionShownInQuiz();
}
/* ^^ the start button event listener is at the bottom of thi js */

// function for questions to start and proceed 
function displayQuestion() {
    questions.innerText = questionShownInQuiz[currentQuestionIndex].questionName;
    choiceBtnA.innerText = questionShownInQuiz[currentQuestionIndex].A;
    choiceBtnB.innerText = questionShownInQuiz[currentQuestionIndex].B;
    choiceBtnC.innerText = questionShownInQuiz[currentQuestionIndex].C;
    choiceBtnD.innerText = questionShownInQuiz[currentQuestionIndex].D;
}

// function for checking if the right answer was selected
function checkingForAnswer () {
    var userChoice = this.getAttribute("data-value");
    if (userChoice == questionShownInQuiz[currentQuestionIndex].rightAnswer) {
        alert("Correct!");
    } else {
        alert("That was incorrect 😢");
        timeLeft -= 10;
    } if (currentQuestionIndex<questionShownInQuiz.length-1) {
        currentQuestionIndex ++;
        displayQuestion()
    } else {
        userPlayScore = timeLeft;
        // hiding the quiz questions
        quizQuestionsHere.setAttribute("class", "hide")
        // displaying the game over screen
        quizEndsHere.classList.remove("hide");
    }
}

//var currentQuestion = question[currentQuestionIndex]

// timer function that subtracts seconds when wrong answers are selected (mwhaha)
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
            quizEndsHere();
        }
    }, 1000);
}

// function to display game over screen with score + intials entry for when the user answers all q's OR their time ran out
function userPlayScore() {
    quizScoreBtn
}

// start button where click event starts the question + timer
quizStartBtn.addEventListener("click", startQuiz);

// choice buttons of each question become clickable when selected
choiceBtnA.addEventListener("click", checkingForAnswer);
choiceBtnB.addEventListener("click", checkingForAnswer);
choiceBtnC.addEventListener("click", checkingForAnswer);
choiceBtnD.addEventListener("click", checkingForAnswer);