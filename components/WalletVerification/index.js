import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Button,
  Container,
  Form,
  FormContainer,
  Heading,
  Input,
  Label,
  P,
  FormGroup,
} from "./style";
import { motion } from "framer-motion";
import { GlobalContext } from "../../context/globalContext";

const WalletVerification = () => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const { setAddressVerified } = React.useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    setAddressVerified(true);
  }

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Row>
        <Col>
          <Heading>Wallet Address Verification</Heading>
          <P>
            Provide your BNB Address to validate your eligibility to join the
            whitelist.
          </P>
        </Col>
      </Row>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="walletAddress">BNB Wallet Address</Label>
            <Input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default WalletVerification;
