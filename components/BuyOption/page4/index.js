import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container, Heading, P } from "../style";
import {
  Form,
  FormContainer,
  Input,
  Button,
  FormGroup,
  Label,
  ButtonContainer,
  OTPContainer,
  OTPBox,
  Icon,
  Msg,
  Resend,
} from "../../Form";
import { motion } from "framer-motion";
import { TailSpin } from "react-loader-spinner";
import Divider from "../../Divider";
import axios from "axios";
import { TransactionContext } from "../../../context/transactionContext";
import { GlobalContext } from "../../../context/globalContext";

const Step3 = ({ page, setPage, formData, setFormData }) => {
  const [otp, setOtp] = React.useState(new Array(6).fill(""));
  const [phoneOtp, setPhoneOtp] = React.useState(new Array(6).fill(""));
  const [msg, setMsg] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState({
    redColor: "#D66853",
    greyColor: "var(--subtle-text)",
    text1: "You didn't receive the code please ",
    text2: "Wrong code, please check the code and input the right one. ",
  });
  const [buttonActive, setButtonActive] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { transactionId } = React.useContext(TransactionContext);
  const {baseUrl} = React.useContext(GlobalContext);

  function handleEmailOtp(element, index) {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus Next Box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    if (otp.length === 6) {
      setButtonActive(true);
    }
  }

  function handlePhoneOTP(element, index) {
    if (isNaN(element.value)) return false;
    setPhoneOtp([
      ...phoneOtp.map((d, idx) => (idx === index ? element.value : d)),
    ]);
    // Focus Next Box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    if (phoneOtp.length === 6) {
      setButtonActive(true);
    }
  }

  function verifyOTP(otp) {
    setIsSubmitting(true);
    axios
      .get(
        `${baseUrl}/api/transaction/verify/${otp.join("")}/${transactionId}`
      )
      .then((response) => {
        const { data } = response;
        if (data.status === "ok") {
          setIsSubmitting(false);
          setPage(page + 1)
        }
        if (data.status === "failed") {
          setIsSubmitting(false);
          setMsg(true);
          setError(true);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.log(error);
        setMsg(true);
        setError(true);
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(phoneOtp.join("").length === 6){
      verifyOTP(phoneOtp);
    }
    if(otp.join("").length === 6){
      verifyOTP(otp);
    }
  }

  function clearOtp() {
    setOtp([...otp.map((v) => "")]);
    setPhoneOtp([...phoneOtp.map((v) => "")]);
  }

  function MessageBox() {
    return (
      <FormGroup flexDirection="row" columnGap="0.5rem">
        <div>
          {error ? (
            <Icon src="/img/icons/info-circle-red.svg" alt="info icon" />
          ) : (
            <Icon src="/img/icons/info-circle.svg" alt="info icon" />
          )}
          <Msg color={error ? message.redColor : message.greyColor}>
            {error ? message.text2 : message.text1}
            <Resend onClick={clearOtp}> resend code</Resend>
          </Msg>
        </div>
      </FormGroup>
    );
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
          <Heading>Vendor</Heading>
          <P>
            iSocks risk Management to reduce your trading risk, the verified
            advertiser has already paid a deposit as collateral.
          </P>
        </Col>
      </Row>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Label>Kindly impute the code sent to {formData.emailAddress}</Label>
          <OTPContainer>
            {otp.map((data, index) => {
              return (
                <OTPBox
                  type="text"
                  maxLength="1"
                  name="otp"
                  key={index}
                  value={data}
                  onChange={(e) => handleEmailOtp(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </OTPContainer>
          <Divider />
          <Label>Kindly impute the code sent to {formData.phoneNumber}</Label>
          <OTPContainer>
            {phoneOtp.map((data, index) => {
              return (
                <OTPBox
                  type="text"
                  maxLength="1"
                  name="otp"
                  key={index}
                  value={data}
                  onChange={(e) => handlePhoneOTP(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </OTPContainer>
          <ButtonContainer>
            <Button
              width="100%"
              type="button"
              color="var(--primary-brand)"
              backgroundColor="transparent"
              onClick={() => setPage(page - 1)}
            >
              Previous
            </Button>
            <Button
              type="submit"
              width="100%"
              color={buttonActive ? "" : "#fff"}
              backgroundColor={buttonActive ? "" : "#E1E1E1"}
              borderColor={buttonActive ? "" : "#E1E1E1"}
              hoverBorderColor={buttonActive ? "" : "#E1E1E1"}
            >
              {isSubmitting ? (
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
                "Continue"
              )}
            </Button>
          </ButtonContainer>
          {msg && <MessageBox />}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Step3;
