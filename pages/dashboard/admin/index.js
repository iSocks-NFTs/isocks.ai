import React from "react";
import Head from "next/head";
import Router from "next/router";
import Layout from "../../../layouts/admin_layout";
import { Container, Heading, Span } from "../../../components/Dashboard/style";
import {
  Card,
  CardContainer,
  OptionDescription,
  Option,
  BuyOptionLink,
  ArrowRight,
  Circle,
  Image,
} from "../../../components/BuyOption/style";
import { GrMoney } from "react-icons/gr";
import { AuthContext } from "../../../context/authContext";
import useCheckSession from "../../../hooks/useCheckSession";

const Dashboard = () => {
  const router = Router;
  const { authStatus, setAuthStatus, setAuthUser } =
    React.useContext(AuthContext);
  const { emailAddress } = useCheckSession();

  React.useEffect(() => {
    if (!emailAddress) {
    } else {
      if (emailAddress.length === 0) {
        setAuthStatus(false);
        setAuthUser("");
        router.push("/dashboard/auth");
      }
    }
  }, [emailAddress,router,setAuthStatus,setAuthUser]);

  return (
    <Layout>
      <Head>
        <title>iSocks | Admin Dashboard</title>
      </Head>
      <Container>
        <Heading>
          <Span>Welcome</Span> Admin
        </Heading>
        <Heading fontWeight="300">Manage iSocks NFT Systems</Heading>
        <CardContainer>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
          >
            <Circle>
              <Image src="/img/logo/isock.svg" alt="Binance" />
            </Circle>
            <Option>Verified Users</Option>
            <OptionDescription>
              View list of Verified iSocks Users to review & manage them.
            </OptionDescription>
          </Card>
          <Card justifyContent="center" cursor="pointer">
            <Circle>
              <GrMoney />
            </Circle>
            <Option>Transactions</Option>
            <OptionDescription>
              Review and Confirm payment of NFTs
            </OptionDescription>
          </Card>
        </CardContainer>
      </Container>
    </Layout>
  );
};

export default Dashboard;
