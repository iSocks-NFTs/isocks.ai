import React from "react";
import axios from "axios";
import {
  CardContainer,
  Container,
  Heading,
  P,
  Card,
  CardHeading,
  BankDetailsBox,
  Copy,
  AccountDetails,
  AccountNo,
  MakeTransfer,
  BankDetails,
  BankLeft,
  BankName,
  BankRight,
  UserAccountName,
  AccountName,
  Kuda,
  Circle,
  Option,
  OptionDescription,
  Image,
  BuyOptionLink,
  PaymentProof,
  FileUploadLabel,
  ButtonContainer,
  PaymentMessage,
} from "../style";
import { Button, Uploaded, Icon, FileInput, Form } from "../../Form";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GlobalContext } from "../../../context/globalContext";
import FailModal from "../../Modal/fail";
import SuccessModal from "../../Modal/success";
import Router from "next/router";

const Step5 = ({ formData, setFormData }) => {
  const [copied, setCopied] = React.useState(false);
  const [id, setId] = React.useState("");
  const { uploadedProof } = formData;
  const { modal, setModal } = React.useContext(GlobalContext);
  const [errorMsg, setErrorMsg] = React.useState("");

  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_LIVE_BASEURL
      : process.env.NEXT_PUBLIC_LOCAL_BASEURL;
  const endpoint = `/api/upload/payment/${id}`;

  React.useEffect(() => {
    const id = window.localStorage.getItem("transactionId");
    console.log(id);
    if (id) {
      setId(id);
    }
  });

  function handleUpload(e) {
    setErrorMsg("");
    let files = e.target.files;
    let img = files[0];

    if (
      !["image/jpeg", "image/gif", "image/png", "image/svg+xml"].includes(
        img.type
      )
    ) {
      setErrorMsg("Only images are allowed!");
      console.log("Only images are allowed.");
      setModal({ ...modal, failModal: true });
      return;
    }

    if (img.size > 3 * 1024 * 1024) {
      setErrorMsg("File must be less than 3MB");
      console.log("File must be less than 3MB");
      return;
    }

    console.log("Attempting Upload...");
    const fd = new FormData();
    fd.append("payment-proof", img, img.name);

    setFormData({
      ...formData,
      uploadedProof: {
        uploaded: true,
        imgfileName: files[0].name,
        imgFile: files[0],
      },
    });

    console.log(fd);

    fetch(`${baseURL + endpoint}`, {
      method: "PATCH",
      body: fd,
    })
      .then((res) => res.json())
      .then((json) => {
        setModal({ ...modal, successModal: true });
        console.log(json);
        setTimeout(() => {
          Router.push('/');
        }, 2000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {modal.failModal ? (
        <FailModal heading="Upload Failed" message={errorMsg} />
      ) : (
        <></>
      )}
      {modal.successModal ? (
        <SuccessModal
          heading="Upload Successful"
          message="Transaction uploaded!"
        />
      ) : (
        <></>
      )}
      <Row>
        <Col>
          <Heading>Vendor</Heading>
          <P>
            iSocks risk Management to reduce your trading risk, the verified
            advertiser has already paid a deposit as collateral.
          </P>
        </Col>
      </Row>
      <CardContainer>
        <Card bgColor="var(--primary-brand)" border="none" color="#fff">
          <CardHeading>Account Details</CardHeading>
          <hr />
          <MakeTransfer>
            Make a bank transfer <span>#68,000</span>
          </MakeTransfer>
          <BankDetailsBox>
            <AccountDetails>
              <span>Account Number</span>
              <AccountNo>{formData.KudaBankAccountNumber}</AccountNo>
            </AccountDetails>
            <CopyToClipboard
              text={formData.KudaBankAccountNumber}
              onCopy={() => setCopied(true)}
            >
              <Copy src="/img/icons/copy.svg" alt="Copy Clipboard Icon" />
            </CopyToClipboard>
          </BankDetailsBox>
          <BankDetails>
            <BankLeft>
              <BankName>Bank Name</BankName>
              <Kuda>Kuda Bank</Kuda>
            </BankLeft>
            <BankRight>
              <AccountName>Account Name</AccountName>
              <UserAccountName>Freman og</UserAccountName>
            </BankRight>
          </BankDetails>
        </Card>
        <PaymentProof>
          <FileUploadLabel htmlFor="fileUpload">
            <Card height={uploadedProof.uploaded && "260px"}>
              <Circle>
                <Image
                  src="/img/icons/bi_cloud-upload-fill.svg"
                  alt="Upload Icon"
                />
              </Circle>
              <Option>Proof of payment</Option>
              <OptionDescription>
                Please upload a screenshot of your payment as a proof.
              </OptionDescription>
              <BuyOptionLink fontWeight="bolder">
                Upload or Drag Image
              </BuyOptionLink>
            </Card>
          </FileUploadLabel>
          {uploadedProof.uploaded && (
            <Uploaded width="300px">
              <div className="uploaded_icon">
                <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                {uploadedProof.imgfileName}
              </div>
              <div>
                <Icon
                  src="/img/icons/trash.svg"
                  alt="Delete Image"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      uploadedProof: {
                        uploaded: false,
                        imgfileName: "test.png",
                      },
                    });
                  }}
                />
              </div>
            </Uploaded>
          )}
        </PaymentProof>
        <Form>
          <FileInput
            id="fileUpload"
            type="file"
            onChange={(e) => handleUpload(e)}
          />
        </Form>
      </CardContainer>
      {uploadedProof.paymentConfirmed && (
        <ButtonContainer>
          <Button>Paid</Button>
          <PaymentMessage>
            <Icon src="/img/icons/info-circle.svg" alt="info circle" />
            <span>
              Kindly know that it takes 24hr to process your payment. note that
              your isocks NFT will be deposited to the wallet address provided
              and the vendor code sent to the email you provided. Always protect
              the vendor code.
            </span>
          </PaymentMessage>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Step5;
