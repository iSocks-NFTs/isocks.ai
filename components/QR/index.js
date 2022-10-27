import React from "react";
import { Container, Heading } from "./style";
import { Row, Col } from "react-bootstrap";
import QRCodeImage from "./Module";
import Router from "next/router";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import { AnimatePresence } from "framer-motion";

const QRComponent = () => {
  const router = Router;
  const [qrData, setQrData] = React.useState({
    label: "",
    url: "",
  });
  const [error, setError] = React.useState("");
  const { baseUrl } = React.useContext(GlobalContext);
  const [page, setPage] = React.useState(0);

  function generateQRCode(e) {
    e.preventDefault();
    const { label, url } = qrData;
    axios
      .post(`${baseUrl}/api/create/qr`, {
        label,
        url,
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "ok") {
          router.reload();
        }
        if (data.status === "failed") {
          setError("Failed to Generate QR");
        }
      });
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
          <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
          {componentList[page]}
          </AnimatePresence>
        </Col>
      </Row>
    </Container>
  );
};

export default QRComponent;
