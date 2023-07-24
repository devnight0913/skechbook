import { GET_BOOKS, MORE_LOADED } from "../actions/types";

const initalState = {
  books: [],
  loading: true,
  error: {},
};

const bookReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        loading: false,
        books: payload,
      };
    case MORE_LOADED:
      return{
        ...state,
        loading: false,
        books: [...state.book, payload]
      }
    default:
      return state;
  }
};

export default bookReducer;