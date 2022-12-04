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
import FailModal from "../../Modal/fail";
import SuccessModal from "../../Modal/success";
import { GlobalContext } from "../../../context/globalContext";

const Step4 = ({ page, setPage, formData, setFormData }) => {
  const [active, setActive] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    const id = window.localStorage.getItem("transactionId");
    console.log(id);
    if (id) {
      setId(id);
    }
  });

  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_LIVE_BASEURL
      : process.env.NEXT_PUBLIC_LOCAL_BASEURL;

  const isockEndpoint = `/api/verify/isock/upload/${id}`;
  const accessCardEndpoint = `/api/verify/access/upload/${id}`;

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

  const { modal, setModal } = React.useContext(GlobalContext);

  function checkStatus() {
    const { isocks, accessCard } = upload;
    console.log("Checking Status...");
    if (isocks === true || accessCard === true) {
      setActive(true);
    }
  }

  function handleIsocksUpload(e) {
    let files = e.target.files;
    let img = files[0];

    setErrorMsg("");
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
    setUploaded({
      ...upload,
      isocksFileData: e.target.result,
      isocks: true,
      isocksimgName: files[0].name,
      isocksFile: files[0],
    });

    checkStatus();
    console.log(files[0]);
  }

  function handleAccessCardUpload(e) {
    let files = e.target.files;
    let img = files[0];

    setErrorMsg("");

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

    setUploaded({
      ...upload,
      accessCardFileData: e.target.result,
      accessCard: true,
      accessCardImgName: files[0].name,
      accessCardFile: files[0],
    });

    checkStatus();
    console.log(files[0]);
  }

  function uploadImg(file,endpoint,fileType){
    const fd = new FormData();
    if(fileType === "isock"){
      fd.append("isock",file,file.name);
    } else {
      fd.append("accesscard",file,file.name);
    }

    fetch(`${baseURL + endpoint}`,{
      method:"PATCH",
      body:fd
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isocksFile, accessCardFile } = upload;
    const i = uploadImg(isocksFile,isockEndpoint,"isock");
    const j = uploadImg(accessCardFile,accessCardEndpoint,"accesscard");
  };

  return (
    <FormContainer
      marginTop="1rem"
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
