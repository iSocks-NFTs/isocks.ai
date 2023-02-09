import Image from "next/image";
import shopping from "../../public/illustration/shopping.svg";
import { useRouter } from "next/router";

export default function Wardrobe() {
  const { push } = useRouter();
  return (
    <div className="w-full h-fit flex sm:flex-row flex-col-reverse items-center justify-between bg-[var(--primary-brand)] p-3 sm:gap-0 gap-4">
      <div className="sm:w-[40%] w-[100%] text-[var(--light)] space-y-2 sm:space-y-5 sm:text-left text-center flex flex-col sm:items-start items-center">
        <h3 className="font-semibold lg:text-5xl text-2xl">
          Unique and memorable online address that represents you and your Web3
          fashion products
        </h3>
        <p className="font-thin lg:text-3xl text-xl">
          It's a powerful tool that can help you stand out and build a strong
          online presence in the new fashion realm .
        </p>
        <button
          onClick={() =>
            push("https://unstoppabledomains.com/?ref=infinityauctions")
          }
          className="flex justify-center items-center gap-2 border-white border-2 py-[10px] px-[20px] rounded-full text-black bg-white focus:border-gray-300 hover:bg-transparent hover:text-white"
        >
          <img
            src="/img/icons/unstoppable.svg"
            alt=""
            className="w-[25px] h-[25px]"
          />
          Claim Your Wardrobe Name
        </button>
      </div>
      <div className="sm:w-[40%] w-[100%]">
        <img
          src="/illustration/shopping.svg"
          alt="Shopping Online"
          className="rounded-md hover:cursor-pointer"
          onClick={() =>
            push("https://unstoppabledomains.com/?ref=infinityauctions")
          }
        />
      </div>
    </div>
  );
}
