import { CLEAR_NOTIF, SET_NOTIF } from "./constants";

export const setNotif = (status, typeNotif, message) => ({
  type: SET_NOTIF,
  status,
  typeNotif,
  message,
});

export const clearNotif = () => ({ type: CLEAR_NOTIF });
