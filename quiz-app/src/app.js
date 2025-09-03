// src/app.js

const questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');

    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        answerInput.value = '';
    } else {
        questionContainer.innerHTML = '<h2>Quiz Finished!</h2><button id="grade-button">Grade Quiz</button>';
        document.getElementById('grade-button').addEventListener('click', gradeQuiz);
    }
}

function collectAnswer() {
    const answerInput = document.getElementById('answer-input');
    userAnswers[currentQuestionIndex] = answerInput.value;
    currentQuestionIndex++;
    displayQuestion();
}

function gradeQuiz() {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    questions.forEach((question, index) => {
        const result = document.createElement('div');
        result.textContent = `${question.question} - Your answer: ${userAnswers[index] || 'No answer'} - Correct answer: ${question.answer}`;
        resultsContainer.appendChild(result);
    });
}

document.getElementById('submit-button').addEventListener('click', collectAnswer);
displayQuestion();