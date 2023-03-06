import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  Button,
  CheckBox,
  CheckBoxContainer,
  Form,
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "../style";
import Toast from "awesome-toast-component";
import { TailSpin } from "react-loader-spinner";
import axios from "../../../pages/api/axios";

const Step1 = ({ formData, setFormData, page, setPage }) => {
  const [isLoading, setIsLoading] = useState(false);

  function isVendorChecked(e) {
    setFormData({ ...formData, isVendor: !e.target.checked });
  }

  async function next() {
    const { isVendor, vendorCode } = formData;
    if (isVendor && vendorCode === "") {
      new Toast("Vendor Code Required", {
        timeout: 5000,
      });
      return;
    }

    if (isVendor && vendorCode !== "") {
      setIsLoading(true);
      axios
        .get(`/api/user/vendor/${vendorCode}`)
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
            setPage(page + 1);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            new Toast("Vendor ID not Found");
            setFormData({ ...formData, vendorCode: "" });
            setIsLoading(false);
            return;
          }
        });
    }

    if (!isVendor) {
      setPage(page + 1);
    }
  }

  return (
    <>
      <FormContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Form>
          {formData.isVendor ? (
            <>
              <CheckBoxContainer>
                <CheckBox
                  type="checkbox"
                  id="vendorCheck"
                  name="vendorCheck"
                  checked={formData.isVendor}
                  onChange={(e) =>
                    setFormData({ ...formData, isVendor: e.target.checked })
                  }
                />
                <Label htmlFor="vendorCheck">I&apos;m a vendor</Label>
              </CheckBoxContainer>
              <FormGroup>
                <Label
                  htmlFor="vendorCode"
                  fontWeight="400"
                  color="var(--subtle-text)"
                >
                  Vendor Code
                </Label>
                <Input
                  type="text"
                  placeholder="Enter vendor code if you are a vendor"
                  value={formData.vendorCode}
                  onChange={(e) =>
                    setFormData({ ...formData, vendorCode: e.target.value })
                  }
                />
              </FormGroup>
            </>
          ) : (
            ""
          )}
          {formData.isVendor ? (
            ""
          ) : (
            <CheckBoxContainer>
              <CheckBox
                type="checkbox"
                id="notAVendor"
                name="notAVendor"
                checked={!formData.isVendor}
                onChange={isVendorChecked}
              />
              <Label htmlFor="notAVendor">
                I&apos;m not a vendor (I bought the NFT by myself)
              </Label>
            </CheckBoxContainer>
          )}
          <Button onClick={next} type="button">
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
              "Continue"
            )}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Step1;
