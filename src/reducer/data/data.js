import {adapterFilms, adapterGenres} from "~/utils";

const initialState = {
  genres: [],
  films: [],
};

export const ActionType = {
  SET_DATA: `SET_DATA`,
};

let ActionCreator = {
  setData: (payload) => ({
    type: ActionType.SET_DATA,
    payload,
  }),
};

export const Operation = {
  loadData: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setData(response.data));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return {
        ...state,
        genres: adapterGenres(action.payload),
        films: adapterFilms(action.payload),
      };
    default:
      return state;
  }
};
