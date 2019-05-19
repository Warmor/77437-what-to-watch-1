const initialState = {
  currentGenreId: 0,
  genres: [{
    id: 1,
    title: `Comedies`,
  }, {
    id: 2,
    title: `Crime`,
  }, {
    id: 3,
    title: `Documentary`,
  }, {
    id: 4,
    title: `Dramas`,
  }, {
    id: 5,
    title: `Horror`,
  }, {
    id: 6,
    title: `Kids & Family`,
  }, {
    id: 7,
    title: `Romance`,
  }, {
    id: 8,
    title: `Sci-Fi`,
  }, {
    id: 9,
    title: `Thrillers`,
  }]
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
      currentGenreId: action.payload
    };
    default: return state;
  }
};
