import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Button,
  Container,
  Form,
  FormContainer,
  Heading,
  Input,
  Label,
  P,
  FormGroup,
} from "./style";
import { motion } from "framer-motion";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext";

const WalletVerification = () => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const [walletList,setWalletList] = React.useState([]);
  const [msg, setMsg] = React.useState("");
  const { setAddressVerified } = React.useContext(GlobalContext);

  function searchWallet(userWallet,walletList){
    walletList.forEach((walletAddress) =>{
      for(let i = 0; i < walletList.length; i++){
        if(walletAddress.owner_of === userWallet){
          setMsg('User is Eligible to be whitelisted!')
          setAddressVerified(true)
        } else{
          setMsg('User is not Elegible to be whitelisted !')
        }
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchWallet(walletAddress,walletList)
  }

  React.useEffect(() => {
    const options = {
      method: "GET",
      url: "https://deep-index.moralis.io/api/v2/nft/0x85444182a28533100E98237E2Ee5B43fFfe2363F/owners",
      params: { chain: "bsc", format: "decimal" },
      headers: {
        accept: "application/json",
        "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWalletList(response.data.result)
      })
      .catch(function (error) {
        console.error(error);
      });
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
          <Heading>Wallet Address Verification</Heading>
          <P>
            Provide your BNB Address to validate your eligibility to join the
            whitelist.
          </P>
        </Col>
      </Row>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="walletAddress">BNB Wallet Address</Label>
            <Input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </FormGroup>
          <p>{msg}</p>
          <Button>Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default WalletVerification;
