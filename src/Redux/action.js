import * as types from "./actionTypes";
import axios from "axios";

// console.log(types)
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


const getCartFailure = () => {
  return {
    type: types.GET_CART_FAILURE,
  };
};

const getCartRequest = () => {
  return {
    type: types.GET_CART_REQUEST,
  };
};

const getCartSuccess = (payload) => {
  // console.log(payload)
  return {
    type: types.GET_CART_SUCCESS,
    payload,
  };
};


const deleteCartFailure = () => {
  return {
    type: types.DELETE_CART_FAILURE,
  };
};

const deleteCartRequest = () => {
  return {
    type: types.DELETE_CART_REQUEST,
  };
};

const deleteCartSuccess = (payload) => {
  return {
    type: types.DELETE_CART_SUCCESS,
    payload,
  };
};



const addCartFailure = () => {
  return {
    type: types.ADD_CART_FAILURE,
  };
};

const addCartRequest = () => {
  return {
    type: types.ADD_CART_REQUEST,
  };
};

const addCartSuccess = (payload) => {
  return {
    type: types.ADD_CART_SUCCESS,
    payload,
  };
};


const addWishlistFailure = () => {
  return {
    type: types.ADD_WISHLIST_FAILURE,
  };
};

const addWishlistRequest = () => {
  return {
    type: types.ADD_WISHLIST_REQUEST,
  };
};

const addWishlistSuccess = (payload) => {
  return {
    type: types.ADD_WISHLIST_SUCCESS,
    payload,
  };
};


const deleteWishlistFailure = () => {
  return {
    type: types.DELETE_WISHLIST_FAILURE,
  };
};

const deleteWishlistRequest = () => {
  return {
    type: types.DELETE_WISHLIST_REQUEST,
  };
};

const deleteWishlistSuccess = (payload) => {
  return {
    type: types.DELETE_WISHLIST_SUCCESS,
    payload,
  };
};


const getWishlistFailure = () => {
  return {
    type: types.GET_WISHLIST_FAILURE,
  };
};

const getWishlistRequest = () => {
  return {
    type: types.GET_WISHLIST_REQUEST,
  };
};

const getWishlistSuccess = (payload) => {
  return {
    type: types.GET_WISHLIST_SUCCESS,
    payload,
  };
};


const getProductFailure = () => {
  return {
    type: types.GET_USER_FAILURE,
  };
};





export const getProducts = (params) => (dispatch) => {
  dispatch(getProductRequest());
  return axios
    .get(`https://user-data-d84k.onrender.com/products`, params)
    .then((res) => {
      
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

export const getToCart = () => (dispatch) => {
  dispatch(getCartRequest())
  return axios.get(`https://user-data-d84k.onrender.com/cart`)
  .then((res)=>{
    dispatch(getCartSuccess(res.data))
  }).catch((e)=>{
    dispatch(getCartFailure())
    console.log(e)
  })


}

export const addToCart = (params) => (dispatch) => {
  dispatch(addCartRequest())
    return axios.post(`https://user-data-d84k.onrender.com/cart`, params)
    .then((res)=>{
      dispatch(addCartSuccess())
    }).catch((e)=>{
      dispatch(addCartFailure())
      console.log(e)
    })


}

export const deleteToCart = (id) => (dispatch) => {
    dispatch(deleteCartRequest()) 
  return axios.delete(`https://user-data-d84k.onrender.com/cart/${id}`)
  .then((res)=>{
    dispatch(deleteCartSuccess())
  }).catch(err=>{
       dispatch(deleteCartFailure())
  })
 }

export const getToWishlist = (params) => (dispatch) => {
  dispatch(getWishlistRequest()) 
  return axios.get(`https://user-data-d84k.onrender.com/wishlist`, params)
  .then((res)=>{
    dispatch(getWishlistSuccess(res.data))
  }).catch((e)=>{
    console.log(e)
    dispatch(getWishlistFailure())
  })


}

export const addToWishlist = (params) => (dispatch) => {
  dispatch(addWishlistRequest()) 
    return axios.post(`https://user-data-d84k.onrender.com/wishlist`, params)
    .then((res)=>{
      dispatch(addWishlistSuccess())
    }).catch((e)=>{
      dispatch(addWishlistFailure())
      console.log(e)
    })


}

export const deleteToWishlist = (id) => (dispatch) => {
  dispatch(deleteWishlistRequest()) 
  return axios.delete(`https://user-data-d84k.onrender.com/wishlist/${id}`)
  .then((res)=>{
    dispatch(deleteWishlistSuccess())
    console.log("delete")
  }).catch(err=>{
    dispatch(deleteWishlistFailure())
  })
 }



