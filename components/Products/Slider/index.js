import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  ProductImage,
  ProductDescription,
  ProductCard,
} from "../style";

const productList = [
  {
    imgUrl: "/img/products/01.jpg",
    caption:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    imgUrl: "/img/products/02.jpg",
    caption:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    imgUrl: "/img/products/03.jpg",
    caption:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
];
const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleMouseDown = (e) => {
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (dragStart) {
      setDragEnd({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = (e, index) => {
    if (dragStart && dragEnd) {
      setActive(active >= 3 ? 0 : active++);
    } else {
      console.log("click event");
      setActive(index);
    }
    setDragStart(null);
    setDragEnd(null);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 480) {
      function countWithDelay() {
        let count = 0;
        const interval = setTimeout(() => {
          console.log("Current Count:", count);
          count++;
          if (count < 3) {
            interval = setTimeout(countWithDelay, 10000);
          } else {
            count = 0;
          }
          setActive(count);
        }, 10000);
      }
    }
  }, [windowWidth]);

  const renderProduct = () => {
    return productList.map((product, index) => {
      const { imgUrl, caption } = product;

      return (
        <ProductCard
          border={"1px solid var(--primary-brand)"}
          className={index === active ? "center" : ""}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={(e) => handleMouseUp(e, index)}
        >
          <ProductImage src={imgUrl} />
          {index === active ? (
            <ProductDescription>{caption}</ProductDescription>
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
