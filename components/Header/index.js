import { ARButton, ButtonContainer, Container, Heading, Icon } from "./style";
import { Row, Col } from "react-bootstrap";
import ProductSlide from "../Products";
import Router from "next/router";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>
            Experience the Future of Fashion with iSocksNFT: <br /> Wear, Trade
            and Prove Ownership
          </Heading>
          <ButtonContainer>
            <ARButton onClick={() => Router.push("/ar")}>
              {" "}
              <Icon src="/img/icons/ar.svg" alt="AR Icon" /> See how it fits on
              AR.
            </ARButton>
          </ButtonContainer>
        </Col>
        <Col>
          <ProductSlide />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
