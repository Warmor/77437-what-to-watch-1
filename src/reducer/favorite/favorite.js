import {adapterFilms, adapterFilm} from "~/utils";
import NameSpace from "~/reducer/name-spaces";
const USER = NameSpace.USER;
const initialState = {
  favorite: [],
};

export const ActionType = {
  SET_FAVORITE: `SET_FAVORITE`,
  ADD_FAVORITE: `ADD_FAVORITE`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`,
};

export const ActionCreator = {
  setFavorite: (payload) => ({
    type: ActionType.SET_FAVORITE,
    payload,
  }),
  addFavorite: (payload) => ({
    type: ActionType.ADD_FAVORITE,
    payload,
  }),
  removeFavorite: (payload) => ({
    type: ActionType.REMOVE_FAVORITE,
    payload,
  }),

};

export const Operation = {
  loadFavorite: () => (dispatch, _getState, api) => {
    if (_getState()[USER].userIsLoggedIn) {
      return api.get(`/favorite`)
        .then((response) => {
          dispatch(ActionCreator.setFavorite(response.data));
        });
    }
    return false;
  },
  addFavorite: (filmId) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${filmId}/1`)
      .then((response) => {
        dispatch(ActionCreator.addFavorite(response.data));
      });
  },
  removeFavorite: (filmId) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${filmId}/0`)
      .then((response) => {
        dispatch(ActionCreator.removeFavorite(response.data));
      });
  },

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FAVORITE:
      return {
        ...state,
        favorite: adapterFilms(action.payload),
      };
    case ActionType.ADD_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, adapterFilm(action.payload)],
      };
    case ActionType.REMOVE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((_favorite) => _favorite.id !== action.payload.id),
      };
    default:
      return state;
  }
};
