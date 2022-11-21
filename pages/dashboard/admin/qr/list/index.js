import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const QRCodeImage = dynamic(
  () => import("../../../../../components/QR/Module"),
  { ssr: false }
);
import Layout from "../../../../../layouts/admin_layout";
import { Container, Heading } from "../../../../../components/Dashboard/style";
import { Button, ButtonContainer, Label } from "../../../../../components/Form";
import { useRouter } from "next/router";
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
import axios from "../../../../api/axios";

export async function getServerSideProps() {
  const baseURL = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_LIVE_BASEURL : process.env.NEXT_PUBLIC_LOCAL_BASEURL;
  const QR_LIST = `/api/find/qr`;
  const response = await fetch(`${baseURL + QR_LIST}`)
  const data = await response.json()
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const QRList = ({ data }) => {
  const router = useRouter();
  const [goBack, setBack] = React.useState(false);

  function back() {
    setBack(true);
    router.back();
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Admin QR Management</title>
      </Head>
      <Container height="fit-content">
        <Row>
          <Col>
            <Heading>QR Management</Heading>
            <Heading fontWeight="300">Edit/Delete QR Codes</Heading>
          </Col>
        </Row>
        <QRContainer height="fit-content">
          {data.length > 0
            ? data.map((qr, index) => {
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
                    <Link href={`/dashboard/admin/qr/code/${qr.id}`}>
                      <Button>View QR</Button>
                    </Link>
                  </CodeBox>
                );
              })
            : ""}
        </QRContainer>
        {data.length === 0 ? (
          <Heading fontWeight="300">No QR Code In System</Heading>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  );
};

export default QRList;
