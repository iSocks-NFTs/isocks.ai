import React from "react";
import {
  Button,
  Container,
  FormContainer,
  Heading,
  Form,
  Input,
} from "./subscribeStyles";
import { Row, Col } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

const Subscribe = () => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://isocks-mail-chimp.onrender.com/subscribe", {
        emailAddress,
      })
      .then((response) => {
        if (response.status === 200) {
          setMsg(
            "Thank you for subscribing! You will now receive updates and exclusive offers from us."
          );
          setLoading(false);
          setEmailAddress("");
        }
      })
      .catch((error) => {
        setLoading(false);
        setMsg("");
        setEmailAddress("");
        setMsg("Subscription Failed! Please try again later 😥");
        console.log(error);
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Subscribe to iSocks</Heading>
        </Col>
        <Col>
          <FormContainer>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Input
                type="email"
                name="email"
                id="mce-EMAIL"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Enter your mail"
                required
              />
              <Button>
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
                  "Subscribe"
                )}
              </Button>
            </Form>
            <p className="status">{msg}</p>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
