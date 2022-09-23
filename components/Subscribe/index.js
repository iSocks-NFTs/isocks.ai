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
import { user } from "../JoinWhiteListForm/user";
import { GlobalContext } from "../../context/globalContext";
import { TailSpin } from "react-loader-spinner";

const Subscribe = () => {
  const [email, setEmailAddress] = React.useState("");
  const [err, setMsg] = React.useState("");
  const { setSubscribeForm } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const doc = {
      _type: "emailAddresses",
      emailAddress: email,
    };
    user
      .create(doc)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setSubscribeForm(true);
      })
      .catch(() => {
        setMsg("Email Subscription Failed!");
        setLoading(false);
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
                value={email}
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
              <p>{err}</p>
            </Form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
