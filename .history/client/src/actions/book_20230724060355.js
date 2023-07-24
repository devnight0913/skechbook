import api from '../utils/api';
import { BOOKS_LOADED, BOOK_ERROR } from './types';

export const loadBBook = () => async (dispatch) => {
    try {
      const res = await api.get('/auth');
  
      dispatch({
        type: BOOKS_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: BOOK_ERROR });
    }
  };
  