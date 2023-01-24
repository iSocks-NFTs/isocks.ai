import Image from "next/image";
import { Container, TextBody, Heading } from "./style";
import { Button } from "../Form";
import { useRouter } from "next/router";

export default function ChatSection() {
  const { push } = useRouter();
  return (
    <Container>
      <div class="text">
        <Heading>iSocks Live Chat</Heading>
        <TextBody>
          Join our group chat and connect with like-minded individuals who share
          your passion for fashion and technology. Share your thoughts, ideas
          and advice, and be a part of our community. We strive to provide a
          space where you can feel comfortable, and where you can be heard.
          <br />
          <br />
          Don't miss out on the action! Click the "Join The Community" button to
          join our group chat now and start connecting with our community."
        </TextBody>
        <Button onClick={() => push("/chat")}>Join The Community</Button>
      </div>
      <Image src={`/img/chat/chat02.jpg`} width="450" height="450px" />
    </Container>
  );
}
