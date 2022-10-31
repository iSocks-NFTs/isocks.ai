import React from "react";
import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import QRCodeImage from "../../../../../components/QR/Module";
import Layout from "../../../../../layouts/admin_layout";
import {
  QRContainer,
  Container,
  CodeBox,
  CodeLabel,
  LinkHref,
  LinkText,
  Heading,
} from "../../../../../components/QR/style";
import { Button, ButtonContainer } from "../../../../../components/Form";
import Router from "next/router";
import { GlobalContext } from "../../../../../context/globalContext";
import QREditModal from "../../../../../components/Modal/Edit_QR";

export async function getServerSideProps() {
  // Fetch Data
  const response = await fetch("http://localhost:1337/api/find/qr");
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const QRList = ({ data }) => {
  const { modal, setModal } = React.useContext(GlobalContext);
  

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
          {data.map((qr, index) => {
            return (
              <CodeBox key={index}>
                <QRCodeImage id={qr.id} />
                <CodeLabel>{qr.label}</CodeLabel>
                <LinkText>
                  URL:{" "}
                  <LinkHref target="_blank" href={qr.url}>
                    {qr.url}
                  </LinkHref>
                </LinkText>
              </CodeBox>
            );
          })}
        </QRContainer>

        <ButtonContainer marginTop="5rem">
          <Button onClick={() => Router.back()}>Back</Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default QRList;
