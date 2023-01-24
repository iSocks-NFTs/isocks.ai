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
  Circle,
  Image,
} from "../../../components/BuyOption/style";
import { GrMoney } from "react-icons/gr";
import { AiOutlineQrcode } from "react-icons/ai";
import { FiSettings, FiUsers, FiUserCheck } from "react-icons/fi";
import { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { TailSpin } from "react-loader-spinner";
import Toast from "awesome-toast-component";
import { baseURL } from "../../../config";
import { AuthContext } from "../../../context/authContext";

const Dashboard = () => {
  const router = Router;
  const [id, setId] = React.useState();
  const [cookie, setCookie, removeCookie] = useCookies(["users"]);
  const [loading, setLoading] = useState(false);
  const [userStatus, setUserStatus] = useState(null);
  const { accountId } = useContext(AuthContext);

  useEffect(() => {
    setId(cookie.user);
    setLoading(true);
    const endpoint = `/api/find/user/${accountId}`;
    fetch(`${baseURL + endpoint}`, {
      headers: {
        key: process.env.NEXT_PUBLIC_BACKEND_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>iSocks | Admin Dashboard</title>
      </Head>
      <Container height="fit-content">
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
          <Card
            justifyContent="center"
            cursor="pointer"
            onClick={() => router.push("/dashboard/admin/transactions")}
          >
            <Circle>
              <GrMoney />
            </Circle>
            <Option>Transactions</Option>
            <OptionDescription>
              Review and Confirm payment of NFTs
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
            onClick={() => Router.push("/dashboard/admin/qr")}
          >
            <Circle>
              <AiOutlineQrcode color="var(--primary-brand)" />
            </Circle>
            <Option>QR Code Generation</Option>
            <OptionDescription>
              Generate, Edit & Delete QR Codes
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            cursor="pointer"
            onClick={() => router.push(`/dashboard/admin/account/${id}`)}
          >
            <Circle>
              <FiSettings />
            </Circle>
            <Option>Manage Account</Option>
            <OptionDescription>
              Review and Change Account Settings
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
            onClick={() => router.push(`/dashboard/admin/vendor`)}
          >
            <Circle>
              <FiUserCheck color="var(--primary-brand)" />
            </Circle>
            <Option>Vendor Management</Option>
            <OptionDescription>
              Create Vendors & Manage their Accounts{" "}
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            cursor="pointer"
            onClick={() => router.push(`/dashboard/admin/partners`)}
          >
            <Circle>
              <FiUsers />
            </Circle>
            <Option>Review Partnership</Option>
            <OptionDescription>
              Review & Manage List of Partners
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            cursor="pointer"
            bgColor="var(--primary-brand)"
            color="#fff"
            onClick={() => router.push(`/dashboard/admin/superadmin`)}
          >
            <Circle>
              <FiUsers color="var(--primary-brand)" />
            </Circle>
            <Option>Super Admin</Option>
            <OptionDescription>
              Create & Manage Admin Accounts
            </OptionDescription>
          </Card>
        </CardContainer>
      </Container>
    </Layout>
  );
};

export default Dashboard;
