// listing the global variables
var quizStartHere = document.querySelector("#quizstartpage");
var quizQuestionsHere = document.querySelector("#quizquestions");
var quizEndsHere = document.querySelector("#quizoverscreen");
var quizStartBtn = document.querySelector("#startBtn");
var quizScoreBtn = document.querySelector("#submitBtn");
var timeTimeBaby = document.querySelector("#timetimebaby");
var finalScoresHere = document.querySelector("#quizhighscores");
var initialsGoHere = document.querySelector("#intialsgohere");
var currentQuestionIndex = 0;
var finalQuestionIndex = currentQuestionIndex.length;
var choiceBtnA = document.querySelector("#A");
var choiceBtnB = document.querySelector("#B");
var choiceBtnC = document.querySelector("#C");
var choiceBtnD = document.querySelector("#D");
var resultsEl = document.querySelector("#answers");
var timeLeft = 49;
var timerInterval
var questions = document.querySelector("#questions");
var userPlayScore = 0;
var highscoreNamesDisplay = document.querySelector('#highscorenameshere');
var highscoreValuesDisplay = document.querySelector('#highscorevalueshere');
var playAgainBtn = document.querySelector('#playagainBtn')
var clearScoresBtn = document.querySelector('#clearscoresBtn')



// Quiz question array with all possible options & correct answers
var questionShownInQuiz = [
    {
        questionName: "Which is NOT a way to declare a variable in JavaScript?",
        A: "var",
        B: "let",
        C: "allow",
        D: "const",
        rightAnswer: "C"
    },
    {
        questionName: "Which would you use to write into the HTML element?",
        A: "document.write()",
        B: "window.alert()",
        C: "console.log()",
        D: ".innerHTML",
        rightAnswer: "D"
    },
    {
        questionName: "If a key has a function as a value, it is called a ___?",
        A: "method",
        B: "value",
        C: "expression",
        D: "variable",
        rightAnswer: "A"
    },
    {
        questionName: "The length property return the length of a ___?",
        A: "string",
        B: "boolean",
        C: "number",
        D: "value pair",
        rightAnswer: "A"
    },
    {
        questionName: "The conditions inside of if/else statements are enclosed within ___?",
        A: "parentheses ()",
        B: "angle brackets <>",
        C: "curly brackets {}",
        D: "square brackets []",
        rightAnswer: "C"
    }
]

// creating function to hide start page, start the questions and timer
function startQuiz() {
    //start timer, unhide questions, call next function to get questions
    quizStartHere.setAttribute("class", "hide");
    quizQuestionsHere.classList.remove("hide");
    displayQuestion();
    setTime();
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

// function for checking answers + bulding score
function checkingForAnswer() {
    var userChoice = this.getAttribute("data-value");
    if (userChoice == questionShownInQuiz[currentQuestionIndex].rightAnswer) {
        alert("Correct!");
    } else {
        alert("That was incorrect 😢");
        timeLeft -= 9;
    } if (currentQuestionIndex < questionShownInQuiz.length - 1) {
        currentQuestionIndex++;
        displayQuestion()
    } else {
        userPlayScore = timeLeft;
        // hiding the quiz questions
        quizQuestionsHere.setAttribute("class", "hide")
        // displaying the game over screen
        quizEndsHere.classList.remove("hide");
    }
}

// timer function (50 seconds) that subtracts seconds when wrong answers are selected (mwhaha)
function setTime() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeTimeBaby.textContent = timeLeft + ' seconds';
            timeLeft--;
        } else if (timeLeft === 1) {
            timeTimeBaby.textContent = timeLeft + ' second!';
            timeLeft--;
        } else {
            timeTimeBaby.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}


// function to calculate and display final score
function userHasScore() {
    var currentHighScore = document.querySelector('#intialsgohere')
    // var currentUser = initialsGoHere.value.trim();
    if (localStorage.getItem("intialsgohere") == null) {
        localStorage.setItem("intialsgohere", "[]");
    }

    var savedStorageScores = JSON.parse(localStorage.getItem("intialsgohere"));
    savedStorageScores.push(new_data + "--- " + score)

    localStorage.setItem("intialsgohere", JSON.stringify(savedStorageScores));
    makeHighScoreList();
}

// function to save 
function generateHighscores() {
    highscoreNamesDisplay.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedStorageScores")) || [];
    for (i = 0; i < highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
    generateHighscores()
}

// function to use contents of local storage to display on highscore table
function endScoresTable() {
    highscoreNamesDisplay.innerHTML = "";
    highscoreValuesDisplay.innerHTML = "";
    var savedStorageScores = JSON.parse(localStorage.getItem("intialsgohere"));
    var baselineScore = {
        score: userPlayScore,
        initialsGoHere: initialsGoHere.value.trim()
    };
    quizEndsHere.setAttribute("class", "hide");
    finalScoresHere.classList.remove("hide");
}












// my wonderful button family:

// start button where click event starts the question + timer
quizStartBtn.addEventListener("click", startQuiz);

// choice buttons of each question become clickable when selected
choiceBtnA.addEventListener("click", checkingForAnswer);
choiceBtnB.addEventListener("click", checkingForAnswer);
choiceBtnC.addEventListener("click", checkingForAnswer);
choiceBtnD.addEventListener("click", checkingForAnswer);

// clicking the submit button will route your 
quizScoreBtn.addEventListener("click", endScoresTable);

// NOTWORKINGYET clicking the Play Again button take you back to the start of the quiz
playAgainBtn.addEventListener("click", quizStartHere)