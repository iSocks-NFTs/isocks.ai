import React from "react";
import { GlobalContext } from "../../context/globalContext";
import {
  Container,
  Image,
  Grid,
  ImgCaption,
  Heading,
  ContactUs,
  SocialContainer,
  Socials,
  Information,
  Brand,
} from "./footerStyles";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Grid>
        <Brand>
          <Link href="/">
            <Image src="/img/logo/logo_bg.png" alt="iSocks Logo" />
          </Link>
          <ImgCaption>A product of infinity Auctions</ImgCaption>
        </Brand>
        <Information>
          <Socials>
            <Heading>Socials</Heading>
            <SocialContainer>
              <Link
                href="https://www.facebook.com/100084982976478/posts/pfbid02n18vDRwtfzP8xeg1cuQeV4PHJHHZguSXydhU3vw1yzCS2x4dFC5ENo26eZB4qt4Ql/"
                target="_blank"
              >
                <FaFacebookSquare size={25} color="#fff" />
              </Link>
              <Link
                href="https://www.tiktok.com/@isocksnft?_t=8VmXPtv8jH4&_r=1"
                target="_blank"
              >
                <Image src="/img/logo/tiktok.svg" alt="icon" />
              </Link>
              <Link href="https://mobile.twitter.com/isocksNft" target="_blank">
                <Image src="/img/logo/twitter.svg" alt="icon" />
              </Link>
              <Link href="https://www.instagram.com/isocksnft/" target="_blank">
                <Image src="/img/logo/ig.svg" alt="icon" />
              </Link>
              <Link href="https://discord.gg/nbrsZY9z59" target="_blank">
                <Image src="/img/logo/discord.svg" alt="icon" />
              </Link>
            </SocialContainer>
          </Socials>
          <ContactUs>
            <span>Contact Us</span>
            <Link className="email" href="mailto:info@isocks.ai">
              info@isocks.ai
            </Link>
          </ContactUs>
        </Information>
      </Grid>
    </Container>
  );
};

export default Footer;
