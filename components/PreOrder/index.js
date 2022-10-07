import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FormContainer,
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  TextArea,
  OTPContainer,
  WalletAddress,
  OTPBox,
} from "../Form";
import { Heading, P, Container, TextBox, Text, Icon } from "./style";

const PreOrderComponent = () => {
  const [formValues, setFormValues] = React.useState({
    email: "",
    fullName: "",
  });
  const [otp, setOtp] = React.useState(new Array(6).fill(""));
  const [active, setActive] = React.useState(false);
  const [emailConfirmed, setEmailConfirmed] = React.useState(false);

  function handleChange(element, index) {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus Next box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Row>
        <Col>
          <Heading>Pre-order</Heading>
          <P>
            Due to iSocks high demand and scarcity in the market, only 1 iSocks
            can be pre ordered by a wallet address and also note that only pre
            ordered iSocks can be customized at the current rate of $150usdt.
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
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              value={formValues.fullname}
              onChange={(e) =>
                setFormValues({ ...formValues, fullName: e.target.value })
              }
            />
          </FormGroup>

          {emailConfirmed ? (
            <>
              <OTPContainer>
                {otp.map((data, index) => {
                  return (
                    <OTPBox
                      type="text"
                      maxLength="1"
                      name="otp"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </OTPContainer>
              {/* <p>OTP Entered - {otp.join("")}</p> */}
              <Button
                backgroundColor="#fff"
                borderColor="#E3E5E8"
                onClick={(e) => setOtp([...otp.map((v) => "")])}
                color="var(--primary-brand)"
              >
                Send Code
              </Button>
              <Button
                type="submit"
                color={active ? "#fff" : "#fff"}
                borderColor={active ? "var(--primary-brand)" : "#E3E5E8"}
                backgroundColor={active ? "var(--primary-brand)" : "#E3E5E8"}
                hoverColor={active ? "var(--primary-brand)" : "#fff"}
                hoverBorderColor={active ? "var(--primary-brand)" : "#fff"}
                hoverBackgroundColor={active ? "#fff" : "#E3E5E8"}
                cursor={active ? "pointer" : "auto"}
              >
                Continue
              </Button>
              <TextBox>
                <Icon src="/img/icons/info-circle.svg" alt="info circle" />
                <Text>
                  You didn&apos;t receive the code please,{" "}
                  <span className="resend">resend code</span>
                </Text>
              </TextBox>
            </>
          ) : (
            <>
              <FormGroup>
                <Label>Wallet Address</Label>
                <WalletAddress type="text" />
                <Label>Deposit Address</Label>
                <WalletAddress type="text" backgroundColor="#F6F6F6" />
                <WalletAddress type="text" backgroundColor="#F6F6F6" />
                <WalletAddress type="text" backgroundColor="#F6F6F6" />
              </FormGroup>
            </>
          )}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default PreOrderComponent;
