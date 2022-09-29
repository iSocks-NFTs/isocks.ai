import React from "react";
import { Row, Col } from "react-bootstrap";
import { FilledButton, OutLineButton,ButtonContainer,Container } from "./style";

const ProductSlide = ({ productList }) => {
  const [active, setActive] = React.useState([]);
  return (
    <Container>
      <ButtonContainer>
        <FilledButton>
          Buy Sock
        </FilledButton>
      </ButtonContainer>
      <ButtonContainer>
        <OutLineButton>Redeem</OutLineButton>
        <OutLineButton>Verify</OutLineButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSlide;
