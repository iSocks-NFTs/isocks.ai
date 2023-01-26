import Head from "next/head";
import { Background } from "../../components/Chat";
import { useState } from "react";
import { Button } from "../../components/Form";
import { Heading, P } from "../../components/BuyOption/style";
import WalletConnectionOption from "../../components/WalletConnect";
import { AnimatePresence } from "framer-motion";
import { getSession } from "next-auth/react";

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {open ? <WalletConnectionOption setOpen={setOpen} /> : ""}
      </AnimatePresence>
      <Head>
        <title>iSocks | Wallet-to-Wallet Chat</title>
      </Head>
      <Background>
        <Heading>iSocks Wallet-To-Wallet Chat Beta v1</Heading>
        <P color="var(--primary-brand)" marginBottom="0">
          Connect with your web3 based wallet and sign-in.
        </P>
        <Button
          width="280px"
          backgroundColor="#fff"
          color="var(--primary-brand)"
          hoverBorderColor="#fff"
          hoverColor="#fff"
          hoverBackgroundColor="var(--primary-brand)"
          onClick={() => setOpen(true)}
        >
          Connect Wallet
        </Button>
      </Background>
    </>
  );
};

export default Chat;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/chat/user",
        permanent: false,
      },
    };
  }

  return {
    props: { user: null },
  };
}
