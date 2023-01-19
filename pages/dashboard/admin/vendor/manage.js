import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import { Button, ButtonContainer } from "../../../../components/Form";
import {
  Acceptance,
  AcceptanceList,
  Card,
  CardContainer,
  Circle,
  FullName,
  Image,
  P,
  VendorData,
  VendorLocation,
} from "../../../../components/Vendor/style";
import { baseURL } from "../../../../config";
import Layout from "../../../../layouts/admin_layout";

import { useEffect, useState } from "react";
import {
  Form,
  FormContainer,
  FormGroup,
  Input,
} from "../../../../components/Form";

export async function getServerSideProps() {
  const endpoint = "/api/user/vendor";

  const response = await fetch(`${baseURL + endpoint}`, {
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });

  const data = await response.json();

  return {
    props: { data },
  };
}

export default function ManageVendor({ data }) {
  const [goBack, setBack] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function handleChange(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function back() {
    setBack(true);
    router.push("/dashboard/admin/vendor");
  }

  useEffect(() => {}, [searchTerm]);

  return (
    <Layout>
      <Head>
        <title>iSocks | Vendor Management</title>
      </Head>
      <Container>
        <Heading>Manage Vendors</Heading>
        <Text textAlign="center" fontSize="18px">
          You can Review and Remove Vendors
        </Text>
        {data.length === 0 ? (
          <P>You haven't created Vendors for iSocks Users to Purchase From</P>
        ) : (
          <>
            <FormContainer margin="2rem">
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search Vendor"
                  />
                </FormGroup>
              </Form>
            </FormContainer>
            <CardContainer>
              {data.map((vendor, index) => {
                const fullname = vendor.firstName + " " + vendor.lastName;
                const isVisible = fullname.toLowerCase().includes(searchTerm);
                return (
                  <Card
                    key={index}
                    display={!isVisible ? "none" : ""}
                    onClick={() =>
                      router.push(`/dashboard/admin/vendor/${vendor.id}`)
                    }
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
          </>
        )}

        <ButtonContainer marginTop="1rem">
          <Button onClick={back}>
            {goBack ? (
              <TailSpin
                height="25"
                width="25"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Back"
            )}
          </Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
}
