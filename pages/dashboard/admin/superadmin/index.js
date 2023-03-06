import Head from "next/head";
import Layout from "../../../../layouts/admin_layout";
import React from "react";
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
import { Button, ButtonContainer } from "../../../../components/Form";
import { useRouter } from "next/router";
import Toast from "awesome-toast-component";

export default function SuperAdmin({}) {
  const [goBack, setBack] = React.useState(false);
  const router = useRouter();

  function back() {
    setBack(true);
    router.push("/dashboard/admin");
  }

  function development() {
    new Toast("Feature still in Development", {
      timeout: 5000,
    });
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Super Admin Features</title>
      </Head>
      <Container>
        <Heading>Super Admin</Heading>
        <Text textAlign="center" fontSize="18px">
          Manage Admin Accounts
        </Text>
        <CardContainer>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
            onClick={development}
          >
            <Circle>
              <FiUser color="var(--primary-brand)" />
            </Circle>
            <Option>New Admin</Option>
            <OptionDescription>Create a new iSock Admin</OptionDescription>
          </Card>
          <Card justifyContent="center" cursor="pointer" onClick={development}>
            <Circle>
              <FiUser />
            </Circle>
            <Option>Manage Admins</Option>
            <OptionDescription>Review/Remove Admin Accounts</OptionDescription>
          </Card>
        </CardContainer>
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
