import { refs } from './refs';

export const getSelected = () => {
  let answer = undefined;

  refs.answersEl.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};
