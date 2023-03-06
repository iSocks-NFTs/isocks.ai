import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  FilledButton,
  OutLineButton,
  ButtonContainer,
  Container,
} from "./style";
import Slider from "./Slider";

const ProductSlide = () => {
  const router = useRouter();

  return (
    <Container>
      <Slider />
      <ButtonContainer>
        <FilledButton
          onClick={() =>
            router.push(
              "https://www.binance.com/en/nft/collection/isocks-nft-621979014298828801?isBack=1"
            )
          }
        >
          Marketplace
        </FilledButton>
      </ButtonContainer>
      <ButtonContainer>
        <OutLineButton onClick={() => router.push("/redeem")}>
          Redeem
        </OutLineButton>
        <OutLineButton onClick={() => router.push("/verify")}>
          Verify
        </OutLineButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSlide;
