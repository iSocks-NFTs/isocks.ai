import Toast from "awesome-toast-component";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../../components/Form/index";
import { GlobalContext } from "../../../context/globalContext";
import FailModal from "../../Modal/fail";
import SuccessModal from "../../Modal/success";
import {
  ArrowRight,
  BuyOptionLink,
  Card,
  CardContainer,
  Circle,
  FileInput,
  Form,
  FormContainer,
  Icon,
  Image,
  Label,
  LabelContainer,
  Option,
  OptionDescription,
  Uploaded,
} from "../style";
import { TailSpin } from "react-loader-spinner";

const Step4 = ({ page, setPage, formData, setFormData }) => {
  const [active, setActive] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [id, setId] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("");
  const { push } = useRouter();

  React.useEffect(() => {
    const id = window.localStorage.getItem("verifyId");
    console.log(id);
    if (id) {
      setId(id);
    }
  }, [id]);

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

  async function uploadImg(file, endpoint, fileType) {
    const fd = new FormData();
    if (fileType === "isock") {
      fd.append("isock", file, file.name);
    } else {
      fd.append("accesscard", file, file.name);
    }

    const data = await fetch(`${baseURL + endpoint}`, {
      method: "PATCH",
      body: fd,
      headers: {
        key: process.env.NEXT_PUBLIC_BACKEND_KEY,
      },
    });

    return data;
  }

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const { isocksFile, accessCardFile } = upload;

    Promise.all([
      uploadImg(isocksFile, isockEndpoint, "isock"),
      uploadImg(accessCardFile, accessCardEndpoint, "accesscard"),
    ])
      .then((responses) => {
        const image1 = responses[0];
        const image2 = responses[1];
        if (image1.status === 200 && image2.status === 200) {
          setIsLoading(false);
          new Toast("Images Successfully Uploaded! Redirecting...", {
            timeout: 5000,
          });
          setTimeout(() => {
            push("/");
          }, 5000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
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
      <Form onSubmit={handleSubmit}>
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
            accept=".png,.jpg,.gif,.jpeg"
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
            accept=".png,.jpg,.gif,.jpeg"
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
            "Upload"
          )}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Step4;
