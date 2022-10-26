import React from "react";
import { Container, Heading } from "./style";
import { Row, Col } from "react-bootstrap";
import {
  ButtonContainer,
  Button,
  FormContainer,
  FormGroup,
  Input,
  Label,
  Form,
} from "../Form";
import QRCodeImage from "./Module";
import Router from "next/router";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext";

const QRComponent = () => {
  const router = Router;
  const [qrData, setQrData] = React.useState({
    label: "",
    url: "",
  });
  const [error, setError] = React.useState("");
  const { baseUrl } = React.useContext(GlobalContext);

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
          <Form onSubmit={(e) => generateQRCode(e)}>
            <FormGroup>
              <Label htmlFor="qrLabel">Label</Label>
              <Input
                value={qrData.label}
                onChange={(e) =>
                  setQrData({ ...qrData, label: e.target.value })
                }
                id="qrLabel"
                type="text"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="qrUrl">QR Code URL</Label>
              <Input
                value={qrData.url}
                onChange={(e) => setQrData({ ...qrData, url: e.target.value })}
                id="qrUrl"
                type="url"
                required
              />
            </FormGroup>
            <Label color="red" textAlign="center">
              {error}
            </Label>
            <ButtonContainer>
              <Button>Generate QR Code</Button>
            </ButtonContainer>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default QRComponent;
