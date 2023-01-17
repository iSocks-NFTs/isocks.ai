import Head from "next/head";
import React from "react";
import Layout from "../../../../layouts/admin_layout";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import { FiUser } from "react-icons/fi";
import {
  Card,
  CardContainer,
  OptionDescription,
  Option,
  Circle,
} from "../../../../components/BuyOption/style";
import { TailSpin } from "react-loader-spinner";
import {
  Button,
  ButtonContainer,
  Form,
  FormGroup,
  Label,
  Input,
} from "../../../../components/Form";
import { useRouter } from "next/router";
import axios from "../../../api/axios";
import { GlobalContext } from "../../../../context/globalContext";

export default function NewVendor() {
  const [goBack, setBack] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("", { ...formData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
                />
              </FormGroup>
              <ButtonContainer>
                <Button type="submit">Create Vendor</Button>
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
