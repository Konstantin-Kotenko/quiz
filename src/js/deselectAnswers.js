import { refs } from './refs';

export const deselectAnswers = () => {
  refs.answersEl.forEach(answerEl => {
    answerEl.checked = false;
  });
};
