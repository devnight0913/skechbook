import api from '../utils/api';
import { GET_BOOKS, BOOK_ERROR } from './types';

export const loadBook = () => async (dispatch) => {
    try {
      const res = await api.get('/submissions');
      dispatch({
        type: GET_BOOKS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: BOOK_ERROR });
    }
  };
  