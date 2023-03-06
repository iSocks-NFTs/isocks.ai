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
import { Button, ButtonContainer } from "../../../../components/Form";
import { useRouter } from "next/router";

export default function Vendor() {
  const [goBack, setBack] = React.useState(false);
  const router = useRouter();

  function back() {
    setBack(true);
    router.push("/dashboard/admin");
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Vendor Management</title>
      </Head>
      <Container>
        <div className="text-center my-4">
          <h3 className="font-semibold text-3xl">Vendors</h3>
          <p className="text-xl">Manage Vendor Accounts</p>
        </div>
        <CardContainer>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
            onClick={() => router.push("/dashboard/admin/vendor/new")}
          >
            <Circle>
              <FiUser color="var(--primary-brand)" />
            </Circle>
            <Option>New Vendor</Option>
            <OptionDescription>
              Create a new iSock Vendor account
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            cursor="pointer"
            onClick={() => router.push("/dashboard/admin/vendor/manage")}
          >
            <Circle>
              <FiUser />
            </Circle>
            <Option>Manage Vendors</Option>
            <OptionDescription>
              Review & Remove Vendor Accounts
            </OptionDescription>
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
