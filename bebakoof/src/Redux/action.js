import * as types from "./actionTypes";
import axios from "axios";
const getProductRequest = () => {
  return {
    type: types.GET_USER_REQUEST,
  };
};

const getProductSuccess = (payload) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload,
  };
};

const getProductFailure = () => {
  return {
    type: types.GET_USER_FAILURE,
  };
};

export const moveToCart = (payload) => {
  return {
    type: types.ADD_TO_CART,
    payload,
  };
};

export const removeToCart = () => {
  return {
    type: types.REMOVE_TO_CART,
  };
};

export const moveToWishlist = (payload) => {
  return {
    type: types.ADD_TO_WISHLIST,
    payload,
  };
};

const removeToWishlist = () => {
  return {
    type: types.REMOVE_TO_WISHLIST,
  };
};

export const getProducts = (params) => (dispatch) => {
  dispatch(getProductRequest());
  return axios
    .get(`https://user-data-d84k.onrender.com/products`, params)
    .then((res) => {
      // console.log(res)
      dispatch(getProductSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getProductFailure());
    });
};

export const getWomens = (params) => (dispatch) => {
  dispatch(getProductRequest());
  return axios
    .get(`https://user-data-d84k.onrender.com/womens`, params)
    .then((res) => {
      // console.log(res)
      dispatch(getProductSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getProductFailure());
    });
};

export const addToCart = (params) => (dispatch) => {
  return axios
    .post(`https://user-data-d84k.onrender.com/cart`, params)
    .then((res) => {
      dispatch(addToCart(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};



export const deleteToCart = (id) => (dispatch) => {
  return axios
    .delete(`https://user-data-d84k.onrender.com/cart${id}`)
    .then((res) => {
      dispatch(removeToCart(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};



export const addToWishlist = (params) => (dispatch) => {
  return axios
    .post(`https://user-data-d84k.onrender.com/wishlist`, params)
    .then((res) => {
      dispatch(addToWishlist(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};
