import { useState } from "react";
import styled from "styled-components";
import { BackGround, ModalContainer, CloseIcon } from "../Modal/Modalstyle";
import { motion } from "framer-motion";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { signIn } from "next-auth/react";
import { useConnect, useAccount, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { AiFillCloseCircle } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";
import Toast from "awesome-toast-component";

export default function WalletConnectionOption({ setOpen }) {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  async function walletSelect(option) {
    console.log(`Selected : ${option}`);
    if (option === "MetaMask") {
      await handleAuthMetaMask();
    }

    if (option === "Wallet Connect") {
      await handleAuthWalletConnect();
    }
  }

  async function handleAuthWalletConnect() {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new WalletConnectConnector({ options: { qrcode: true } }),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/chat/user",
    });

    const userData = { address: account, chainId: chain.id };
    console.log("User Data 😁", userData);

    push(url);
  }

  async function handleAuthMetaMask() {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });
    const userData = { address: account, chainId: chain.id };

    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/chat/user",
    });

    console.log("User Data 😁", userData);
    console.log("Signature 📃", signature);
    push(url);
  }

  const options = [
    {
      walletName: "MetaMask",
      logo: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png",
    },
    {
      walletName: "Wallet Connect",
      logo: "https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png",
    },
  ];

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalContainer>
        <CloseIcon>
          <AiFillCloseCircle onClick={() => setOpen(false)} />
        </CloseIcon>
        {options.map((option, index) => {
          return (
            <WalletOption
              key={index}
              onClick={() => walletSelect(option?.walletName)}
            >
              <img src={option?.logo} alt="" />
              {option?.walletName}
            </WalletOption>
          );
        })}
      </ModalContainer>
    </BackGround>
  );
}

const WalletOption = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-brand);
  border: 1px solid var(--primary-brand);
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #fff;
    color: var(--secondary-brand);
    background-color: var(--primary-brand);
    border: 1px solid var(--primary-brand);
  }
  img {
    width: 35px;
    height: 35px;
  }
`;
