var countDownTimer;
var timerInterval;
var arrayofQuestions = [];
var gameScore = 0;
const timePenalty = 30;
const maxTime = 5 * 60; //time is in seconds

function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer: ", countDownTimer);
}

//When the person clicks the begin button the timer starts
//start timer
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000) ;
    console.log("startTimer: ", timerInterval);
}

function updateTimer() {
    console.log("updateTimer: begun");
    countDownTimer--;
    console.log("updateTimer: countDownTimer", countDownTimer);
    presentTimer();
}

function presentTimer() {
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
    console.log("presentTimer: currentTime", currentTime);
}

function showScoreBoard() {
    let scoreBoard = document.getElementById('score-board');
    console.log("showScoreBoard: scoreBoard", scoreBoard);
    //scoreBoard.classList.toggle('hide', false);//
    scoreBoard.classList.remove('hide');

}

function presentScore() {
    let currentScore = document.getElementById('score');
    currentScore.innerText = gameScore;
    console.log("presentScore: currentScore", currentScore);
}

function hideGreeting() {
    let greeting = document.getElementById('greeting');
    console.log("hideGreeting: greeting", greeting);
    //scoreBoard.classList.toggle('hide', false);//
    greeting.classList.add('hide');
}

//questions is asked
function setupQuestionsAndAnswers() {
    console.log ("SetupQuestions started");
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class: ",
        answer1: " write a semicolon (;) character, followed by the class name.",
        answer2: " write a period (.) character, followed by the class name.",
        answer3: " write a period (.) character",
        answer4: " write a comma (,) character",
        correctAnswer: 2
    };

    let question2 = {
        id:"quest1",
        question:"In Css, a color can be specified by using a predefined color name",
        answer1: "yes",
        answer2: "no",
        answer3: null,
        answer4: null,
        correctAnswer: 1
    };

    arrayofQuestions.push(question1);
    arrayofQuestions.push(question2);

    console.log("SetupQuestions arrayofquestions:", arrayofQuestions);

}

function getQuestion(questionId) {
    console.log('getQuestion, questionId', questionId);

    let found = false;


    for(let i = 0; i<arrayofQuestions.length; i++) {
       if(questionId == arrayofQuestions[i].id) {
           prepareQuestionAndAnswers(i);
       } 
    }
}

function prepareQuestionAndAnswers(questionIndex) {
    console.log('prepareQuestionAndAnswers questionIndex', questionIndex);
    let questionSection = document.getElementId('question');
    let newQuestion = document.createElement('div');
    newQuestion.id =arrayofQuestions[questionIndex].id;
    newQuestion
    newQuestion.classList.add('question');

    let qSpan = document.createElement('span');
    qSpan.innerText = arrayofQuestions[questionIndex].question;
    newQuestion.appendChild(qSpan);


    if(arrayofQuestions[questionIndex].answer1) {
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = '$(arrayOfQuestions[questionIndex].id}_answer1'
        rdoBtn.setAttribute('type', 'radio');
        rdoBtn.value = 1
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add('${arrayofQuestions[questionIndex].id}');
        rdoBtn.name = arrayofQuestions[questionIndex].id;

        label.innerText = arrayofQuestions[questionIndex].answer1;
        label.setAttribute('for', '${rdoBtn.id}');


        
        
        answer.classList.add('answer');
        answer.appendChild(rdoBtn);
        answer.appendChild(label);
        newQuestion.appendChild(answer);

        console.log('prepareQuestionAndAnswers answer', answer);
    }

    if(arrayofQuestions[questionIndex].answer2) {
        

        answer.innerText = arrayofQuestions[questionIndex].answer2;
        answer.classList.add('answer');
        //answer.id = "" + arrayofQuestions[questionIndex].id + _answer2 ;//
        answer.id = '${arrayofQuestions[questionIndex].id} _answer2';
        questionSection.appendChild(answer);

        console.log('prepareQuestionAndAnswers newQuestion', newQuestion);
    }






    questionSection.appendChild()(newQuestion);
    console.log('prepareQuestionAndAnswers newQuestion')
}






//if question is correct next question

//if question is incorrect time penalty
//if answer is correct show points and then go to the next question
//Once all questions have been answered give options
//Once all questions have been answered give options to save score
//If user chooses to save score show the scoreboard

function doGame() {
    setCountDownTimer();
    startTimer();
    hideGreeting();
    setupQuestionsAndAnswers();
    showScoreBoard();
    presentScore();
    getQuestion('quest0');
}

