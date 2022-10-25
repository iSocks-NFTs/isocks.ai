import "../styles/globals.css";
import React from "react";
import GlobalContextProvider from "../context/globalContext";
import AuthContextProvider from "../context/authContext";
import TransactionContextProvider from "../context/transactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <TransactionContextProvider>
          <Component {...pageProps} />
        </TransactionContextProvider>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
