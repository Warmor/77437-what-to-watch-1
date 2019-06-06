import NameSpace from "~/reducer/name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getGenres = (state) => {
  return state[NAME_SPACE].genres;
};

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};
