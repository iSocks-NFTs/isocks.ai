import { Container, Heading, TextBody } from "./style";
import Image from "next/image";
import { Button } from "../../Form";
import { useRouter } from "next/router";

export function ProductSection({ heading, textBody, imgSrc }) {
  const { push } = useRouter();

  return (
    <Container>
      <div>
        <Heading>{heading ? heading : "The iSock"}</Heading>
        <TextBody>
          {textBody
            ? textBody
            : "The ultimate in luxury and craftsmanship. Made from 100% handpicked fine cotton, our socks are handmade from start to finish, ensuring the highest quality and attention to detail."}
        </TextBody>
        <Button onClick={() => push("/buy")}>Buy Now</Button>
      </div>
      <div>
        <Image
          src={imgSrc ? imgSrc : "/img/products/sock_wrapped.jpg"}
          width={480}
          height={480}
          layout="intrinsic"
          alt="Sock Product"
        />
      </div>
    </Container>
  );
}
