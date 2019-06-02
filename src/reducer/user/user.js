import Cookies from "js-cookie";

const initialState = {
  user: {},
  loginError: ``,
  userIsLoggedIn: false,
};

export const ActionType = {
  SET_USER: `SET_USER`,
  UNSET_USER: `UNSET_USER`,
  SET_LOGIN_ERROR: `SET_LOGIN_ERROR`,
};

let ActionCreator = {
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
  unsetUser: () => ({
    type: ActionType.UNSET_USER,
    payload: {},
  }),
  setLoginError: (payload) => ({
    type: ActionType.SET_LOGIN_ERROR,
    payload,
  }),
};

export const Operation = {
  login: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      ...data,
    }).then((response) => {
      dispatch(ActionCreator.setUser(response.data));
    }).catch(({response}) => {
      dispatch(ActionCreator.setLoginError(response.data.error));
    });
  },
  fetchUser: () => (dispatch, _getState, api) => {
    return api.get(`/login`).then((response) => {
      dispatch(ActionCreator.setUser(response.data));
    }).catch(() => {
      dispatch(ActionCreator.unsetUser());
    });
  },
  checkLoginUser: () => (dispatch) => {
    let isAuth = Cookies.get(`authToken`);
    if (isAuth) {
      return dispatch(Operation.fetchUser());
    }
    return false;
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
        userIsLoggedIn: true,
      };
    case ActionType.UNSET_USER:
      return {
        ...state,
        user: {},
        userIsLoggedIn: false,
      };
    case ActionType.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        userIsLoggedIn: false,
      };
    default:
      return state;
  }
};
