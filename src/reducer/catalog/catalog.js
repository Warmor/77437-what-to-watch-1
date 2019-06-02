const initialState = {
  activeGenre: ``,
};

export const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
};

export const ActionCreator = {
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    default:
      return state;
  }
};
