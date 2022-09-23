import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { user } from "./user";
import { TailSpin } from "react-loader-spinner";
import Router from "next/router";

const JoinWhiteList = () => {
  const [formValues, setFormValues] = React.useState({
    emailAddress: "",
    fullName: "",
    phoneNumber: "",
    footSize: 10,
    EthereumWalletAddress: "",
    whiteListAcceptance: "",
  });

  const [loading, setLoading] = useState(false);

  const [uploaded, setUploaded] = React.useState({
    twitter: false,
    twtimgName: "test.png",
    twitterFile: null,
    twitterFileData: null,
    binance: false,
    bnbimgName: "test.png",
    binanceFile: null,
    binanceFileData: null,
    IGimgName: "test.png",
    instagram: false,
    instagramFile: null,
    instagramFileData: null,
  });

  function handleTwitterUpload(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (e) => {
      setUploaded({
        ...uploaded,
        twitterFileData: e.target.result,
        twitter: true,
        twtimgName: files[0].name,
        twitterFile: files[0],
      });
    };
    console.log(files[0]);
  }

  function binanceUpload(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (e) => {
      setUploaded({
        ...uploaded,
        binanceFileData: e.target.result,
        binance: true,
        bnbimgName: files[0].name,
        binanceFile: files[0],
      });
    };
    console.log(files[0]);
  }

  function IGupload(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (e) => {
      setUploaded({
        ...uploaded,
        instagramFileData: e.target.result,
        instagram: true,
        IGimgName: files[0].name,
        instagramFile: files[0],
      });
    };
    console.log(files[0]);
  }

  function clearInput() {
    setFormValues({
      ...formValues,
      emailAddress: "",
      fullName: "",
      phoneNumber: "",
      footSize: 10,
      EthereumWalletAddress: "",
      whiteListAcceptance: "",
    });
    setLoading(false)
    inputRef.current.focus();
  }

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    // Validate Form
    const doc = {
      _type: "user",
      emailAddress: formValues.emailAddress,
      fullName: formValues.fullName,
      phoneNumber: formValues.phoneNumber,
      footSize: formValues.footSize,
      EthereumWalletAddress: formValues.EthereumWalletAddress,
      whiteListAcceptance: formValues.whiteListAcceptance,
    };
    user
      .create(doc)
      .then((res) => {
        console.log(res);
        Router.push('/whitelist/success');
      })
      .catch((err) => {
        clearInput();
      })
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
              type="tel"
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
              Follow us on{" "}
              <a href="https://mobile.twitter.com/isocksNft">Twitter</a>, click
              the notification bell, retweet & like our pinned tweet.
              <br /> Screenshot and submit here.
            </Label>
            {uploaded.twitter ? (
              <Uploaded>
                <div className="uploaded_icon">
                  <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                  {uploaded.twtimgName}
                </div>
                <div>
                  <Icon
                    src="/img/icons/trash.svg"
                    alt="Delete Image"
                    onClick={() =>
                      setUploaded({
                        ...uploaded,
                        twitter: false,
                        twtimgName: "",
                      })
                    }
                  />
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
              Follow Infinity Auction on{" "}
              <a href="https://www.binance.com/en/nft/profile/infinityauctions-75c2a0a5e2b863dd04940f1085992f58">
                Binance
              </a>
              . Screenshot and submit here.
            </Label>
            {uploaded.binance ? (
              <Uploaded>
                <div className="uploaded_icon">
                  <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                  {uploaded.bnbimgName}
                </div>
                <div>
                  <Icon
                    src="/img/icons/trash.svg"
                    alt="Delete Image"
                    onClick={() =>
                      setUploaded({
                        ...uploaded,
                        binance: false,
                        bnbimgName: "",
                      })
                    }
                  />
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
              Follow ISOCKSNFT on{" "}
              <a href="https://www.instagram.com/isocksnft/">Instagram</a>. and
              comment “iSocks on my feet” Screenshot and submit here.
            </Label>
            {uploaded.instagram ? (
              <Uploaded>
                <div className="uploaded_icon">
                  <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                  {uploaded.IGimgName}
                </div>
                <div>
                  <Icon
                    src="/img/icons/trash.svg"
                    alt="Delete Image"
                    onClick={() =>
                      setUploaded({
                        ...uploaded,
                        instagram: false,
                        IGimgName: "",
                      })
                    }
                  />
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
          <Button type="submit">
            {loading ? (
              <TailSpin
                height="25"
                width="25"
                color="#0D0D0D"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Submit"
            )}
          </Button>
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
