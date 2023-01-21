import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./SidebarStyles.css";
const WomenSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialSort = searchParams.getAll("sort");
  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initialSort[0] || "");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (e) => {
    const newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);
  const products = useSelector((store) => store.products);
  return (
    <div className="sidebar-container">
      <p className="heading">
        <u> Women Clothing</u><span>( {products.length} )</span>
      </p>
      <div className="inside-container">
        <div>
          <h4>FILTERS</h4>
          <div>
            <p>Category</p>
            <div>
              <input
                type="checkbox"
                value="shirt"
                onChange={handleChange}
                checked={category.includes("shirt")}
              />
              <label>shirt</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="t-shirt"
                onChange={handleChange}
                checked={category.includes("t-shirt")}
              />
              <label>t-shirt</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="jumpsuit"
                onChange={handleChange}
                checked={category.includes("jumpsuit")}
              />
              <label>jumpsuit</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="hoodies"
                onChange={handleChange}
                checked={category.includes("hoodies")}
              />
              <label>hoodies</label>
            </div>
          </div>
        </div>
        <h4>SORT</h4>
        <div onChange={handleSort} className="popular">
          <select name="sortBy">
            <option value="">Popular</option>
            <option value="asc">Low-to-High</option>
            <option value="desc">High-to-Low</option>
          </select>

          {/* <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sort === "asc"}
          />
          <label>Low-to-High</label>
          <br />
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sort === "desc"}
          />
          <label>High-to-Low</label>
          <input
            type="radio"
            value=""
            name="sortBy"
            defaultChecked={sort === ""}
          />
          <label>Default</label> */}
        </div>
      </div>
    </div>
  );
};

export default WomenSidebar;
