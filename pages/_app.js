import "../styles/globals.css";
import React from "react";
import GlobalContextProvider from "../context/globalContext";
import AuthContextProvider from "../context/authContext";
import TransactionContextProvider from "../context/transactionContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { SessionProvider } from "next-auth/react";
import { Web3Modal } from "../context/Web3Modal";
import { CartContextProvider } from "../context/CartContext";
import NextNProgress from "nextjs-progressbar";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <CartContextProvider>
          <GlobalContextProvider>
            <AuthContextProvider>
              <TransactionContextProvider>
                <Web3Modal>
                  <NextNProgress
                    color="#000000"
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
                    options={{
                      showSpinner: false,
                    }}
                  />
                  <Component {...pageProps} />
                </Web3Modal>
              </TransactionContextProvider>
            </AuthContextProvider>
          </GlobalContextProvider>
        </CartContextProvider>
      </SessionProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
