import NameSpace from "~/reducer/name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getFavorite = (state) => {
  return state[NAME_SPACE].favorite;
};
