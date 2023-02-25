import {
  ERROR_FETCHING_CATEGORIES,
  START_FETCHING_CATEGORIES,
  SUCCES_FETCHING_CATEGORIES,
} from "./constants";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statusList.idle,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return { ...state, status: statusList.process };
    case SUCCES_FETCHING_CATEGORIES:
      return { data: action.categories, status: statusList.success };
    case ERROR_FETCHING_CATEGORIES:
      return { ...state, status: statusList.error };
    default:
      return state;
  }
}
