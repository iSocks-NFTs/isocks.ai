import React from "react";
import {
  ButtonContainer,
  Button,
  FormGroup,
  Input,
  Label,
  Form,
} from "../../Form";
import { motion } from "framer-motion";
import Router from "next/router";
import axios from "axios";
import { GlobalContext } from "../../../context/globalContext";
import { TailSpin } from "react-loader-spinner";

const Step2 = ({page,setPage}) => {
  const [error, setError] = React.useState("");
  const { baseUrl } = React.useContext(GlobalContext);
  const router = Router;
  const [qrData, setQrData] = React.useState({
    label: "",
    url: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function generateQRCode(e) {
    e.preventDefault();
    const { label, url } = qrData;
    axios
      .post(`${baseUrl}/api/create/qr`, {
        label,
        url,
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "ok") {
          router.reload();
        }
        if (data.status === "failed") {
          setError("Failed to Generate QR");
        }
      });
  }

  return (
    <>
      <Form
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onSubmit={(e) => generateQRCode(e)}
      >
        <FormGroup>
          <Label htmlFor="qrLabel">Label</Label>
          <Input
            value={qrData.label}
            onChange={(e) => setQrData({ ...qrData, label: e.target.value })}
            id="qrLabel"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="qrUrl">QR Code URL</Label>
          <Input
            value={qrData.url}
            onChange={(e) => setQrData({ ...qrData, url: e.target.value })}
            id="qrUrl"
            type="url"
            required
          />
        </FormGroup>
        <Label color="red" textAlign="center">
          {error}
        </Label>
        <ButtonContainer>
          <Button
            type="button"
            color="var(--primary-brand)"
            borderColor="#E3E5E8"
            backgroundColor="transparent"
            hoverBorderColor="#fff"
            hoverBackgroundColor="#E3E5E8"
            onClick={() => setPage(page - 1)}
            width="100%"
          >
            Previous
          </Button>
          <Button type="submit" width="100%">
            {isSubmitting ? (
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
              "Continue"
            )}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Step2;
