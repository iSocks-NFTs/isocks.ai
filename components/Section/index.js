import { Container, Image } from "./style";

export default function Section() {
  return (
    <Container>
      <div className="section">
        <Image src="/img/section/wb.png" alt="White and Black Photo" />
        <p>
          "We believe that the future of fashion is about more than just looking
          good, it is about being able to prove the authencity and ownership of
          your wardrobe. Join us on our journey to revolutionize the way we
          think about fashion and style. Shop our collection today and elevate
          your style with iSocksNFT."
        </p>
      </div>
    </Container>
  );
}
