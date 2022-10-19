import "../styles/globals.css";
import React from "react";
import GlobalContextProvider from "../context/globalContext";
import AuthContextProvider from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
