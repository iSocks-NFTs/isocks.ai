import React, { useMemo } from "react";
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
  PaginationContainer,
} from "../../../../../components/QR/style";
import Pagination from "../../../../../components/Pagination";

export async function getServerSideProps() {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_LIVE_BASEURL
      : process.env.NEXT_PUBLIC_LOCAL_BASEURL;
  const QR_LIST = `/api/find/qr/0/*`;
  const response = await fetch(`${baseURL + QR_LIST}`, {
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

let PageSize = 6;

const QRList = ({ data }) => {
  const router = useRouter();
  const [goBack, setBack] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const currentQRData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  React.useEffect(() => {
    console.log(data);
  }, []);

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
          {data && currentQRData.map((qr, index) => {
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
          })}
        </QRContainer>
        <PaginationContainer>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </PaginationContainer>
        {!data ? (
          <Heading fontWeight="300">No QR Code In System</Heading>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  );
};

export default QRList;
