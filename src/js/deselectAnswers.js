import { refs } from './refs.js';

export const deselectAnswers = () => {
  refs.answersEl.forEach(answerEl => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
};
