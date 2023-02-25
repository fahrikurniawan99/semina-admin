import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import { clearNotif } from "../notif/actions";
import {
  ERROR_FETCHING_CATEGORIES,
  START_FETCHING_CATEGORIES,
  SUCCES_FETCHING_CATEGORIES,
} from "./constants";

const debouncedFetchingCategories = debounce(getData, 1000);

const startFetchingCategories = () => {
  return { type: START_FETCHING_CATEGORIES };
};
const successFetchingCategories = (categories) => {
  return { type: SUCCES_FETCHING_CATEGORIES, categories };
};
const errorFetchingCategories = () => {
  return { type: ERROR_FETCHING_CATEGORIES };
};

export const fetchCategories = () => async (dispatch) => {
  dispatch(startFetchingCategories());
  try {
    setTimeout(() => {
      dispatch(clearNotif());
    }, 3000);
    const res = await debouncedFetchingCategories("/cms/categories");
    dispatch(successFetchingCategories(res.data.data));
  } catch (err) {
    dispatch(errorFetchingCategories());
  }
};
