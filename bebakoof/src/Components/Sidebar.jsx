import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SidebarStyles.css";
const Sidebar = () => {
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

  return (
    <div className="sidebar-container">
      <div>
        <h2>
          Men Clothing
          <hr />
        </h2>
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
              value="jeans"
              onChange={handleChange}
              checked={category.includes("jeans")}
            />
            <label>jeans</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="kurta"
              onChange={handleChange}
              checked={category.includes("kurta")}
            />
            <label>kurta</label>
          </div>
        </div>
      </div>
      <h4>SORT</h4>
      <p>Price</p>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sort === "asc"}
        />

        <label> High-to-Low</label>
        <br />
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sort === "desc"}
        />
        <label>Low-to-High</label>
      </div>
    </div>
  );
};

export default Sidebar;
