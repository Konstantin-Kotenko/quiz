import { deselectAnswers } from './deselectAnswers.js';
import { quizData } from './objQuiz.js';
import { currentQuiz } from '../index.js';
import { refs } from './refs.js';

export const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  refs.questionEl.innerText = currentQuizData.question;
  refs.a_text.innerText = currentQuizData.a;
  refs.b_text.innerText = currentQuizData.b;
  refs.c_text.innerText = currentQuizData.c;
  refs.d_text.innerText = currentQuizData.d;
};
