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
import { UD } from "../../Form";


const Step3 = ({ page, setPage, formData, setFormData }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <FormContainer
      marginTop="1rem"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form>
        <FormGroup>
          <Label htmlFor="username" fontWeight="400">
            Choose a username
          </Label>
          <Input
            id="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            ref={inputRef}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ud" fontWeight="400">
            Use your UD as a Username
          </Label>
          <UD src="/img/icons/ud.png" alt="UD Logo" />
          <Input
            id="ud"
            value={formData.UdDomainUsername}
            paddingLeft="15rem"
            onChange={(e) =>
              setFormData({ ...formData, UdDomainUsername: e.target.value })
            }
          />
        </FormGroup>
        <Label htmlFor="ud" fontWeight="bolder">
          Get a UD domain here
        </Label>
        <Button onClick={() => setPage(page + 1)}>Continue</Button>
      </Form>
    </FormContainer>
  );
};

export default Step3;
