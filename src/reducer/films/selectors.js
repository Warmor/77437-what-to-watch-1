import NameSpace from "~/reducer/name-spaces";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.FILMS;

export const getGenres = (state) => {
  return state[NAME_SPACE].genres;
};

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getFilmById = (state, id) => {
  return state[NAME_SPACE].films.find((film) => +film.id === +id) || {};
};

export const getLikeThisFilmsById = (state, id) => {
  let genre = getFilmById(state, id).genre;
  let films = state[NAME_SPACE].films.filter((film) => film.genre === genre && +film.id !== +id);
  return films.length ? films : [];
};

export const getActiveFilms = createSelector(getActiveGenre, getFilms, (activeGenre, films) => {
  return films.filter((film) => {
    return activeGenre !== `` ? film.genre === activeGenre : true;
  });
});
