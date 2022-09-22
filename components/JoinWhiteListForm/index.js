import React from "react";
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
  FormGroup,
  Input,
  Label,
  TextArea,
  FileInput,
  UploadLabel,
  Uploaded,
  Terms,
  Icon,
} from "./joinWhiteList";

import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {motion} from 'framer-motion';

const JoinWhiteList = () => {
  const [formValues, setFormValues] = React.useState({
    emailAddress: "",
    fullName: "",
    phoneNumber: "",
    footSize: 10,
    EthereumWalletAddress: "",
    whiteListAcceptance: "",
  });

  const [uploaded, setUploaded] = React.useState({
    twitter: false,
    binance: false,
    instagram: false,
  });


  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }
  
  const inputRef = React.useRef();

  React.useEffect(() =>{
    inputRef.current.focus();
  },[])

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="emailAddress">Email</Label>
            <Input
              type="email"
              id="emailAddress"
              value={formValues.emailAddress}
              onChange={(e) =>
                setFormValues({ ...formValues, emailAddress: e.target.value })
              }
              ref={inputRef}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              value={formValues.fullName}
              onChange={(e) =>
                setFormValues({ ...formValues, fullName: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              id="phoneNumber"
              value={formValues.phoneNumber}
              onChange={(e) =>
                setFormValues({ ...formValues, phoneNumber: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="footSize">Foot Size</Label>
            <Input
              type="number"
              id="footSize"
              value={formValues.footSize}
              onChange={(e) =>
                setFormValues({ ...formValues, footSize: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="walletAddress">Etherium wallet address </Label>
            <Input
              type="text"
              id="walletAddress"
              value={formValues.EthereumWalletAddress}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  EthereumWalletAddress: e.target.value,
                })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="acceptance">
              Why do you feel you should be accepted to whitelist?{" "}
            </Label>
            <TextArea
              id="acceptance"
              value={formValues.whiteListAcceptance}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  whiteListAcceptance: e.target.value,
                })
              }
              cols={4}
              placeholder="Please enter note here..."
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Follow us on Twitter, click the notification bell, retweet & like
              our pinned tweet.
              <br /> Screenshot and submit here.
            </Label>
            {uploaded.twitter ? (
              <></>
            ) : (
              <>
                <UploadLabel htmlFor="twitter_proof">
                  {" "}
                  <Icon
                    src="/img/icons/document-upload.svg"
                    alt="Upload Image Icon"
                  />{" "}
                  Upload Image Here
                </UploadLabel>
              </>
            )}
            <FileInput type="file" id="twitter_proof" />
          </FormGroup>
          <FormGroup>
            <Label>
              Follow Infinity Auction on Binance. Screenshot and submit here.
            </Label>
            <UploadLabel htmlFor="binance_proof">
              {" "}
              <Icon
                src="/img/icons/document-upload.svg"
                alt="Upload Image Icon"
              />{" "}
              Upload Image Here
            </UploadLabel>
            <FileInput type="file" id="binance_proof" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="instagram_proof">
              Follow ISOCKSNFT on Instagram. and comment “iSocks on my feet”
              Screenshot and submit here.
            </Label>
            <UploadLabel>
              {" "}
              <Icon
                src="/img/icons/document-upload.svg"
                alt="Upload Image Icon"
              />{" "}
              Upload Image Here
            </UploadLabel>
            <FileInput type="file" id="instagram_proof" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>

        <Terms>
          <Icon src="/img/icons/info_circle.svg" alt="info circle" /> Only
          whitelisted persons can request for customization on the physical
          socks pegged to isocksNft.
        </Terms>
        <JoinDiscord>
          <FaDiscord size={25} />
          <JoinDiscordText>
            Click here to join our Discord where the magic happens.
          </JoinDiscordText>
        </JoinDiscord>
      </FormContainer>
    </Container>
  );
};

export default JoinWhiteList;
