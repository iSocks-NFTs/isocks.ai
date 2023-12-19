import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  ProductImage,
  ProductDescription,
  ProductCard,
} from "../style";
import { useMediaQuery } from "react-responsive";

const productList = [
  {
    imgUrl: "/img/products/01.jpg",
  },
  {
    imgUrl: "/img/products/02.jpg",
  },
  {
    imgUrl: "/img/products/03.jpg",
  },
];
const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const renderProduct = () => {
    return productList.map((product, index) => {
      const { imgUrl } = product;

      return (
        <ProductCard
          key={index}
          border={"0.5px solid var(--primary-brand)"}
          className={`${index === active && "center"} ${
            index === 1 && index !== active ? "left" : "right"
          }`}
        >
          <ProductImage src={imgUrl} />
          {index === active ? (
            <ProductDescription>
              Total Supply 80 <br />
              Tribe: J!J! Klan Socks <br />
              Limited edition with variable pricing based on Ethereum price.
            </ProductDescription>
          ) : (
            ""
          )}
        </ProductCard>
      );
    });
  };

  return <SliderContainer>{renderProduct()}</SliderContainer>;
};

export default Slider;
