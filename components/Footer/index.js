import React from "react";
import {GlobalContext} from '../../context/globalContext'
import { Container, Image,Grid, ImgCaption,Heading,ContactUs,SocialContainer,Socials,Information,Brand } from "./footerStyles";
import Link from 'next/link';

const Footer = () =>{
    const {setComingSoonModal} = React.useContext(GlobalContext);
    return(
        <Container>
            <Grid>
                <Brand>
                    <Link href="/"><Image src="/img/logo/logo_bg.png" alt="iSocks Logo" /></Link>
                    <ImgCaption>A product of infinity Auctions</ImgCaption>
                </Brand>
                <Information>
                    <Socials>
                        <Heading>Socials</Heading>
                        <SocialContainer>
                            <span onClick={() => setComingSoonModal(true)}>
                                <Image src="/img/logo/tiktok.svg" alt="icon"/>
                            </span>
                            <span onClick={() => setComingSoonModal(true)}>
                                <Image src="/img/logo/telegram.svg" alt="icon"/>
                            </span>
                            <Link href="https://mobile.twitter.com/isocksNft">
                                <Image src="/img/logo/twitter.svg" alt="icon"/>
                            </Link>
                            <span onClick={() => setComingSoonModal(true)}>
                                <Image src="/img/logo/ig.svg" alt="icon"/>
                            </span>
                            <Link href="https://discord.gg/nbrsZY9z59">
                                <Image src="/img/logo/discord.svg" alt="icon"/>
                            </Link>
                        </SocialContainer>
                    </Socials>
                    <ContactUs>
                        <span>Contact Us</span>
                        <Link className="email" href="mailto:infinityactionnft@gmail.com">infinityactionnft@gmail.com</Link>
                    </ContactUs>
                </Information>
            </Grid>
        </Container>
    )
}

export default Footer;