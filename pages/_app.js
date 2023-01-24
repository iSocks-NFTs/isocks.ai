import "../styles/globals.css";
import React from "react";
import GlobalContextProvider from "../context/globalContext";
import AuthContextProvider from "../context/authContext";
import TransactionContextProvider from "../context/transactionContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <GlobalContextProvider>
            <AuthContextProvider>
              <TransactionContextProvider>
                <Component {...pageProps} />
              </TransactionContextProvider>
            </AuthContextProvider>
          </GlobalContextProvider>
        </SessionProvider>
      </WagmiConfig>
    </Web3ReactProvider>
  );
}

export default MyApp;
