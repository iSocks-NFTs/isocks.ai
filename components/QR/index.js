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
import { QRCode } from "qrcode";

function QRCodeImage({ url }) {
  const [src,setSrc] = React.useState();
  QRCode.toDataURL(url).then((data) =>{
    setSrc(data);
  })
  return (
    <>
      <Image src={src} />
    </>
  );
}


const QRComponent = () => {
  const [link,setLink] = React.useState('');
  const qrRef = React.useRef();
  const [code,setCode] = React.useState(false);


  function generateQRCode(e) {
    e.preventDefault();
    const url = qrRef.current.value();
    setLink(url);
    setCode(true);
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
              <Label htmlFor="qrUrl">QR Code URL</Label>
              <Input ref={qrRef} id="qrUrl" type="url" required />
            </FormGroup>
            <ButtonContainer>
              <Button>Generate QR Code</Button>
            </ButtonContainer>
          </Form>
        </Col>
        <Col>
          {code && (
            <QRCodeImage url={link} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QRComponent;
