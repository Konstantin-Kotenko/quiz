import './index.css';
import { quizData } from './js/objQuiz.js';
import { refs } from './js/refs.js';
import { getSelected } from './js/getSelected';
import { deselectAnswers } from './js/deselectAnswers';

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  refs.questionEl.innerText = currentQuizData.question;
  refs.a_text.innerText = currentQuizData.a;
  refs.b_text.innerText = currentQuizData.b;
  refs.c_text.innerText = currentQuizData.c;
  refs.d_text.innerText = currentQuizData.d;
};

loadQuiz();

const onHandleSubmitBtnClick = () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score += 1;
    }

    currentQuiz += 1;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      refs.quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick='location.reload()'>Reload</button>`;
    }
  }
};

refs.submitBtn.addEventListener('click', onHandleSubmitBtnClick);
