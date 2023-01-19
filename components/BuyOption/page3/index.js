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
  Icon,
} from "../../Form";
import { motion } from "framer-motion";
import axios from "../../../pages/api/axios";
import { TailSpin } from "react-loader-spinner";
import { TransactionContext } from "../../../context/transactionContext";
import Toast from "awesome-toast-component";

const Step3 = ({ page, setPage, formData, setFormData }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { storeData } = React.useContext(TransactionContext);
  const CREATE_TRANSACTION = "/api/transaction/create";

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const { vendorOption, emailAddress, phoneNumber, walletAddress } = formData;
    const newEmailAddress = emailAddress.toLowerCase();

    axios
      .post(CREATE_TRANSACTION, {
        emailAddress: newEmailAddress,
        phoneNumber,
        vendorId: vendorOption,
        buyerWalletAddress: walletAddress,
      })
      .then((response) => {
        if (response.data.status === "ok") {
          const { record } = response.data;
          const { transactionId, user } = record;
          storeData(user, transactionId);
          setIsSubmitting(false);
          new Toast("Transaction Initiated", {
            timeout: 3000,
          });
          setTimeout(() => {
            setPage(page + 1);
          }, 2000);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        new Toast("Failed to Initiate Transaction", {
          style: {
            container: [["background-color", "red"]],
            message: [["color", "#eee"]],
          },
          timeout: 3000,
        });
        console.log(error);
      });
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
          <FormGroup>
            <Label fontWeight="400" htmlFor="emailAddress">
              Email
            </Label>
            <Input
              type="emailAddress"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label fontWeight="400" htmlFor="phoneNumber">
              Phone Number
            </Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label fontWeight="400" htmlFor="walletAddress">
              Wallet Address Used in purchase
            </Label>
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.walletAddress}
              onChange={(e) =>
                setFormData({ ...formData, walletAddress: e.target.value })
              }
              required
            />
          </FormGroup>
          <ButtonContainer>
            <Button
              type="button"
              color="var(--primary-brand)"
              borderColor="#E3E5E8"
              backgroundColor="transparent"
              hoverBorderColor="#fff"
              hoverBackgroundColor="#E3E5E8"
              onClick={() => setPage(page - 1)}
              width="100%"
            >
              Previous
            </Button>
            <Button type="submit" width="100%">
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
          <FormGroup flexDirection="row">
            <Icon src="/img/icons/info-circle.svg" alt="info circle" />
            <span>
              You will need a wallet in order to buy from a<br /> vendor know
              more here.
            </span>
          </FormGroup>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Step3;
