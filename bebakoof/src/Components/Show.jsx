import React from "react";

const Show = () => {
  let data = JSON.parse(localStorage.getItem("input"));
  console.log("data", data);

  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.image} alt="prop" />
            <h3>{el.Brand}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
