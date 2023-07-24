import api from "../utils/api";
import { GET_BOOKS, BOOK_ERROR, MORE_LOADED } from "./types";

export const loadBook = () => async (dispatch) => {
  try {
    const res = await api.get("/submissions");
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: BOOK_ERROR });
  }
};

export const moreBook = (pageNumber) => async (dispatch) => {
  const body = { page: `${pageNumber}` };
  console.log(body)
  try {
    const res = await api.get("/submissions/more", body);
    dispatch({
      type: MORE_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: BOOK_ERROR });
  }
};
