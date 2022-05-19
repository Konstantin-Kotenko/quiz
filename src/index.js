import './index.css';
import { quizData } from './js/objQuiz.js';
import { refs } from './js/refs.js';
import { getSelected } from './js/getSelected.js';
import { loadQuiz } from './js/loadQuiz.js';

export let currentQuiz = 0;
let score = 0;

loadQuiz();

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
    }
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick='location.reload()'>Reload</button>`;
  }
};

refs.submitBtn.addEventListener('click', onHandleSubmitBtnClick);
