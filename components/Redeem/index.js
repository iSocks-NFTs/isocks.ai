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
  CheckBoxContainer,
  CheckBox,
} from "./style";
import { Row, Col } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { useCountries } from "use-react-countries";
import Dropdown from "../DropDown";

const RedeemedComponent = () => {
  const [formValues, setFormValues] = React.useState({
    emailAddress: "",
    country: null,
    currentState: "",
    walletAddress: "",
    nftContractId: "",
    vendorCode: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [countryListData, setCountryListData] = React.useState([]);

  const { countries } = useCountries();

  const emailRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <Container>
      <Row>
        <Col>
          <Heading>Redeem</Heading>
          <P>
            You&apos;ll need to complete the form below in order to redeem your
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
            <Dropdown />
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
          <FormGroup>
            <Label htmlFor="nftContractId">NFT Contract ID</Label>
            <Input
              type="text"
              id="nftContractId"
              value={formValues.nftContractId}
              onChange={(e) =>
                setFormValues({ ...formValues, nftContractId: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="vendorCode">Vendor Code</Label>
            <Input
              type="text"
              placeholder="Enter vendor code if you're a vendor"
              id="vendorCode"
              value={formValues.vendorCode}
              onChange={(e) =>
                setFormValues({ ...formValues, vendorCode: e.target.value })
              }
              required
            />
          </FormGroup>
          <CheckBoxContainer>
            <CheckBox type="checkbox" name="isAVendor" id="vendorCheck" />
            <Label htmlFor="vendorCheck">
              I’m not a vendor (I bought the NFT by myself)
            </Label>
          </CheckBoxContainer>
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
