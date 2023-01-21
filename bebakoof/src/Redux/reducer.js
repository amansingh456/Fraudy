import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  ADD_WISHLIST_REQUEST,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAILURE,
  DELETE_WISHLIST_REQUEST,
  DELETE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAILURE,
  GET_WISHLIST_FAILURE,
} from "./actionTypes";

const initialState = {
  isError: false,
  isLoading: false,
  products: [],
  wishlist: [],
  cart: [],
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

    case GET_CART_REQUEST:
      return { ...state, isLoading: true };
    case GET_CART_SUCCESS:
      console.log(payload);
      return { ...state, isLoading: false, cart: payload };
    case GET_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case ADD_CART_REQUEST:
      return { ...state, isLoading: true };
    case ADD_CART_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case DELETE_CART_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_CART_SUCCESS:
      return { ...state, isLoading: false };
    case DELETE_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case GET_WISHLIST_REQUEST:
      return { ...state, isLoading: true };
    case GET_WISHLIST_SUCCESS:
      return { ...state, isLoading: false, wishlist: payload };
    case GET_WISHLIST_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case ADD_WISHLIST_REQUEST:
      return { ...state, isLoading: true };
    case ADD_WISHLIST_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_WISHLIST_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case DELETE_WISHLIST_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_WISHLIST_SUCCESS:
      return { ...state, isLoading: false };
    case DELETE_WISHLIST_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
