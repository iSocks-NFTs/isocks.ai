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

export default function ManageVendor({}) {
  const [goBack, setBack] = React.useState(false);
  const router = useRouter();

  function back() {
    setBack(true);
    router.push("/dashboard/admin/vendor");
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Vendor Management</title>
      </Head>
      <Container>
        <Heading>Manage Vendors</Heading>
        <Text textAlign="center" fontSize="18px">
          You can Review and Remove Vendors
        </Text>

        <ButtonContainer marginTop="1rem">
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
      </Container>
    </Layout>
  );
}
