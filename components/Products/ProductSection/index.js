import { Container, Heading, TextBody } from "./style";
import { Button } from "../../Form";
import Image from "next/image";
import { useRouter } from "next/router";
import socks from "../../../public/img/products/sock_wrapped.jpg";
import thePackage from "../../../public/img/products/package.jpg";

export function ProductSection() {
  const { push } = useRouter();

  const products = [
    {
      imgUrl: socks,
      heading: "The iSocks",
      description:
        "The ultimate in luxury and craftsmanship. Made from 100% handpicked fine cotton, our socks are handmade from start to finish, ensuring the highest quality and attention to detail.",
    },
    {
      imgUrl: thePackage,
      heading: "The Package",
      description:
        "A work of art in itself. Designed to perfectly complement our handmade, premium socks, each box is made from high-quality materials and features unique, eye catching designs, Whether it's for personal use or as a gift, the iSocksNFT packaging box adds an extra touch of luxury to the already premium product.",
    },
  ];

  return (
    <Container>
      <h3 className="text-4xl text-center font-semibold">Our Products</h3>
      <p className="text-center text-[var(--subtle-text)]">
        What We have Built
      </p>
      <div className="flex sm:flex-row flex-col sm:justify-center items-center gap-5 mt-5 p-5">
        {products.map((product, index) => {
          return (
            <div
              className="text-center sm:w-[350px] sm:h-[480px] w-[280px]  flex flex-col justify-start border-2 rounded-md  hover:scale-105 duration-500 ease-in hover:cursor-pointer"
              key={index}
            >
              <Image
                src={product.imgUrl}
                className="rounded-md object-contain"
                alt={product.heading}
                loader={({ src }) => src}
              />
              <h4 className="text-2xl font-semibold mt-2">{product.heading}</h4>
              <p className="p-2">{product.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
