import NameSpace from "~/reducer/name-spaces";

const NAME_SPACE = NameSpace.FAVORITE;

export const getFavorite = (state) => {
  return state[NAME_SPACE].favorite;
};

export const getFavoriteIdList = (state) => {
  return state[NAME_SPACE].favorite.map((_favorite) => _favorite.id);
};

