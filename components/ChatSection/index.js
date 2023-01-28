import Image from "next/image";
import { Container, TextBody, Heading } from "./style";
import { Button } from "../Form";
import { useRouter } from "next/router";

export default function ChatSection() {
  const { push } = useRouter();
  return (
    <Container>
      <Image
        src={`/img/chat/chat02.jpg`}
        width="450"
        height="450px"
        alt="Chat Illustration"
      />
      <div class="text">
        <Heading>iSocks Wallet-to-Wallet Chat</Heading>
        <TextBody>
          We are excited to offer our customers a convenient and secure
          wallet-to-wallet live chat service that is available 24/7. This
          feature allows you to chat with other NFT holders in real-time.
          However please be aware that this service is in Beta v1 Phase and will
          only be available for iSocks holders after our launch. But we are
          giving you the opportunity to enjoy it free now and experience of Web3
          before the launch.
          <br />
          <br />
          Don't miss out on the action! Click the "Connect Wallet" button now
          and start connecting with our community."
        </TextBody>
        <Button onClick={() => push("/chat")}>Connect Wallet</Button>
      </div>
    </Container>
  );
}
