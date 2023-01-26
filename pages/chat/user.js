import { signOut } from "next-auth/react";
import Head from "next/head";
import {
  Background,
  ChatLayout,
  ChatScreen,
  Img,
  Input,
  InputForm,
  MessageList,
  Message,
  NoMoreMessages,
  SendButton,
  TopBar,
} from "../../components/Chat";
import { Button } from "../../components/Form";
import { useState } from "react";
import { getSession } from "next-auth/react";

const ChatPage = ({ user }) => {
  const [message, setMessage] = useState("");
  console.log(user);

  return (
    <>
      <Head>
        <title>iSocks | Wallet-to-Wallet Chat</title>
      </Head>
      <Background>
        <ChatLayout>
          <TopBar>
            <Img src="/img/logo/isock.svg" />
            <div className="tag">
              <span className="community_name">iSocks Community Chat</span>
              <span className="members">
                {user
                  ? user.address
                  : "0xF2255c5F4dd0a2dfC4B65bab08EE27CA58333362"}
              </span>
            </div>
          </TopBar>
          <ChatScreen>
            <NoMoreMessages>~ no more new messages to load ~</NoMoreMessages>
            <Message></Message>
          </ChatScreen>
          <InputForm>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendButton type="button">Send</SendButton>
          </InputForm>
        </ChatLayout>
        <Button
          width="280px"
          backgroundColor="#fff"
          color="var(--primary-brand)"
          hoverBorderColor="#fff"
          hoverColor="#fff"
          hoverBackgroundColor="var(--primary-brand)"
          onClick={() => signOut({ redirect: "/chat" })}
        >
          Sign Out
        </Button>
      </Background>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/chat",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default ChatPage;
