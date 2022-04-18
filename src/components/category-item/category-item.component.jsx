import {BackgroundImage, Body, CategoryItemContainer} from "./category-item.styles";

import React from "react";
import { useNavigate } from "react-router-dom"

const CategoryItem = ({ category }) => {
    const {imageUrl, title, route } = category;
    const navigate = useNavigate();
    const onNavigate = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigate}>
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
