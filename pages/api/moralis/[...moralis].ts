import { MoralisNextApi } from "@moralisweb3/next";

export default MoralisNextApi({
  apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
  authentication: {
    domain: 'isocks.ai',
    uri: process.env.NEXTAUTH_URL,
    timeout: 120,
  }
});
