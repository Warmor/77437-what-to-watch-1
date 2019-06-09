import {adapterFilm} from "~/utils";

const initialState = {
  activeGenre: ``,
  promoFilm: null,
};

export const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_PROMO_FILM: `SET_PROMO_FILM`,
};

export const ActionCreator = {
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
  setPromoFilm: (film) => ({
    type: ActionType.SET_PROMO_FILM,
    payload: film,
  }),
};

export const Operation = {
  loadPromoFilm: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.setPromoFilm(response.data));
      }).catch(() => {});
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.SET_PROMO_FILM:
      return {
        ...state,
        promoFilm: adapterFilm(action.payload),
      };
    default:
      return state;
  }
};
