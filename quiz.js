// quiz.js
// Static questions and answers

const questions = [
  {
    question: "What is the slope of the line y = 2x + 5?",
    answer: "positive",
    type: "multiple-choice",
    options: ["positive", "negative", "zero", "undefined"]
  },
  {
    question: "What is the slope of the line x = 5?",
    answer: "undefined",
    type: "multiple-choice",
    options: ["positive", "negative", "zero", "undefined"]
  }
];

const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let score = 0;
  let output = '';
  questions.forEach((q, i) => {
    let userAnswer = '';
    if (q.type === 'multiple-choice') {
      const selected = form.querySelector(`input[name="answer-${i}"]:checked`);
      userAnswer = selected ? selected.value : '';
    } else {
      userAnswer = form[`answer-${i}`].value.trim();
    }
    const isCorrect = userAnswer.toLowerCase() === q.answer.toLowerCase();
    if (isCorrect) score++;
    output += `<div><b>Q${i+1}:</b> ${q.question}<br>`;
    output += `Your answer: <span class="${isCorrect ? 'correct' : 'incorrect'}">${userAnswer || '(blank)'}</span>`;
    if (!isCorrect) {
      output += `<div class="solution">Correct answer: ${q.answer}</div>`;
    }
    output += '</div><br>';
  });
  output += `<b>Score: ${score} / ${questions.length}</b><br>`;
  // Calculate percentage and letter grade
  const percent = Math.round((score / questions.length) * 100);
  let letter = '';
  if (percent >= 90) letter = 'A';
  else if (percent >= 80) letter = 'B';
  else if (percent >= 70) letter = 'C';
  else if (percent >= 60) letter = 'D';
  else letter = 'F';
  output += `<b>Grade: ${percent}% (${letter})</b>`;
  resultDiv.innerHTML = output;
  // Disable inputs after submission
  Array.from(form.elements).forEach(el => el.disabled = true);
});
