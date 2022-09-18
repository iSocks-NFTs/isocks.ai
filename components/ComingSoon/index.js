import React from "react";
import { ComingSoonGrid, Text, Container, Heading, Stage } from "./comingSoon";

const ComingSoon = () => {
  return (
    <Container>
      <Heading>
        Wear it, trade it, and never worry about a missing socks. <br />iSocks is a
        physical product with blockchain records of the owner.
      </Heading>
      <ComingSoonGrid>
        <Stage src="/img/logo/isock.svg" alt="iSock SVG" />
        <Text>Coming Soon...</Text>
        <Stage src="/img/logo/binance.svg" alt="Binance SVG" />
      </ComingSoonGrid>
    </Container>
  );
};

export default ComingSoon;