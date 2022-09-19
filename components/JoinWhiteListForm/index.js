import { Row, Col } from "react-bootstrap";
import {
  Container,
  P,
  Heading,
  FormContainer,
  JoinDiscord,
  JoinDiscordText,
  Button,
  Form,
  Input,
  Label,
} from "./joinWhiteList";

const JoinWhiteList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Whitelist</Heading>
          <P>
            iSocks NFT will be airdropped to the wallet address you provided on
            the launch day.
          </P>
        </Col>
      </Row>
      <FormContainer>
        <Form></Form>
        <JoinDiscord>
          <JoinDiscordText></JoinDiscordText>
        </JoinDiscord>
      </FormContainer>
    </Container>
  );
};

export default JoinWhiteList;
