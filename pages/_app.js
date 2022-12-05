import "../styles/globals.css";
import '../styles/pagination.scss';
import React from "react";
import GlobalContextProvider from "../context/globalContext";
import AuthContextProvider from "../context/authContext";
import TransactionContextProvider from "../context/transactionContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalContextProvider>
        <AuthContextProvider>
          <TransactionContextProvider>
            <Component {...pageProps} />
          </TransactionContextProvider>
        </AuthContextProvider>
      </GlobalContextProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
