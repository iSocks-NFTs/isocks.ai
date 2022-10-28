import React from "react";
import {
  FormContainer,
  Form,
  CheckBoxContainer,
  CheckBox,
  Label,
  FormGroup,
  Input,
  Button,
} from "../style";
import { motion } from "framer-motion";
import { AuthContext } from "../../../context/authContext";

const Step1 = ({ formData, setFormData, page, setPage }) => {
  const {udUsername} = React.useContext(AuthContext)
  const inputRef = React.useRef();
  React.useEffect(() =>{
    if(udUsername !== ''){
      setPage(2);
    }
  },[])
  return (
    <>
      <FormContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Form>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              onChange={() => setFormData({ ...formData, isVendor: true })}
              id="vendorCheck"
              name="vendorCheck"
            />
            <Label htmlfor="vendorCheck">I&apos;m a vendor</Label>
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
              onChange={() =>
                setFormData({ ...formData, vendorCode: e.target.value })
              }
            />
          </FormGroup>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="notAVendor"
              name="notAVendor"
              onChange={() => setFormData({ ...formData, isVendor: false })}
            />
            <Label htmlfor="notAVendor">
              I&apos;m not a vendor (I bought the NFT by myself)
            </Label>
          </CheckBoxContainer>
          <Button onClick={() => setPage(page + 1)}>Continue</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Step1;
