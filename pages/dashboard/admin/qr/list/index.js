import React from "react";
import Head from "next/head";
import QRCodeImage from "../../../../../components/QR/Module";
import Layout from "../../../../../layouts/admin_layout";
import { Container, Heading } from "../../../../../components/Dashboard/style";
import { Button, ButtonContainer, Label } from "../../../../../components/Form";
import Router from "next/router";
import { Row, Col } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import {
  QRContainer,
  CodeBox,
  CodeLabel,
  LinkHref,
  LinkText,
  Link,
} from "../../../../../components/QR/style";

export async function getServerSideProps() {
  // Fetch Data
  const response = await fetch("http://localhost:1337/api/find/qr");
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const QRList = ({ data }) => {
  const [goBack, setBack] = React.useState(false);

  function back() {
    setBack(true);
    Router.push("/dashboard/admin/qr");
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Admin QR Management</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <Heading>QR Management</Heading>
            <Heading fontWeight="300">Edit/Delete QR Codes</Heading>
          </Col>
        </Row>
        <QRContainer>
          {data.length > 0 ? (
            data.map((qr, index) => {
              return (
                <CodeBox key={index}>
                  <QRCodeImage id={qr.id} />
                  <Link href={`/dashboard/admin/qr/code/${qr.id}`}>
                    <CodeLabel>{qr.label}</CodeLabel>
                    <LinkText>
                      URL:{" "}
                      <LinkHref target="_blank" href={qr.url}>
                        {qr.url}
                      </LinkHref>
                    </LinkText>
                  </Link>
                </CodeBox>
              );
            })
          ) : (
            <Heading fontWeight="300">No QR Code in Database</Heading>
          )}
        </QRContainer>
        <ButtonContainer marginTop="5rem">
          <Button onClick={() => back()}>
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
};

export default QRList;
