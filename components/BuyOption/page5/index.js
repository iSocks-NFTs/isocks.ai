import React from "react";
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
import { Button, Uploaded, Icon, FileInput } from "../../Form";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Step5 = ({ page, setPage, formData, setFormData }) => {
  const [copied, setCopied] = React.useState(false);
  const { uploadedProof } = formData;

  function handleUpload(e) {
    let files = e.target.files;
    setFormData({
      ...formData,
      uploadedProof: {
        uploaded: true,
        imgfileName: files[0].name,
      },
    });
  }

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <FileInput
          id="fileUpload"
          type="file"
          onChange={(e) => handleUpload(e)}
        />
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
