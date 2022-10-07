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
          <p>OTP Entered - {otp.join("")}</p>
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
            color={active ? "" : "#fff"}
            borderColor={active ? "" : "#E3E5E8"}
            backgroundColor={active ? "" : "#E3E5E8"}
            hoverColor={active ? "" : "#fff"}
            hoverBorderColor={active ? "" : "#fff"}
            hoverBackgroundColor={active ? "" : "#E3E5E8"}
            cursor={active ? "" : "auto"}
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
        </Form>
      </FormContainer>
    </Container>
  );
};

export default PreOrderComponent;
