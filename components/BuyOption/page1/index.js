import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import {
  ArrowRight,
  BuyOptionLink,
  Card,
  CardContainer,
  Circle,
  Container,
  Heading,
  Image,
  Option,
  OptionDescription,
  P,
} from "../style";

const Step1 = ({ page, setPage, formData, setFormData }) => {
  const { push } = useRouter();

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
        <Card border="none" bgColor="#fafafa">
          <Circle>
            <Image src="/img/logo/icon_no_background.png" alt="iSocks Logo" />
          </Circle>
          <Option>iSocks Store</Option>
          <OptionDescription>
            Purchase iSocks from our Online Store using USDT, NGN & DTG Token.
          </OptionDescription>
          <BuyOptionLink onClick={() => push("/store")}>
            Buy iSock{" "}
            <ArrowRight
              src="/img/logo/arrow-right.svg"
              alt="Arrow Right Icon"
            />
          </BuyOptionLink>
        </Card>
        <Card
          onClick={() =>
            push(
              "https://www.binance.com/en/nft/collection/isocks-nft-621979014298828801?tradeType=0&collections=621979014298828801&isBack=1&order=amount_sort%401"
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
