import {createSelector} from "reselect";
import {getFilms} from "~/reducer/data/selectors";
import NameSpace from "~/reducer/name-spaces";

const NAME_SPACE = NameSpace.CATALOG;

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getActiveFilms = createSelector(getActiveGenre, getFilms, (activeGenre, films) => {
  return films.filter((film) => {
    return activeGenre !== `` ? film.genre === activeGenre : true;
  });
});
