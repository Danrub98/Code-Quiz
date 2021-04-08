const startButton = document.getElementById('startbtn');
const questions = document.getElementById ('questionSection');
const questionSelected = document.getElementById ('questions');
const answersOption = document.getElementById ('answers');
var rightAnswer = document.getElementById ('correct');
var time = document.getElementById ('timeLeft');
var userName = document.getElementById ('user');
var finalScore = document.getElementById ('finalScore');
var submitBtn = document.getElementById ('submitBtn');
var initials = document.getElementById ('name');
var userNames= document.getElementById ('userNames')
var highScoreNames = document.getElementById ('highScoreNames');
var goBack = document.getElementById ('goback')
var lastBtn = document.getElementById ('lastBtn')
var erase = document.getElementById ('erase')
var selectedAnswer = ""
var secondsLeft = 120;
var correctQuestions = 0;
var timer;
var highscore = document.getElementById('highScores')


console.log (selectedAnswer)

highScoreNames.classList.add ('hide');
lastBtn.classList.add ('hide');


function setTime () {
        secondsLeft --;
        timeLeft.textContent= secondsLeft + " Seconds left to finish the quiz";
        if (secondsLeft <= 0) {
            clearInterval(timer);
            alert ("Time's Up");
        }
}

let shuffleQuestion, currentQuestion

startButton.addEventListener('click', startQuiz)
function startQuiz () {
    timer = setInterval(setTime, 1000);
    console.log ("test")
    startButton.classList.add('hide')
    questions.classList.remove('hide')
    highScoreNames.classList.add ('hide');
    shuffleQuestion = quizQuestions.sort (() => Math.random() - .5);
    currentQuestion = 0
    lastBtn.classList.add ('hide');
    showQuestion ();
}


function showQuestion () {
    if (currentQuestion == 4) {
        clearInterval(timer);
        finished ();
    }
    else {
        questionDisplayed (shuffleQuestion [currentQuestion]);
    }
};

function questionDisplayed (Question) {
    answersOption.innerHTML = ""
    questionSelected.innerText = Question.Question
    Question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        answersOption.appendChild(button)
        button.addEventListener ('click', () =>{
            if (answer.correct == true) {
                selectedAnswer = "correct";
                console.log (selectedAnswer)
                currentQuestion++;
                showQuestion ();
                rightAnswer.innerText="Right!";
            } else {
                rightAnswer.innerText = "Wrong!";
                secondsLeft = secondsLeft-10;
            }
        });
        
    })

}

console.log (selectedAnswer)


const quizQuestions = [
    {
        Question: 'Commonly used data types DO NOT include:',
        answers: [
        {text: 'Strings', correct: false},
        {text: "Boleeans", correct: true},
        {text: "Alerts", correct: false},
        {text: " Numbers", correct: false},
        ]
        
    },
    {
        Question: "The condition in a if / else statement is enclosed within _____",
        answers: [
        {text: "Quotes", correct: false},
        {text: "Curly brackets", correct: false},
        {text: "Parentheses", correct: true},
        {text: "Square Brackets", correct: false},
        ]
    },

    {
        Question: "Arrays in JavaScript can be used to store:",
        answers: [
        {text: "Numbers and strings", correct: false},
        {text: "Other arrays", correct: true},
        {text: "Boleeans", correct: false},
        {text: "All of the above", correct: false},
        ]
    },

    {
        Question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
        {text: "Commas", correct: false},
        {text: "Curly Brackets", correct: true},
        {text: "Quotes", correct: false},
        {text: "Parentheses", correct: false},
        ]
    },
];

function finished () {
    questions.classList.add('hide');
    userName.classList.remove('hide');
    finalScore.innerText = secondsLeft;
    submitBtn.addEventListener('click', function (){
        console.log(initials.value);
        localStorage.setItem("initials", initials.value);

        questions.classList.add('hide');
        userName.classList.add('hide');
        highScoreNames.classList.remove('hide');
        localStorage.getItem("initials", initials.value);
        userNames.textContent=  initials.value + " Your Score was " + secondsLeft;
        lastBtn.classList.remove ('hide');

        //userNames.textContent=  initials.value;
    })
}
highscore.addEventListener('click', function(){
    questions.classList.add('hide');
    userName.classList.add('hide');
    highScoreNames.classList.remove('hide');
    localStorage.getItem("initials", initials.value);
    userNames.textContent=  initials.value + " Your Score was " + secondsLeft;
    lastBtn.classList.remove ('hide');
})

function reload() {
    reload = location.reload();
}

goBack.addEventListener ('click', reload, false);

erase.addEventListener ('click', function(){
    highScoreNames.classList.add('hide');
    userNames.classList.add('hide');
})
//Guardar en Javascript
//Como guardar ese objeto en Localstorage localstorage.setItem localstorage.getItem