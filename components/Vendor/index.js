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
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { baseURL } from "../../config";

const Step2 = ({ page, setPage, formData, setFormData }) => {
  function selectVendor(vendorOption) {
    setFormData({ ...formData, vendorOption: vendorOption });
    setPage(page + 1);
  }

  const [vendors, setVendors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const endpoint = "/api/user/vendor";
    fetch(`${baseURL + endpoint}`, {
      headers: {
        key: process.env.NEXT_PUBLIC_BACKEND_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === []) {
          setVendors(null);
          console.log(vendors);
        } else {
          setVendors(data);
        }
        setIsLoading(false);
      });
  }, []);

  function VendorStatus() {
    if (vendors !== null && vendors.length === 0) {
      return <P>There are no vendors to purchase from at this time</P>;
    }
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
      <VendorStatus />
      {isLoading ? (
        <P>
          <TailSpin
            height="250"
            width="250"
            color="var(--primary-brand)"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </P>
      ) : (
        ""
      )}
      {vendors ? (
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
      ) : (
        ""
      )}
    </Container>
  );
};

export default Step2;
