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
  const [windowWidth, setWindowWidth] = useState(0);
  const isMobile = useMediaQuery({
    query: "(max-width:480px)",
  });

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
    let count = 0;
    function startCounting() {
      console.log("Current Count", count);
      count = (count + 1) % 3;

      setActive(count);

      setTimeout(startCounting, 5000);
    }
    if (isMobile) {
      startCounting();
    }
  }, [isMobile]);

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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={(e) => handleMouseUp(e, index)}
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
