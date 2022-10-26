import React, { useRef } from "react";
import Head from "next/head";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Row, Col } from "react-bootstrap";
import { Heading, P } from "../../../components/BuyOption/style";
import {
  FormContainer,
  FormGroup,
  Input,
  Button,
  Label,
  Form,
} from "../../../components/Form";
import Router from "next/router";
import { AuthContext } from "../../../context/authContext";
import { GlobalContext } from "../../../context/globalContext";

const Login = () => {
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = Router;

  const { onLogin, isLoggedIn } = React.useContext(AuthContext);
  const {baseUrl} = React.useContext(GlobalContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  function clearField() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    const emailAddress = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post(`${baseUrl}/api/login`, {
        emailAddress,
        password,
      })
      .then((res) => {
        if (res) {
          if (res.data.status === "No matching User") {
            setMessage("Incorrect Email/Password");
            clearField();
            setIsLoading(false);
          }
          if (res.data.status === "success") {
            onLogin(res.data.token);
            Router.push("/dashboard/admin");
          }
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setIsLoading(false);
          setMessage("Server Error");
          clearField();
        }
      });
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
      router.push("/dashboard/admin");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <Head>
        <title>iSocks | Admin Sign In</title>
      </Head>
      <Row>
        <Heading>iSocks Admin Access</Heading>
        <P>Login in with Email & Password</P>
      </Row>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input type="email" id="emailAddress" ref={emailRef} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" ref={passwordRef} required />
          </FormGroup>
          <Label textAlign="center" color="red">
            {message ? message : ""}
          </Label>
          <Button type="submit">
            {isLoading ? (
              <TailSpin
                height="25"
                width="25"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Login;
