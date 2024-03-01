import "../styles/globals.css";
import React from "react";
import GlobalContextProvider from "../context/globalContext";
import AuthContextProvider from "../context/authContext";
import TransactionContextProvider from "../context/transactionContext";
import { CartContextProvider } from "../context/CartContext";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <GlobalContextProvider>
        <AuthContextProvider>
          <TransactionContextProvider>
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
          </TransactionContextProvider>
        </AuthContextProvider>
      </GlobalContextProvider>
    </CartContextProvider>
  );
}

export default MyApp;
