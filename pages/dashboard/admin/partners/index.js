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
import { baseURL } from "../../../../config";
import Layout from "../../../../layouts/admin_layout";

export async function getServerSideProps() {
  const GET_PARTNERS = "/api/partners";
  const response = await fetch(`${baseURL + GET_PARTNERS}`, {
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default function Partners({ data }) {
  console.log(data);
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
          Look through list of applied partners
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
