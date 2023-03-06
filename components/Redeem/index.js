import React, { useState, useMemo } from "react";
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
import countryList from "react-select-country-list";
import CountrySelector from "../../components/CountrySelector";
import Toast from "awesome-toast-component";
import axios from "../../pages/api/axios";

import { useRouter } from "next/router";

const RedeemedComponent = () => {
  const [value, setValue] = useState("");
  const [formValues, setFormValues] = React.useState({
    emailAddress: "",
    currentState: "",
    walletAddress: "",
    nftContractId: "",
    vendorId: "",
    isBuyer: false,
    countryOfResidence: value,
  });

  const [loading, setLoading] = React.useState(false);

  const { push } = useRouter();

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    setFormValues({ ...formValues, countryOfResidence: value.label });
  };

  function isVendorChecked(e) {
    setFormValues({ ...formValues, isBuyer: e.target.checked });
  }

  function clearFields() {
    setFormValues({
      ...formValues,
      emailAddress: "",
      currentState: "",
      walletAddress: "",
      nftContractId: "",
      vendorId: "",
      isBuyer: false,
      countryOfResidence: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { countryOfResidence } = formValues;

    if (countryOfResidence === "") {
      new Toast("Please select your country of residence", {
        timeout: 5000,
        style: {
          container: [["background-color", "red"]],
          message: [["color", "#eee"]],
        },
      });

      return;
    }

    console.log(formValues);

    axios
      .post("/api/buyer", formValues)
      .then((res) => {
        if (res.status === 200) {
          new Toast("Form Successfully Submitted", {
            timeout: 3000,
          });
          setLoading(false);
          setTimeout(() => {
            clearFields();
            new Toast("Redirecting...");
            push("/");
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
        const { status, data } = err.response;
        if (status === 409 || status === 404 || status === 400) {
          new Toast(data.reason, {
            timeout: 5000,
            style: {
              container: [["background-color", "red"]],
              message: [["color", "#eee"]],
            },
          });
        }
      })
      .finally(() => {
        setLoading(false);
        clearFields();
      });
  }

  return (
    <Container>
      <div className="mt-5">
        <Heading>Redeem</Heading>
        <P>
          You&apos;ll need to complete the form below in order to redeem your
          socks.
        </P>
      </div>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formValues.emailAddress}
              onChange={(e) =>
                setFormValues({ ...formValues, emailAddress: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="country">Country</Label>
            <CountrySelector
              options={options}
              value={value}
              changeHandler={changeHandler}
            />
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
              Wallet Address used in purchase
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
          {!formValues.isBuyer && (
            <FormGroup>
              <Label htmlFor="vendorCode">Vendor Code</Label>
              <Input
                type="text"
                placeholder="Enter vendor code if you're a vendor"
                id="vendorCode"
                value={formValues.vendorId}
                onChange={(e) =>
                  setFormValues({ ...formValues, vendorId: e.target.value })
                }
                required
              />
            </FormGroup>
          )}
          <CheckBoxContainer>
            <input
              type="checkbox"
              id="vendorCheck"
              checked={formValues.isBuyer}
              onChange={isVendorChecked}
              className="appearance-none w-6 h-6 border rounded border-gray-400 checked:bg-black checked:border-transparent"
            />
            <label
              htmlFor="vendorCheck"
              className="ml-2 text-gray-700 select-none cursor-pointer"
            >
              I’m not a vendor (I bought the NFT by myself)
            </label>

            {/* <CheckBox
              type="checkbox"
              name="isAVendor"
              id="vendorCheck"
              checked={formValues.isBuyer}
              onChange={isVendorChecked}
            />
            <Label htmlFor="vendorCheck">
              I’m not a vendor (I bought the NFT by myself)
            </Label> */}
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
