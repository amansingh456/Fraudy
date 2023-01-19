import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./actionTypes";

const initialState = {
  isError: false,
  isLoading: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
