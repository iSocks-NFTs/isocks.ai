import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_CLOUD_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "iSocks Store",
  description: "Experience the Future of Fashion with iSocksNFT",
  url: "https://isocks.ai",
  icons: ["https://isocks.ai/img/logo/logo.png"],
};

const chains = [bsc, bscTestnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
