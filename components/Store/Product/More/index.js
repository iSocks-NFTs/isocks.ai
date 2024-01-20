import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function MoreProducts() {
  function imgURl(url) {
    return `/img/products/2023/${url}`;
  }

  const products = [
    {
      imgUrl: imgURl("green.jpg"),
      heading: "Winker",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/67501288",
    },
    {
      imgUrl: imgURl("grey.jpg"),
      heading: "Citizen",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/71068380",
    },
    {
      imgUrl: imgURl("lemon.jpg"),
      heading: "Female Citizen",
      description: "Kool Klan",
      price: "0.01 ETH",
      url: "https://www.binance.com/en/nft/item/66363867",
    },
    {
      imgUrl: imgURl("light-green.jpg"),
      heading: "Female Citizen",
      description: "Kool Klan",
      price: "0.01 ETH",
      url: "https://www.binance.com/en/nft/item/66363867",
    },
    {
      imgUrl: imgURl("pink.jpg"),
      heading: "Citizen",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/71068380",
    },

    {
      imgUrl: imgURl("pink.jpg"),
      heading: "Citizen",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/71068380",
    },

    {
      imgUrl: imgURl("pink.jpg"),
      heading: "Citizen",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/71068380",
    },
  ];

  return (
    <div className="w-full py-3 my-5 space-y-3">
      <h3 className="uppercase font-Zen-Dots text-3xl text-center">
        More products
      </h3>
      <div className="flex overflow-x-auto gap-3 justify-start items-center px-2 w-full">
        {products.map((product, index) => {
          return (
            <div className="relative h-fit w-fit shadow-md" key={index}>
              <Image
                src={product.imgUrl}
                width={350}
                height={400}
                key={index}
                className="rounded-md cursor-pointer"
                layout="fixed"
              />
              <div className="flex absolute top-0 w-full h-full flex-col justify-between p-2 text-white">
                <div className="space-y-1 bg-black bg-opacity-50 w-fit p-3 rounded-md">
                  <p className="text-xl">{product.heading}</p>
                  <p className="text-xl">{product.description}</p>
                  <p className="text-lg">{product.price}</p>
                </div>
                <div className="flex justify-end p-5 mb-1 text-black  rounded-md w-full">
                  <div className="bg-white shadow-md p-3 rounded-md">
                    <FaShoppingCart size={25} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
