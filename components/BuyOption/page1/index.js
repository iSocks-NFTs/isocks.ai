import {
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
  Container,
} from "../style";
import Router from "next/router";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Step1 = ({ page, setPage, formData, setFormData }) => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Row>
        <Col>
          <Heading>Choose Buying Option</Heading>
          <P>
            All our buying options are easy & fast. We can&#39;t wait to see you
            at the otherside.
          </P>
        </Col>
      </Row>
      <CardContainer className="mt-[2.5rem]">
        <Card
          onClick={() =>
            Router.push(
              "https://www.binance.com/en/nft/profile/infinityauctions-75c2a0a5e2b863dd04940f1085992f58"
            )
          }
        >
          <Circle>
            <Image src="/img/logo/binance_buy.svg" alt="Binance" />
          </Circle>
          <Option>Binance</Option>
          <OptionDescription>
            Customers who purchase from Binance are presumably more
            knowledgeable about blockchain.
          </OptionDescription>
          <BuyOptionLink href="https://www.binance.com/en/nft/profile/infinityauctions-75c2a0a5e2b863dd04940f1085992f58">
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
            Customers who purchase from Vendor are presumed they don’t have
            knowledge about blockchain.
          </OptionDescription>
          <BuyOptionLink onClick={() => setPage(page + 1)}>
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

export default Step1;
