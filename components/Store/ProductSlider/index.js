import { FaShoppingCart } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";

export default function ProductSlider() {
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
  ];

  return (
    <section className="w-full my-5 py-10">
      <h3 className="font-Zen-Dots text-white uppercase text-center text-3xl my-2">
        iSocks Collection
      </h3>
      <div className="flex overflow-x-auto gap-3 justify-start items-center px-2 w-full text-white">
        {products.map((product, index) => {
          return (
            <Link key={index} href={product.url}>
              <div className="text-center flex flex-col justify-between items-center border rounded-md hover:cursor-pointer w-fit">
                <Image
                  src={product.imgUrl}
                  className="rounded-t-md object-contain w-full"
                  alt={product.heading}
                  loader={({ src }) => src}
                  width={420}
                  height={420}
                />
                <div className="flex flex-row items-center w-full justify-between p-2">
                  <div className="w-full flex flex-col items-start gap-y-3">
                    <h4 className="text-xl font-semibold text-left">
                      {product.heading}
                    </h4>
                    <p className="text-xl">{product.description}</p>
                  </div>
                  <div className="w-full flex flex-col items-end gap-y-3">
                    <p className="inline-flex gap-x-2 items-center font-bold">
                      {product.price} <LiaEthereum />
                    </p>
                    <p className="inline-flex gap-x-2 items-center">
                      Buy Now <FaShoppingCart />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-full text-center mt-5">
        <a
          className="uppercase font-Zen-Dots rounded-sm border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 px-5 py-3 hover:bg-white hover:text-[--primary-brand] w-full text-center text-white"
          href="/store/product"
        >
          View All
        </a>
      </div>
    </section>
  );
}
