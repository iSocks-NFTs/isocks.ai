import React from "react";
import {
  FormContainer,
  Form,
  CheckBoxContainer,
  CheckBox,
  Label,
  FormGroup,
  Input,
  CardContainer,
  Card,
  Circle,
  ArrowRight,
  BuyOptionLink,
  FileInput,
  UploadLabel,
  Uploaded,
  Icon,
  OptionDescription,
  Image,
  Option,
  LabelContainer,
} from "../style";
import { motion } from "framer-motion";
import { Button } from "../../../components/Form/index";

const Step4 = ({ page, setPage, formData, setFormData }) => {
  const [formFilled, setFormFilled] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const [upload, setUploaded] = React.useState({
    isocks: false,
    isocksimgName: "test.png",
    isocksFile: null,
    isocksFileData: null,
    accessCard: false,
    accessCardImgName: "test.png",
    accessCardFile: null,
    accessCardFileData: null,
  });

  function handleIsocksUpload(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (e) => {
      setUploaded({
        ...upload,
        isocksFileData: e.target.result,
        isocks:true,
        isocksimgName: files[0].name,
        isocksFile: files[0],
      });
    };
    reader.onloadend = () =>{
      checkStatus();
    }
    console.log("iSocks Image Upload:", reader.readyState === 1 ? 'File Loaded' : 'File Unloaded');
    console.log(files[0]);
  }

  function handleAccessCardUpload(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (e) => {
      setUploaded({
        ...upload,
        accessCardFileData: e.target.result,
        accessCard:true,
        accessCardImgName: files[0].name,
        accessCardFile: files[0],
      });
    };
    reader.onloadend = () =>{
      checkStatus();
    }
    console.log("Access Card Image Upload:", reader.readyState === 1 ? 'File Loaded' : 'File Unloaded');
    console.log(files[0]);
    
  }

  function checkStatus() {
    const { isocksFileData,accessCardFileData } = upload;
    console.log('Checking Status...');
    if (isocksFileData || accessCardFileData) {
      setActive(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isocksFile, accessCardFile } = upload;
    alert('Image Submission!')
  };

  return (
    <FormContainer
      marginTop="1rem"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form onSubmit={(e) => handleSubmit(e)}>
        <CardContainer>
          <Label width="auto" htmlFor="isocks">
            <Card>
              <Circle>
                <Image
                  src="/img/icons/bi_cloud-upload-fill.svg"
                  alt="Upload Icon"
                />
              </Circle>
              <Option>iSocks</Option>
              <OptionDescription>
                Take a photo of your iSocks please your photos should clearly
                show full card.
              </OptionDescription>
              <BuyOptionLink>
                Upload or drag image
                <ArrowRight
                  src="/img/logo/arrow-right.svg"
                  alt="Arrow Right Icon"
                />
              </BuyOptionLink>
            </Card>
          </Label>
          <Label width="auto" htmlFor="accessCard">
            <Card>
              <Circle>
                <Image
                  src="/img/icons/bi_cloud-upload-fill.svg"
                  alt="Upload Icon"
                />
              </Circle>
              <Option>Access card</Option>
              <OptionDescription>
                Take a photo of your card please your photos should clearly show
                full card.
              </OptionDescription>
              <BuyOptionLink>
                Upload or drag image
                <ArrowRight
                  src="/img/logo/arrow-right.svg"
                  alt="Arrow Right Icon"
                />
              </BuyOptionLink>
            </Card>
          </Label>
        </CardContainer>
        <LabelContainer>
          <FileInput
            type="file"
            id="isocks"
            name="iSocksImg"
            onChange={(e) => handleIsocksUpload(e)}
            required
          />
          {upload.isocks && (
            <Uploaded>
              <div className="uploaded_icon">
                <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                {upload.isocksimgName}
              </div>
              <div>
                <Icon
                  src="/img/icons/trash.svg"
                  alt="Delete Image"
                  onClick={() => {
                    setUploaded({
                      ...upload,
                      isocks: false,
                      isocksimgName: "test.png",
                    });
                  }}
                />
              </div>
            </Uploaded>
          )}
          <FileInput
            type="file"
            id="accessCard"
            name="accessCardImg"
            onChange={(e) => handleAccessCardUpload(e)}
            required
          />
          {upload.accessCard && (
            <Uploaded>
              <div className="uploaded_icon">
                <Icon src="/img/icons/image.svg" alt="Upload Image Icon" />{" "}
                {upload.accessCardImgName}
              </div>
              <div>
                <Icon
                  src="/img/icons/trash.svg"
                  alt="Delete Image"
                  onClick={() => {
                    setUploaded({
                      ...upload,
                      accessCard: false,
                      accessCardImgName: "test.png",
                    });
                  }}
                />
              </div>
            </Uploaded>
          )}
        </LabelContainer>
        <Button
          type="submit"
          color={active ? "#fff" : "#fff"}
          borderColor={active ? "var(--primary-brand)" : "#E3E5E8"}
          backgroundColor={active ? "var(--primary-brand)" : "#E3E5E8"}
          hoverColor={active ? "var(--primary-brand)" : "#fff"}
          hoverBorderColor={active ? "var(--primary-brand)" : "#fff"}
          hoverBackgroundColor={active ? "#fff" : "#E3E5E8"}
          cursor={active ? "pointer" : "auto"}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Step4;
