import { Container } from "./style";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

function imgURl(url) {
  return `/img/products/2023/${url}`;
}

export function ProductSection() {
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
      imgUrl: imgURl("purple.jpg"),
      heading: "Winker",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/67501288",
    },
    {
      imgUrl: imgURl("winker_blue.jpg"),
      heading: "Winker",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/67501288",
    },
    {
      imgUrl: imgURl("winker.jpg"),
      heading: "Winker",
      description: "J!J! Klan",
      price: "0.08 ETH",
      url: "https://www.binance.com/en/nft/item/67501288",
    },
    {
      imgUrl: imgURl("yellow.jpg"),
      heading: "Female Citizen",
      description: "Kool Klan",
      price: "0.01 ETH",
      url: "https://www.binance.com/en/nft/item/66363867",
    },
  ];

  return (
    <Container>
      <h3 className="text-4xl text-center font-semibold">Our Products</h3>
      <p className="text-center text-[var(--subtle-text)]">
        Pick From Our Collection
      </p>
      <div className="flex sm:flex-row flex-col flex-wrap mx-auto justify-center gap-4 items-center mt-5 p-5">
        {products.map((product, index) => {
          return (
            <Link key={index} href={product.url}>
              <div className="text-center sm:w-[350px] sm:h-[480px] w-[280px] flex flex-col justify-start items-center border-2 rounded-md  hover:scale-105 duration-500 ease-in hover:cursor-pointer">
                <img
                  src={product.imgUrl}
                  className="rounded-t-md object-contain w-full"
                  alt={product.heading}
                  loader={({ src }) => src}
                />
                <div className="flex flex-row items-start gap-x-2 w-full justify-between p-2 mt-2">
                  <div className="flex flex-col gap-y-2 w-full items-start">
                    <h4 className="text-2xl font-semibold mt-2">
                      {product.heading}
                    </h4>
                    <p className="p-2 text-xl">{product.description}</p>
                  </div>
                  <div className="w-full flex flex-col items-end gap-y-2">
                    <p className="p-2 inline-flex gap-x-2 items-center font-bold">
                      {product.price} <FaEthereum color="purple" />
                    </p>
                    <p className="inline-flex p-2 gap-x-2 items-center">
                      Buy Now <CiShoppingCart />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
