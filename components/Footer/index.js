import { Container, Image,Grid, ImgCaption,Heading,ContactUs,SocialContainer,Socials,Information,Brand } from "./footerStyles";
import Link from 'next/link';

const Footer = () =>{
    return(
        <Container>
            <Grid>
                <Brand>
                    <Image src="/img/logo/logo_bg.png" alt="iSocks Logo" />
                    <ImgCaption>A product of infinity Auctions</ImgCaption>
                </Brand>
                <Information>
                    <Socials>
                        <Heading>Socials</Heading>
                        <SocialContainer>
                            <Link href="">
                                <Image src="/img/logo/tiktok.svg" alt="icon"/>
                            </Link>
                            <Link href="">
                                <Image src="/img/logo/telegram.svg" alt="icon"/>
                            </Link>
                            <Link href="">
                                <Image src="/img/logo/twitter.svg" alt="icon"/>
                            </Link>
                            <Link href="">
                                <Image src="/img/logo/ig.svg" alt="icon"/>
                            </Link>
                            <Link href="">
                                <Image src="/img/logo/discord.svg" alt="icon"/>
                            </Link>
                        </SocialContainer>
                    </Socials>
                    <ContactUs>
                        <span>Contact Us</span>
                        <a className="email" href="mailto:sample@gmail.com">Sample@gmail.com</a>
                    </ContactUs>
                </Information>
            </Grid>
        </Container>
    )
}

export default Footer;