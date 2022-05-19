import { refs } from './refs.js';

export const getSelected = () => {
  let answer = undefined;

  refs.answersEl.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};
