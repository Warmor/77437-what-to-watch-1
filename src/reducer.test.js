import {ActionType, ActionCreator, reducer} from "./reducer";
import {genres} from "~/mocks/genres";
import {films} from "~/mocks/films";

describe(`Business logic is correct`, () => {
  it(`Action creators work correctly`, () => {
    expect(ActionCreator.setCurrentGenreId(1)).toEqual({
      type: ActionType.SET_CURRENT_GENRE_ID,
      payload: 1,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      currentGenreId: 0,
      genres,
      films,
    });
  });
  it(`Reducer should filter films list`, () => {
    const initialState = {
      currentGenreId: 0,
      genres: [{
        id: 1,
        title: `Comedies`,
      }],
      films: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }, {
        id: 2,
        title: `Bohemian Rhapsody`,
        genreId: 2,
        image: `img/bohemian-rhapsody.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
    };
    expect(reducer(initialState, ActionCreator.setCurrentGenreId(1))).toEqual({
      currentGenreId: 1,
      genres: [{
        id: 1,
        title: `Comedies`,
      }],
      films: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
    });
  });
});
