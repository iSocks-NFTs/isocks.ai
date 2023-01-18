import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Layout from "../../../../layouts/admin_layout";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import { ButtonContainer, Button } from "../../../../components/Form";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/router";

export default function Partners({}) {
  const [goBack, setBack] = React.useState(false);
  const router = useRouter();

  function back() {
    setBack(true);
    router.push("/dashboard/admin");
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Review Partners</title>
      </Head>
      <Container>
        <Heading>Review Partners</Heading>
        <Text textAlign="center" fontSize="18px">
          Look through list of partners
        </Text>
        <ButtonContainer>
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
