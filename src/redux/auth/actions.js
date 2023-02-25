import { USER_LOGIN, USER_LOGOUT } from "./constants";

export const userLogin = (token, role, email, refreshToken) => {
  return { type: USER_LOGIN, token: token, role: role, email, refreshToken };
};
export const userLogout = () => {
  localStorage.removeItem("auth");
  return { type: USER_LOGOUT };
};
