import {BackgroundImage, Body, CategoryItemContainer} from "./category-item.styles";

import React from "react";

const CategoryItem = ({ category }) => {
    const {imageUrl, title} = category;
  return (
    <CategoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
