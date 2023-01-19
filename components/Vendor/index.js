import {
  Card,
  CardContainer,
  Container,
  Heading,
  P,
  Circle,
  Image,
  FullName,
  VendorData,
  Acceptance,
  Text,
  VendorLocation,
  AcceptanceList,
} from "./style";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Step2 = ({ page, setPage, formData, setFormData, vendors }) => {
  console.log(vendors);
  function selectVendor(vendorOption) {
    setFormData({ ...formData, vendorOption: vendorOption });
    setPage(page + 1);
  }

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Row>
        <Col>
          <Heading>Vendor</Heading>
          <P>
            iSocks risk Management to reduce your trading risk, the verified
            advertiser has already paid a deposit as collateral.
          </P>
        </Col>
      </Row>
      {vendors.length === 0 ? (
        <P>There are no Vendors to Purchase from at this time</P>
      ) : (
        <CardContainer>
          {vendors.map((vendor, index) => {
            return (
              <Card
                onClick={() => selectVendor(`${vendor?.vendorId}`)}
                key={index}
              >
                <Circle>
                  <Image src="/img/logo/vendor_buy.svg" alt="Vendor SVG" />
                </Circle>
                <FullName>{`${
                  vendor?.firstName + " " + vendor?.lastName
                }`}</FullName>
                <hr />
                <VendorData>
                  <VendorLocation color="#8C8CA1">
                    <span>Location:</span>
                    <span>NFT</span>
                  </VendorLocation>
                  <VendorLocation fontSize="20px">
                    <span>
                      {vendor?.currentState} State, {vendor?.nationality}.
                    </span>
                    <span>{vendor?.noOfAvailableNFTs}</span>
                  </VendorLocation>
                  <Acceptance>
                    <Text>Accepting:</Text>
                    <AcceptanceList>
                      <span>Accepts Fiat</span>
                      <span>Card</span>
                      <span>Bank Transfer</span>
                      <span>Crypto</span>
                    </AcceptanceList>
                  </Acceptance>
                </VendorData>
              </Card>
            );
          })}
        </CardContainer>
      )}
    </Container>
  );
};

export default Step2;
