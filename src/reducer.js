import {genres} from "~/mocks/genres";
import {films} from "~/mocks/films";

const initialState = {
  currentGenreId: 0,
  genres,
  films,
};

export const ActionCreator = {
  [`SET_CURRENT_GENRE_ID`]: (genreId) => ({
    type: `SET_CURRENT_GENRE_ID`,
    payload: genreId,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_CURRENT_GENRE_ID`: return {
      ...state,
      currentGenreId: action.payload,
      films: films.filter((film) => {
        return action.payload !== 0 ? film.genreId === action.payload : true;
      })
    };
    default: return state;
  }
};
