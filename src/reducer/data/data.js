import {adapterFilms, adapterGenres} from "~/utils";

const initialState = {
  genres: [],
  films: [],
  favorite: [],
};

export const ActionType = {
  SET_FILMS: `SET_FILMS`,
  SET_GENRE: `SET_GENRE`,
  SET_FAVORITE: `SET_FAVORITE`,
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
  setFavorite: (payload) => ({
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
  loadFavorite: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setFavorite(response.data));
      });
  }
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
    case ActionType.SET_FAVORITE:
      return {
        ...state,
        favorite: adapterFilms(action.payload),
      };
    default:
      return state;
  }
};
