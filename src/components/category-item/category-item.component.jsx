import "./category-item.styles.scss";

import React from "react";

const CategoryItem = ({ category }) => {
    const {imageUrl, title} = category;
  return (
    <div className="categories-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
