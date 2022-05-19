import './index.css';
import { quizData } from './js/objQuiz.js';

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answersEl = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answersEl.forEach(answerEl => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
};

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

const getSelected = () => {
  let answer = undefined;

  answersEl.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

const onHandleSubmitBtnClick = () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score += 1;
    }

    currentQuiz += 1;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick='location.reload()'>Reload</button>`;
    }
  }
};

submitBtn.addEventListener('click', onHandleSubmitBtnClick);
