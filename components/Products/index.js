import React from "react";
import Router from "next/router";
import {
  FilledButton,
  OutLineButton,
  ButtonContainer,
  Container,
} from "./style";
import Slider from "./Slider";



const ProductSlide = () => {

  return (
    <Container>
      <Slider />
      <ButtonContainer>
        <FilledButton onClick={() => Router.push("/buy")}>
          Buy Sock
        </FilledButton>
      </ButtonContainer>
      <ButtonContainer>
        <OutLineButton onClick={() => Router.push("/redeem")}>
          Redeem
        </OutLineButton>
        <OutLineButton onClick={() => Router.push("/verify")}>
          Verify
        </OutLineButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSlide;
