import { UAuthConnector } from "@uauth/web3-react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

// Instanciate your other connectors.
export const injected = new InjectedConnector({ supportedChainIds: [1] });

export const walletconnect = new WalletConnectConnector({
  infuraId: process.env.INFURA_ID,
  qrcode: true,
});

export const uauth = new UAuthConnector({
  clientID: process.env.clientID,
  redirectUri: process.env.redirectUri,
  postLogoutRedirectUri: process.env.redirectUri,
  // Scope must include openid and wallet
  scope: "openid wallet",

  // Injected and walletconnect connectors are required.
  connectors: { injected, walletconnect },
});

const connectors = {
  injected,
  walletconnect,
  uauth,
};

export default connectors;
