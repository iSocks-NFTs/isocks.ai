import {
  Container,
  Heading,
  P,
  Card,
  CardContainer,
  Image,
  OptionDescription,
  Option,
  BuyOptionLink,
  ArrowRight,
  Circle,
} from "./style";
import { Row, Col } from "react-bootstrap";

const BuyOptionsComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Choose Buying Option</Heading>
          <P>
            All our buying options are easy & fast. We can&#39;t wait to see you
            at the otherside.
          </P>
        </Col>
      </Row>
      <CardContainer>
        <Card>
          <Circle>
            <Image src="/img/logo/binance_buy.svg" alt="Binance" />
          </Circle>
          <Option>Binance</Option>
          <OptionDescription>
            Customers who purchase from Binance are presumably more
            knowledgeable about blockchain.
          </OptionDescription>
          <BuyOptionLink href="">
            Buy iSock{" "}
            <ArrowRight
              src="/img/logo/arrow-right.svg"
              alt="Arrow Right Icon"
            />
          </BuyOptionLink>
        </Card>
        <Card border="none" bgColor="#fafafa">
          <Circle>
            <Image src="/img/logo/vendor_buy.svg" alt="Binance" />
          </Circle>
          <Option>Vendor</Option>
          <OptionDescription>
          Customers who purchase from Vendor are presumed they don’t have knowledge about blockchain.
          </OptionDescription>
          <BuyOptionLink href="">
            Buy iSock{" "}
            <ArrowRight
              src="/img/logo/arrow-right.svg"
              alt="Arrow Right Icon"
            />
          </BuyOptionLink>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default BuyOptionsComponent;
