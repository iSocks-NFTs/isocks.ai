import { FaWallet } from "react-icons/fa";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <>
      <button
        className="bg-[--primary-brand] text-white px-5 py-3 rounded-md inline-flex justify-center items-center gap-x-3 border duration-300 hover:bg-white hover:text-black hover:border"
        onClick={() => open()}
      >
        <FaWallet />
        Connect Wallet
      </button>
    </>
  );
}
