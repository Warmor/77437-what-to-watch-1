import NameSpace from "~/reducer/name-spaces";

const NAME_SPACE = NameSpace.USER;

export const getLoginError = (state) => {
  return state[NAME_SPACE].loginError;
};

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getUserIsLoggedIn = (state) => {
  return state[NAME_SPACE].userIsLoggedIn;
};
