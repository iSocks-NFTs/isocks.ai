import { useState } from "react";
import {
  Form,
  FormGroup,
  FormContainer,
  Input,
  Button,
  ButtonContainer,
  Label,
} from "../../../Form";
import { CheckBoxContainer } from "../../../Redeem/style";
import { motion } from "framer-motion";
import { TailSpin } from "react-loader-spinner";
import Toast from "awesome-toast-component";
import { useRouter } from "next/router";
import { FaTelegram } from "react-icons/fa";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      {showModal && (
        <motion.div
          className="fixed z-10 inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="bg-white flex justify-center flex-col items-center rounded-lg p-8 max-w-md mx-auto z-20">
            <img
              src="/img/logo/logo.png"
              alt="logo"
              className="max-w-full h-auto"
            />
            <h2 className="text-lg font-medium mb-4 text-center ">
              Successfully Submitted! Make sure to join our Telegram Group!
            </h2>
            <a
              href="https://t.me/isocksnft"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowModal(false)}
              className="border-2 py-2 px-5 inline-flex justify-center items-center gap-1 duration-300 rounded-sm text-lg hover:bg-[var(--primary-brand)] hover:text-white"
            >
              <FaTelegram size={15} />
              Join Us
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function CompanyData({ setOption, formData, setFormData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const { push } = useRouter();

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function clearFields() {
    setFormData({
      ...formData,
      ownIsockNFT: false,
      walletAddress: "",
      ownStore: false,
      storeAddress: "",
      brandAge: "",
      targetAudience: "",
    });
  }

  function handleCheck(e) {
    const key = e.target.id;
    const value = e.target.checked;

    setFormData({ ...formData, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/mail/partner", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
    });

    if (response.status === 500) {
      setIsSubmitting(false);
      clearFields();
      new Toast("Submission Failed, Please Try Again", {
        timeout: 5000,
      });
    }

    if (response.status === 200) {
      setIsSubmitting(false);
      setShowModal(true);
      new Toast("Submission Successful! We just sent you an Email", {
        timeout: 8000,
        afterHide: () => {
          push("/");
        },
      });
    }
  }

  return (
    <motion.div
      className="my-[6.5rem] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showModal && <Modal />}
      <div className="text-center my-3">
        <h3 className="text-3xl font-bold">Tell Us More About Your Brand</h3>
        <p className="font-thin">We would like to get to know you</p>
      </div>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <CheckBoxContainer>
            <input
              type="checkbox"
              id="ownStore"
              value={formData.ownStore}
              onChange={handleCheck}
              className="h-[20px] w-[20px]"
            />
            <Label htmlFor="ownStore">Do you Own a Store?</Label>
          </CheckBoxContainer>
          {formData.ownStore ? (
            <FormGroup
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Label htmlFor="storeAddress">Main Fashion Store Address</Label>
              <Input
                type="text"
                id="storeAddress"
                value={formData.storeAddress}
                onChange={handleChange}
                required
              />
            </FormGroup>
          ) : (
            ""
          )}
          <CheckBoxContainer>
            <input
              type="checkbox"
              id="ownIsockNFT"
              value={formData.ownIsockNFT}
              onChange={handleCheck}
              className="h-[20px] w-[20px]"
            />
            <Label htmlFor="ownIsockNFT">Do you Own an iSock NFT?</Label>
          </CheckBoxContainer>
          {formData.ownIsockNFT ? (
            <FormGroup
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Label htmlFor="walletAddress">
                Wallet Address (For Verification purposes)
              </Label>
              <Input
                type="text"
                id="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                required
              />
            </FormGroup>
          ) : (
            ""
          )}
          <FormGroup>
            <Label htmlFor="brandAge">How old is your Brand?</Label>
            <Input
              type="text"
              id="brandAge"
              value={formData.brandAge}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="targetAudience">
              What's your brand's Target Audience?
            </Label>
            <Input
              type="text"
              id="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <ButtonContainer>
            <Button
              type="button"
              color="var(--primary-brand)"
              borderColor="#E3E5E8"
              backgroundColor="transparent"
              hoverBorderColor="#fff"
              hoverBackgroundColor="#E3E5E8"
              width="100%"
              onClick={() => setOption(2)}
            >
              Previous
            </Button>
            <Button width="100%" type="submit" onClick={() => setOption(3)}>
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
                "Submit"
              )}
            </Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </motion.div>
  );
}
