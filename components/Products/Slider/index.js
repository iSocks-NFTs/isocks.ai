import React from "react";
import {
  SliderContainer,
  ProductImage,
  ProductDescription,
  ProductCard,
} from "../style";
const productList = [
  {
    imgUrl: "/img/products/sock2.png",
    caption: "1",
  },
  {
    imgUrl: "/img/products/sock1.png",
    caption: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    imgUrl: "/img/products/sock1.png",
    caption: "3",
  },
];
const Slider = () => {
  const [active, setActive] = React.useState(0);

  return (
    <SliderContainer>
      {productList.map((product, index) => {
        const { imgUrl, caption } = product;
        return (
          <ProductCard key={index} border={index === 1 ? "1px solid var(--primary-brand)" : ""} transform={index === 1 ? "scale(1.20)" : ""}>
            <ProductImage src={imgUrl} />
            <ProductDescription>{caption}</ProductDescription>
          </ProductCard>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
