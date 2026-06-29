// DOM ELEMENTS
const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-button")
const questionText = document.getElementById("question-text")
const answersContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById("current question")
const totalQuestionsSpan = document.getElementById("total-questions")
const scoreSpan = document.getElementById("score-span")
const finalScore = document.getElementById("final-score")
const maxScoreSpan = document.getElementById("max-score")
const resultMessage = document.getElementById("result-message")
const restartButton = document.getElementById("restart-button")
const progressBar = document.getElementById("progress")

const quizQuestions = [
    {
        question: "What is the capital of Nigeria",
        answers: [
            { text: "Lagos", correct: false },
            { text: "Kano", correct: false },
            { text: "Uyo", correct: false },
            { text: "Abuja", correct: true },
        ],   
    },
    {
        question: "In which sports is Sinner widely known",
        answers: [
            { text: "Basketball", correct: false },
            { text: "Tennis", correct: true },
            { text: "Boxing", correct: false },
            { text: "Football", correct: false },
        ],   
    },
    {
        question: "Which social media space is for proffesional career activities",
        answers: [
            { text: "Instagram", correct: false },
            { text: "Linkedin", correct: true },
            { text: "facebook", correct: false },
            { text: "Youtube", correct: false },
        ],   
    },
    {
        question: "In which continent is Nigeria located",
        answers: [
            { text: "Africa", correct: true },
            { text: "Asia", correct: false },
            { text: "North America", correct: false },
            { text: "Europe", correct: false },
        ],   
    },
    {
        question: "Which animal is known as the king of the jungle",
        answers: [
            { text: "Rat", correct: false},
            { text: "Monkey", correct: false },
            { text: "Lion", correct: true },
            { text: "Dog", correct: false },
        ],   
    },

];

// QUESTION STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answerDisabled = false

    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent * "%"

    questionText.textContent = currentQuestion.question 

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer.btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)

        answersContainer.appendChild(button);
    });
}
function selectAnswer(event) {
    if (answerDisabled) return

    answerDisabled = true

    const selectedButton = event.target;
    const isCorrect =selectedButton.dataset.correct === true
}

function restartQuiz() {
    console.log("quiz re-started");
}