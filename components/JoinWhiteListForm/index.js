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
import { motion } from "framer-motion";

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
    twtimgName: "test.png",
    twitter: false,
    bnbimgName: "test.png",
    binance: false,
    IGimgName: "test.png",
    instagram: false,
  });

  function handleTwitterUpload(e) {
    let files = e.target.files;
    setUploaded({ ...uploaded, twitter: true, twtimgName: files[0].name });
  }

  function binanceUpload(e) {
    let files = e.target.files;
    setUploaded({ ...uploaded, binance: true, bnbimgName: files[0].name });
  }

  function IGupload(e) {
    let files = e.target.files;
    setUploaded({ ...uploaded, instagram: true, IGimgName: files[0].name });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

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
              name="emailAddress"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
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
              name="phoneNumber"
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
              name="footSize"
              onChange={(e) =>
                setFormValues({ ...formValues, footSize: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="walletAddress">Ethereum ERC20 Address </Label>
            <Input
              type="text"
              id="walletAddress"
              name="walletAddress"
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
              name="acceptance"
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
              <Uploaded>
                <div className="uploaded_icon">
                  <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                  {uploaded.twtimgName}
                </div>
                <div>
                  <Icon src="/img/icons/trash.svg" alt="Delete Image" onClick={() => setUploaded({...uploaded,twitter:false,twtimgName:''})} />
                </div>
              </Uploaded>
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
            <FileInput
              type="file"
              id="twitter_proof"
              name="twitterProof"
              onChange={(e) => handleTwitterUpload(e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Follow Infinity Auction on Binance. Screenshot and submit here.
            </Label>
            {uploaded.binance ? (
              <Uploaded>
                <div className="uploaded_icon">
                  <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                  {uploaded.bnbimgName}
                </div>
                <div>
                  <Icon src="/img/icons/trash.svg" alt="Delete Image" onClick={() => setUploaded({...uploaded,binance:false,bnbimgName:''})} />
                </div>
              </Uploaded>
            ) : (
              <>
                <UploadLabel htmlFor="binance_proof">
                  {" "}
                  <Icon
                    src="/img/icons/document-upload.svg"
                    alt="Upload Image Icon"
                  />{" "}
                  Upload Image Here
                </UploadLabel>
              </>
            )}
            <FileInput
              type="file"
              id="binance_proof"
              name="binanceProof"
              onChange={(e) => binanceUpload(e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Follow ISOCKSNFT on Instagram. and comment “iSocks on my feet”
              Screenshot and submit here.
            </Label>
            {uploaded.instagram ? (
              <Uploaded>
                <div className="uploaded_icon">
                  <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                  {uploaded.IGimgName}
                </div>
                <div>
                  <Icon src="/img/icons/trash.svg" alt="Delete Image" onClick={() => setUploaded({...uploaded,instagram:false,IGimgName:''})} />
                </div>
              </Uploaded>
            ) : (
              <>
                <UploadLabel htmlFor="instagram_proof">
                  {" "}
                  <Icon
                    src="/img/icons/document-upload.svg"
                    alt="Upload Image Icon"
                  />{" "}
                  Upload Image Here
                </UploadLabel>
              </>
            )}
            <FileInput
              name="igproof"
              type="file"
              id="instagram_proof"
              onChange={(e) => IGupload(e)}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
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
