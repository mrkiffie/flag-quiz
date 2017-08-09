import { generateQuizOptions } from "../data/quiz";

export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const SET_QUIZ = "SET_QUIZ";

export const setQuiz = quiz => ({
  type: SET_QUIZ,
  payload: quiz
});

export const loadImg = src => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(src);
    img.src = src;
  });
};

export const fetchFlag = country => {
  return loadImg(country.flag).catch(src => loadImg(src));
};

export const wait = (time: number) => {
  return new Promise(resolve => setTimeout(() => resolve(), time));
};

export const loadQuiz = () => {
  return dispatch => {
    const quiz = generateQuizOptions();

    const flagsPromises = []; //quiz.options.map(fetchFlag);
    return Promise.all(flagsPromises.concat(wait(2500))).then(flags =>
      dispatch(setQuiz(quiz))
    );
  };
};

export const selectCountry = (country = null) => ({
  type: SELECT_COUNTRY,
  payload: country
});

export const answerQuiz = country => {
  return dispatch => {
    dispatch(selectCountry(country));
    dispatch(loadQuiz());
  };
};
