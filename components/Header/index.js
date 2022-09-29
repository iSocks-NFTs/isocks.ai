import { ARButton, ButtonContainer, Container, Heading, Icon } from "./style";
import { Row, Col } from "react-bootstrap";
import ProductSlide from "../Products";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>
            Wear it, trade it, and never worry about a missing socks. <br />{" "}
            iSocks is a physical product with blockchain records of the owner.
          </Heading>
          <ButtonContainer>
            <ARButton>
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
