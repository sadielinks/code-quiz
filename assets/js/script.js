// listing the global variables
var quizStartHere = document.querySelector("#quizstartpage");
var quizQuestionsHere = document.querySelector("#quizquestions");
var quizScoresHere = document.querySelector("#quizhighscore");
var quizStartBtn = document.querySelector("#startBtn");
var quizScoreBtn = document.querySelector("#submitBtn");
var timeTimeBaby = document.querySelector("#timetimebaby");
var finalScoresHere = document.querySelector("#quizhighscore");
var initialsGoHere =document.querySelector("#intialsgohere");

var time = 100
var timerId

var currentQuestionIndex = 0;

var question = [
    {
        questionName: "This is a question here?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
} 
// questions will continue here **answer has to be exactly like the choices words
]

// timer code goes here eventually

function startQuiz (){
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

