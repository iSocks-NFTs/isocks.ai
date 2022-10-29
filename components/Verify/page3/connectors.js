import { UAuthConnector } from "@uauth/web3-react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

// Instanciate your other connectors.
export const injected = new InjectedConnector({ supportedChainIds: [1] });

export const walletconnect = new WalletConnectConnector({
  infuraId: '24a33794805b4a2c962e674f31277ba4',
  qrcode: true,
});

export const uauth = new UAuthConnector({
  clientID: "8d942179-0841-496c-a1d4-a6c87b19636b",
  redirectUri:"http://127.0.0.1:3000/verify",
  postLogoutRedirectUri: "http://127.0.0.1:3000/verify",
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
