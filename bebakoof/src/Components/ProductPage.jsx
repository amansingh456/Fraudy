import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/action";
import { AiOutlineHeart } from "react-icons/ai"
import { BiRupee } from "react-icons/bi"
import "./ProductPageStyles.css";
import Sidebar from "./Sidebar";
const ProductPage = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sort")
      const getProductsParams = {
        params: { category: searchParams.getAll("category"),
      _sort: sortBy && "price",
      _order: sortBy,  
    },
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search, dispatch, products.length, searchParams, location]);

  return (
    <div className="main">
      <Sidebar />
      <div className="Card">
        {products.length > 0 &&
          products.map((el) => {
            return (
              <div key={el.id}>
                <img src={el.image} alt="prod_img" />
                <div className="flextext">
                    <div>
                <h4>{el.Brand}</h4>
                <p>{el.name}</p>
                <p> <span><BiRupee/></span><span>{el.price}</span></p>
                    </div>
                <div>
                <AiOutlineHeart/>
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
