import React from "react";
import { Container, Heading, Span } from "./style";
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

const QRComponent = () => {
  const qrRef = React.useRef();

  function generateQRCode() {
    const url = qrRef.current.value();
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
          <Form onSubmit={generateQRCode}>
            <FormGroup>
              <Label htmlFor="qrUrl">QR Code URL</Label>
              <Input ref={qrRef} id="qrUrl" type="url" required />
            </FormGroup>
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
