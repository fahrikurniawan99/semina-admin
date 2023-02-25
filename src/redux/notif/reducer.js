import { CLEAR_NOTIF, SET_NOTIF } from "./constants";

const initialState = {
  status: false,
  typeNotif: "",
  message: null,
};

export default function notifReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIF:
      return {
        status: action.status,
        type: action.typeNotif,
        message: action.message,
      };
    case CLEAR_NOTIF:
      return initialState;
    default:
      return state;
  }
}
