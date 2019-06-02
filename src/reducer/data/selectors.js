import NameSpace from "~/reducer/name-spaces";

const NAME_SPACE_DATA = NameSpace.DATA;

export const getGenres = (state) => {
  return state[NAME_SPACE_DATA].genres;
};

export const getFilms = (state) => {
  return state[NAME_SPACE_DATA].films;
};
