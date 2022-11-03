import React from "react";
import Head from "next/head";
import { Heading } from "../../../../../components/QR/style";
import {
  Form,
  FormGroup,
  Label,
  ButtonContainer,
  Button,
  Input,
} from "../../../../../components/Form";
import { Container } from "../../../../../components/QR/style";
import Layout from "../../../../../layouts/admin_layout";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/router";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  // Fetch Data on single QR Code
  const response = await fetch(`https://api.isocks.ai/api/find/qr/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

const QR = ({ data }) => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    newLabel: "",
    newUrl: "",
  });
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [goBack, setBack] = React.useState(false);

  function deleteQr() {
    setIsDeleting(true);
    setError("");
    const { id } = data;
    axios
      .delete(`https://api.isocks.ai/api/delete/qr/${id}`)
      .then((response) => {
        if(response){
          console.log(response);
          router.push("/dashboard/admin/qr/list");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error") {
          setError("Network Error");
          setIsLoading(false);
        }
        if (error.response) {
          const { status } = error.response;
          if (status === 500) {
            setError("Server Error");
          }
        }
      });
  }

  function back() {
    setBack(true);
    router.push("/dashboard/admin/qr/list");
  }

  function handleSubmit(e) {
    e.preventDefault;
    setIsLoading(true);
    setError("");
    const { newLabel, newUrl } = formData;
    axios
      .patch(`https://api.isocks.ai/api/edit/qr/${data.id}`, {
        label: newLabel,
        url: newUrl,
      })
      .then((response) => {
        if(response){
          console.log(response);
          router.push("/dashboard/admin/qr/list");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error") {
          setError("Network Error");
          setIsLoading(false);
        }
        if (error.response) {
          const { status } = error.response;
          if (status === 500) {
            setIsLoading(false);
            setError("Server Error");
          }
        }
      });
  }
  return (
    <Layout>
      <Head>
        <title>iSocks | Editing QR Code {data?.label}</title>
      </Head>
      <Container>
        <Heading>Edit QR Code</Heading>
        <Heading fontWeight="300">
          Currently editing QR Code Label: {data?.label}
        </Heading>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="newLabel">New Label</Label>
            <Input
              type="text"
              value={formData.newLabel}
              onChange={(e) =>
                setFormData({ ...formData, newLabel: e.target.value })
              }
              id="newLabel"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newUrl">New URL</Label>
            <Input
              value={formData.newUrl}
              onChange={(e) =>
                setFormData({ ...formData, newUrl: e.target.value })
              }
              id="newUrl"
              required
              type="url"
            />
          </FormGroup>
          <Label textAlign="center" color="red">
            {error}
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
              "Update"
            )}
          </Button>
          <Button
            backgroundColor="var(--error)"
            borderColor="transparent"
            type="button"
            onClick={() => deleteQr()}
          >
            {isDeleting ? (
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
              "Delete QR"
            )}
          </Button>
          <Button
            onClick={() => back()}
            type="button"
            color="var(--primary-brand)"
            borderColor="#E3E5E8"
            backgroundColor="transparent"
            hoverBorderColor="#fff"
            hoverBackgroundColor="#E3E5E8"
          >
            {goBack ? (
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
              "Back"
            )}
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default QR;
