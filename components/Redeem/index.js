import React from "react";
import {
  Container,
  FormContainer,
  FormGroup,
  Heading,
  Label,
  P,
  Form,
  Input,
  Button,
  DropDownContainer,
} from "./style";
import { AiOutlineDown } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { countries } from "country-data-list";

const RedeemedComponent = () => {
  const [formValues, setFormValues] = React.useState({
    emailAddress: "",
    country: null,
    currentState: "",
    walletAddress: "",
  });
  



  const [loading, setLoading] = React.useState(false);

  const emailRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  React.useEffect(() => {
    emailRef.current.focus();
    console.log(countries.all);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Heading>Redeem</Heading>
          <P>
            You'll need to complete the form below in order to redeem your
            socks.
          </P>
        </Col>
      </Row>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formValues.emailAddress}
              onChange={(e) =>
                setFormValues({ ...formValues, emailAddress: e.target.value })
              }
              ref={emailRef}
              required
            />
          </FormGroup>
          <FormGroup>
            <DropDownContainer>
              <AiOutlineDown />
            </DropDownContainer>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="currentState">Current State</Label>
            <Input
              type="text"
              id="currentState"
              value={formValues.currentState}
              onChange={(e) =>
                setFormValues({ ...formValues, currentState: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="walletAddress">
              Wallet address used in purchase
            </Label>
            <Input
              type="text"
              id="walletAddress"
              value={formValues.walletAddress}
              onChange={(e) =>
                setFormValues({ ...formValues, walletAddress: e.target.value })
              }
              required
            />
          </FormGroup>
          <Button type="submit">
            {loading ? (
              <TailSpin
                height="25"
                width="25"
                color="#0D0D0D"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RedeemedComponent;
