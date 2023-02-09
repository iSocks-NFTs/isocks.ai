import { FaHandshake, FaEthereum } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import unstoppableDomain from "../../public/img/logo/partners/unstoppabledomain.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PartnerSection() {
  const { push } = useRouter();
  const iconSize = 45;
  const color = "#8c8ca1";
  const content = [
    {
      icon: <FaHandshake size={iconSize} color={color} />,
      text: "Partner with us to offer your customers unique, collectible merchandise enhanced with NFT technology.",
    },
    {
      icon: <FaEthereum size={iconSize} color={color} />,
      text: "Join a Web3 market leader and enhance your brand's credibility by offering NFT-linked physical products.",
    },
    {
      icon: <GiLifeSupport size={iconSize} color={color} />,
      text: "With our support and resources, our partnership can drive success and bring your brand to the forefront of the NFT revolution.",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-20 py-10">
      <h3 className="font-semibold text-4xl">Partner With Us</h3>
      <div className="flex xl:flex-row flex-col border-b-2 border-black border-dotted pb-10">
        {content.map((content, index) => {
          const { icon, text } = content;
          return (
            <div
              key={index}
              className="text-center flex justify-center flex-col items-center sm:w-[400px] w-[280px] gap-2"
            >
              {icon}
              <p className="text-xl">{text}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Image
          src={unstoppableDomain}
          alt="Unstoppable Domain Logo"
          onClick={() =>
            push("https://unstoppabledomains.com/?ref=infinityauctions")
          }
          className="hover:cursor-pointer"
        />
      </div>
      <div>
        <button
          onClick={() => push("/partners")}
          className="bg-[#fff] py-[10px] px-[20px] border-black border-[1px] text-2xl hover:bg-black hover:border-white hover:text-white duration-300 ease-in rounded-md"
        >
          Become a Partner
        </button>
      </div>
    </div>
  );
}
