import { Container, Heading, TextBody } from "./style";
import { Button } from "../../Form";
import Image from "next/image";
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
      <Image
        width="550px"
        height="350px"
        src={imgSrc ? imgSrc : "/img/products/sock_wrapped.jpg"}
        alt="Sock Product"
      />
    </Container>
  );
}
