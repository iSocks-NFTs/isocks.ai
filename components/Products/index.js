import React from "react";
import Router from 'next/router';
import { FilledButton, OutLineButton,ButtonContainer,Container } from "./style";

const ProductSlide = ({ productList }) => {
  const [active, setActive] = React.useState([]);
  return (
    <Container>
      <ButtonContainer>
        <FilledButton onClick={() => Router.push("/buy")}>
          Buy Sock
        </FilledButton>
      </ButtonContainer>
      <ButtonContainer>
        <OutLineButton onClick={() => Router.push("/redeem")}>Redeem</OutLineButton>
        <OutLineButton onClick={() => Router.push('/verify')}>Verify</OutLineButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSlide;
