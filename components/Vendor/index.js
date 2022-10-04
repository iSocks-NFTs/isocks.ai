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
  AcceptanceList
} from "./style";
import { Row, Col } from "react-bootstrap";

const VendorComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Vendor</Heading>
          <P>
            iSocks risk Management to reduce your trading risk, the verified
            advertiser has already paid a deposit as collateral.
          </P>
        </Col>
      </Row>
      <CardContainer>
        <Card>
          <Circle>
            <Image src="/img/logo/vendor_buy.svg" alt="Vendor SVG" />
          </Circle>
          <FullName>John Freeman</FullName>
          <hr />
          <VendorData>
            <VendorLocation color="#8C8CA1">
              <span>Location:</span>
              <span>NFT</span>
            </VendorLocation>
            <VendorLocation fontSize="20px">
              <span>Lagos, Nigeria.</span>
              <span>300</span>
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
        <Card>
          <Circle>
            <Image src="/img/logo/vendor_buy.svg" alt="Vendor SVG" />
          </Circle>
          <FullName>John Freeman</FullName>
          <hr />
          <VendorData>
            <VendorLocation color="#8C8CA1">
              <span>Location:</span>
              <span>NFT</span>
            </VendorLocation>
            <VendorLocation fontSize="20px">
              <span>Lagos, Nigeria.</span>
              <span>300</span>
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
        <Card>
          <Circle>
            <Image src="/img/logo/vendor_buy.svg" alt="Vendor SVG" />
          </Circle>
          <FullName>John Freeman</FullName>
          <hr />
          <VendorData>
            <VendorLocation color="#8C8CA1">
              <span>Location:</span>
              <span>NFT</span>
            </VendorLocation>
            <VendorLocation fontSize="20px">
              <span>Lagos, Nigeria.</span>
              <span>300</span>
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
      </CardContainer>
    </Container>
  );
};

export default VendorComponent;
