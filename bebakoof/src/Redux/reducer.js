import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  REMOVE_TO_CART,
  REMOVE_TO_WISHLIST,
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

    case ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, payload] };

    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };

    case REMOVE_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, payload] };

    case REMOVE_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};