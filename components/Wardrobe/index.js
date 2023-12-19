import Image from "next/image";
import shopping from "../../public/illustration/shopping.svg";
import { useRouter } from "next/router";

export default function Wardrobe() {
  const { push } = useRouter();
  return (
    <div className="w-full h-fit flex flex-col-reverse items-center justify-between bg-[var(--primary-brand)] px-3 py-10 sm:gap-0 gap-y-5">
      <div className="text-[var(--light)] space-y-5 sm:text-left text-center flex flex-col items-center justify-center">
        <h3 className="font-semibold text-center lg:text-5xl text-2xl py-3 w-full">
          Secure Your Unstoppable Domain Now!<br />
          Claim It Before It's Gone!
        </h3>
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
      <div className="sm:w-[30%] w-[100%]">
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
