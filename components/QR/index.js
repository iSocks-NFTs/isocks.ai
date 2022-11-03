import React from "react";
import Router from "next/router";
import { Container, Heading } from "./style";
import { Row, Col } from "react-bootstrap";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import { AnimatePresence } from "framer-motion";
import { Button, ButtonContainer } from "../Form";
import { TailSpin } from "react-loader-spinner";

const QRComponent = () => {
  const router = Router;
  const [page, setPage] = React.useState(0);
  const [goBack, setBack] = React.useState(false);

  function back() {
    setBack(true);
    router.push("/dashboard/admin");
  }
  const componentList = [
    <Step1 key={1} page={page} setPage={setPage} />,
    <Step2 key={2} page={page} setPage={setPage} />,
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Heading>QR Code Management</Heading>
          <Heading fontWeight="300">Generate, Edit & Delete QR Codes</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {componentList[page]}
          </AnimatePresence>
        </Col>
        <Col>
          <ButtonContainer marginTop="2rem">
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
        </Col>
      </Row>
    </Container>
  );
};

export default QRComponent;
