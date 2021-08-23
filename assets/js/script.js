// listing the global variables & some are re-listed later when used
var quizStartHere = document.querySelector("#quizstartpage");
var quizQuestionsHere = document.querySelector("#quizquestions");
var quizEndsHere = document.querySelector("#quizoverscreen");
var quizStartBtn = document.querySelector("#startBtn");
var quizScoreBtn = document.querySelector("#submitBtn");
var timeTimeBaby = document.querySelector("#timetimebaby");
var allScoresHere = document.querySelector("#quizhighscores");
var userScoresHere = document.querySelector("#finalscorehere");
var initialsGoHere = document.querySelector("#intialsgohere");
var currentQuestionIndex = 0;
var finalQuestionIndex = currentQuestionIndex.length;
var choiceBtnA = document.querySelector("#A");
var choiceBtnB = document.querySelector("#B");
var choiceBtnC = document.querySelector("#C");
var choiceBtnD = document.querySelector("#D");
var resultsEl = document.querySelector("#answers");
var timeLeft = 49;
var timeInterval
var questions = document.querySelector("#questions");
var userPlayScore = 0;
var highscoreNamesDisplay = document.querySelector('#highscorenameshere');
var highscoreValuesDisplay = document.querySelector('#highscorevalueshere');
var playAgainBtn = document.querySelector('#playagainBtn')
var clearScoresBtn = document.querySelector('#clearscoresBtn')
var viewHighScoresBtn = document.querySelector('#viewhighscoresBtn')




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

// function for questions to start and proceed 
function displayQuestion() {
    questions.innerText = questionShownInQuiz[currentQuestionIndex].questionName;
    choiceBtnA.innerText = questionShownInQuiz[currentQuestionIndex].A;
    choiceBtnB.innerText = questionShownInQuiz[currentQuestionIndex].B;
    choiceBtnC.innerText = questionShownInQuiz[currentQuestionIndex].C;
    choiceBtnD.innerText = questionShownInQuiz[currentQuestionIndex].D;
}

// function to check answers + build score (?)
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

var timeLeft = 49;

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
            clearInterval(timeLeft);
        }
    }, 1000);
}

// function stopTime() {
//     timeTimeBaby.textContent = '0';
//     clearInterval(timeInterval);
// }







var quizScoreBtn = document.querySelector("#submitBtn");
var allScoresHere = document.querySelector("#quizhighscores");
var initialsGoHere = document.querySelector("#intialsgohere");
var highscoreNamesDisplay = document.querySelector('#highscorenameshere');
var highscoreValuesDisplay = document.querySelector('#highscorevalueshere');
var playAgainBtn = document.querySelector('#playagainBtn')
var clearScoresBtn = document.querySelector('#clearscoresBtn')
var highScores = [];

// high scores stored in local storage with for loop
function getUserScore() {
    highscoreNamesDisplay.innerHTML = "";
    allScoresHere.classList.remove("hide");
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < highScores.length; i++) {
        let scoreItem = document.createElement("div");
        scoreItem.className += "everybodylookslikethis";
        console.log(scoreItem)
        scoreItem.setAttribute("style", "background-color:lavender");
        scoreItem.textContent = `${(i + 1)}, ${highScores[i].username} - ${highScores[i].userScore}`;
        allScoresHere.appendChild(scoreItem);
    }
}

var highscoreNamesDisplay = document.querySelector('#highscorenameshere');
var highscoreValuesDisplay = document.querySelector('#highscorevalueshere');
var initialsGoHere = document.querySelector("#intialsgohere")
var userScoresHere = document.querySelector("#finalscorehere");
var quizEndsHere = document.querySelector("#quizoverscreen");

// submit initials button will add & display the high scores - woooot!
quizScoreBtn.addEventListener("click", function () {
    let initialsValue = initialsGoHere.value.trim();
    if (initialsValue) {
        let userScore = { username: initialsValue, userScore: userScoresHere };
        initialsGoHere.value = '';
        highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
        getUserScore();
    }
});

var clearScoresBtn = document.querySelector('#clearscoresBtn')
// clear high scores button will also clear local storage
clearScoresBtn.addEventListener("click", function () {
    localStorage.clear();
});














// my wonderful button family:

// high scores button that takes you to page
viewHighScoresBtn.addEventListener("click", getUserScore)

// start button where click event starts the question + timer
quizStartBtn.addEventListener("click", startQuiz);

// choice buttons of each question become clickable when selected
choiceBtnA.addEventListener("click", checkingForAnswer);
choiceBtnB.addEventListener("click", checkingForAnswer);
choiceBtnC.addEventListener("click", checkingForAnswer);
choiceBtnD.addEventListener("click", checkingForAnswer);

// clicking the submit button will route your 
// quizScoreBtn.addEventListener("click", getUserScore);

// clicking the Play Again button take you back to the start of the quiz
playAgainBtn.addEventListener("click", quizStartHere)