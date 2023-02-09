import React, { useRef } from "react";
import Head from "next/head";
import axios from "../../api/axios";
import { TailSpin } from "react-loader-spinner";
import { Row } from "react-bootstrap";
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
import { useCookies } from "react-cookie";
const LOGIN = "/api/login";
import Toast from "awesome-toast-component";

const Login = () => {
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [cookie, setCookie] = useCookies(["user"]);

  const { onLogin } = React.useContext(AuthContext);

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
      .post(LOGIN, {
        emailAddress,
        password,
      })
      .then((res) => {
        if (res) {
          if (res.data.status === "success") {
            onLogin(res.data.token);
            setCookie("user", res.data.token, {
              path: "/",
              maxAge: 3600 * 24 * 3,
              sameSite: true,
            });
            new Toast("Login Successful", {
              timeout: 5000,
            });
            Router.push("/dashboard/admin");
          }
          if (res.data.status === "unauthorized") {
            setMessage("Invalid Access Key");
            setIsLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Network Error") {
          new Toast("Network Error", {
            style: {
              container: [["background-color", "red"]],
              message: [["color", "#eee"]],
            },
            timeout: 5000,
          });
          clearField();
          setIsLoading(false);
        }
        if (err.response) {
          const { status } = err.response;
          if (status === 401 || status === 404) {
            setMessage("Incorrect Email/Password");
            new Toast("Incorrect Email/Password", {
              style: {
                container: [["background-color", "red"]],
                message: [["color", "#eee"]],
              },
              timeout: 5000,
            });
            clearField();
            setIsLoading(false);
          }
          if (status === 500) {
            setMessage("Server Error");
            clearField();
            setIsLoading(false);
          }
        }
      });
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Head>
        <title>iSocks | Admin Sign In</title>
      </Head>
      <div>
        <h4 className="text-3xl font-semibold">iSocks Admin Access</h4>
        <p className="font-thin text-center">Login in with Email & Password</p>
      </div>
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
    </div>
  );
};

export default Login;
