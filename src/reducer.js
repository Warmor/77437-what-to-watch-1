import {genres} from "~/mocks/genres";
import {films} from "~/mocks/films";

const initialState = {
  currentGenreId: 0,
  genres,
  films,
};

export const ActionType = {
  SET_CURRENT_GENRE_ID: `SET_CURRENT_GENRE_ID`,
};

export const ActionCreator = {
  setCurrentGenreId: (genreId) => ({
    type: ActionType.SET_CURRENT_GENRE_ID,
    payload: genreId,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE_ID: return {
      ...state,
      currentGenreId: action.payload,
      films: films.filter((film) => {
        return action.payload !== 0 ? film.genreId === action.payload : true;
      })
    };
    default: return state;
  }
};
