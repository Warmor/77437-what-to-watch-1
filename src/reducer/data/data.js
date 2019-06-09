import {adapterFilms, adapterGenres} from "~/utils";

const initialState = {
  genres: [],
  films: [],
};

export const ActionType = {
  SET_FILMS: `SET_FILMS`,
  SET_GENRE: `SET_GENRE`,
};

let ActionCreator = {
  setFilms: (payload) => ({
    type: ActionType.SET_FILMS,
    payload,
  }),
  setGenre: (payload) => ({
    type: ActionType.SET_GENRE,
    payload,
  }),
};

export const Operation = {
  loadFilmsAndGenre: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setFilms(response.data));
        dispatch(ActionCreator.setGenre(response.data));
      });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILMS:
      return {
        ...state,
        films: adapterFilms(action.payload),
      };
    case ActionType.SET_GENRE:
      return {
        ...state,
        genres: adapterGenres(action.payload),
      };
    default:
      return state;
  }
};
