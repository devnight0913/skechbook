import { GET_BOOKS } from "../actions/types";

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
    default:
      return state;
  }
};

export default bookReducer;