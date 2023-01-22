import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { addToCart, addToWishlist, getProducts, moveToCart, moveToWishlist } from "../Redux/action";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductPageStyles.css";
import Sidebar from "./Sidebar";
const ProductPage = () => {
  // const eee =  useSelector((store)=>store.DataReducer.isLoading)
  const products = useSelector((store) => store.DataReducer.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // console.log(products)  
  // console.log(eee)  

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sort");
      const getProductsParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search, dispatch, products.length, searchParams, location]);

  const handleClick = (id) => {
    let FilterData = products.filter((el) => {
      if (el.id === id) {
        return el;
      }
    });
    dispatch(addToWishlist(FilterData[0]));
  };
  const handleCart = (id) => {
    let Fill = products.filter((el) => {
      if (el.id === id) {
        return el;
      }
    });
    window.alert("added successful")
    dispatch(addToCart(Fill[0]));
  };



  return (
    <div className="main">
      <Sidebar />
      <div className="Card">
        {products.length > 0 &&
          products.map((el) => {
            return (
              <div key={el.id}>
                <img
                  src={el.image}
                  alt="prod_img"
                  onClick={() => handleCart(el.id)}
                />
                <div className="flextext">
                  <div>
                    <h4>{el.Brand}</h4>
                    <p>{el.name}</p>
                    <p>
                      <span>₹{el.price}</span> <del>₹{el.oldprice}</del>
                    </p>
                  </div>
                  <div>
                    <AiOutlineHeart onClick={() => handleClick(el.id)} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;