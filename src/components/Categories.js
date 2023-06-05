import React from "react";
import Item from "./common/Item";

const Categories = (props) => {
  return (
    <div className="flex flex-col gap-4 w-1/2">
      <span className="font-bold">Categories</span>
      <div className="flex flex-col gap-2">
        {props.categories.map((category, key) => {
          return <Item key={key} name={category.name}></Item>;
        })}
      </div>
    </div>
  );
};

export default Categories;
