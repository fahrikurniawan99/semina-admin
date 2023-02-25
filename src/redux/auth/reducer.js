import { USER_LOGIN, USER_LOGOUT } from "./constants";

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
      token: null,
      role: null,
      email: null,
      refreshToken: null,
    };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        role: action.role,
        refreshToken: action.refreshToken,
        email: action.email,
      };
    case USER_LOGOUT:
      return {
        token: null,
        role: null,
        email: action.email,
        refreshToken: action.refreshToken,
      };
    default:
      return state;
  }
};

export default authReducer;
