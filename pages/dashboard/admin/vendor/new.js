import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import { Card, CardContainer } from "../../../../components/BuyOption/style";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import {
  Button,
  ButtonContainer,
  Form,
  FormGroup,
  Input,
  Label,
} from "../../../../components/Form";
import Layout from "../../../../layouts/admin_layout";
import axios from "../../../api/axios";
import { AuthContext } from "../../../../context/authContext";
import Toast from "awesome-toast-component";

export default function NewVendor() {
  const { accountId } = useContext(AuthContext);
  const [goBack, setBack] = React.useState(false);
  const [isCreating, setIsCreating] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    currentState: "",
    nationality: "",
    noOfAvailableNFTs: "",
  });
  const router = useRouter();

  function clearFields() {
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      emailAddress: "",
      currentState: "",
      nationality: "",
      noOfAvailableNFTs: "",
    });
  }

  function handleSubmit(e) {
    setIsCreating(true);
    e.preventDefault();
    console.log(formData);
    axios
      .post(`/api/user/vendor/`, { ...formData, adminId: accountId })
      .then((res) => {
        console.log(res);
        setIsCreating(false);
        new Toast("Created New Vendor", {
          timeout: 3000,
        });
        setTimeout(() => {
          router.push("/dashboard/admin/vendor/manage");
        }, 1000);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
        setIsCreating(false);
        clearFields();
        if (err.status === 409) {
          new Toast("Failed To Create New Vendor", {
            style: {
              container: [["background-color", "red"]],
              message: [["color", "#eee"]],
            },
            timeout: 5000,
          });
        }
        if (err.response.data.error === "Vendor record already exists") {
          new Toast("Vendor with this Email already exists", {
            style: {
              container: [["background-color", "var(--error)"]],
              message: [["color", "#eee"]],
            },
            timeout: 5000,
          });
        }
      });
  }

  function back() {
    setBack(true);
    router.push("/dashboard/admin/vendor");
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | New Vendor</title>
      </Head>
      <Container>
        <Heading>Create New Vendor</Heading>
        <Text textAlign="center" fontSize="18px">
          You can set up Vendor's Information here
        </Text>
        <CardContainer justifyContent="center">
          <Card width="420px" height="fit-content">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input
                  type="text"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, emailAddress: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="currentState">Current State</Label>
                <Input
                  type="text"
                  id="currentState"
                  value={formData.currentState}
                  onChange={(e) =>
                    setFormData({ ...formData, currentState: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="countryOfResidence">Country</Label>
                <Input
                  type="text"
                  id="countryOfResidence"
                  value={formData.nationality}
                  onChange={(e) =>
                    setFormData({ ...formData, nationality: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="noOfNFTs">No of NFTs</Label>
                <Input
                  type="number"
                  id="noOfNFTs"
                  value={formData.noOfAvailableNFTs}
                  min="0"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      noOfAvailableNFTs: e.target.value,
                    })
                  }
                  required
                />
              </FormGroup>
              <ButtonContainer>
                <Button
                  type="submit"
                  backgroundColor="#fff"
                  color="var(--primary-brand)"
                >
                  {isCreating ? (
                    <TailSpin
                      height="25"
                      width="25"
                      color="var(--primary-brand)"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "Create Vendor"
                  )}
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button onClick={back}>
                  {goBack ? (
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
                    "Back"
                  )}
                </Button>
              </ButtonContainer>
            </Form>
          </Card>
        </CardContainer>
      </Container>
    </Layout>
  );
}
