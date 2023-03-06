import React, { useState, useMemo } from "react";
import { FormContainer, Form, Label, FormGroup, Input, Button } from "../style";
import { motion } from "framer-motion";
import countryList from "react-select-country-list";
import CountrySelector from "../../CountrySelector";
import axios from "../../../pages/api/axios";
import { TailSpin } from "react-loader-spinner";
import Toast from "awesome-toast-component";

const Step2 = ({ page, setPage, formData, setFormData }) => {
  const inputRef = React.useRef();
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [loading, setLoading] = useState(false);

  const changeHandler = (value) => {
    setValue(value);
    setFormData({ ...formData, countryOfResidence: value.label });
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function clearFields() {
    setFormData({
      ...formData,
      emailAddress: "",
      firstName: "",
      lastName: "",
      countryOfResidence: "",
      nationality: "",
    });
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data:", formData);
    axios
      .post("/api/user/verification", formData)
      .then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem("verifyId", res.data.id);
          setLoading(false);
          new Toast("Data Recorded Successfully!");
          setPage(page + 1);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 500) {
          setLoading(false);
          clearFields();
          new Toast("Form Already Submitted! Upload iSocks Images");
          setPage(page + 1);
        }
        if (err.response.status === 400) {
          setLoading(false);
          clearFields();
          new Toast("Form Conflict Error... Please Try Again Later.", {
            timeout: 3000,
            style: {
              container: [["background-color", "red"]],
              message: [["color", "#eee"]],
            },
          });
        }
        if (err.response.status === 409) {
          setLoading(false);
          clearFields();
          new Toast(data.reason, {
            timeout: 3000,
            style: {
              container: [["background-color", "red"]],
              message: [["color", "#eee"]],
            },
          });
        }
      });
  }

  return (
    <FormContainer
      marginTop="1rem"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form onSubmit={submit}>
        <FormGroup>
          <Label htmlFor="emailAddress" fontWeight="400">
            Email
          </Label>
          <Input
            id="emailAddress"
            value={formData.emailAddress}
            onChange={(e) =>
              setFormData({ ...formData, emailAddress: e.target.value })
            }
            ref={inputRef}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstName" fontWeight="400">
            First Name
          </Label>
          <Input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            id="firstName"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName" fontWeight="400">
            Last Name
          </Label>
          <Input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            id="lastName"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="countryOfResidence" fontWeight="400">
            Country of Residence
          </Label>
          <CountrySelector
            options={options}
            value={value}
            changeHandler={changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="nationality" fontWeight="400">
            Nationality
          </Label>
          <Input
            id="nationality"
            value={formData.nationality}
            onChange={(e) =>
              setFormData({ ...formData, nationality: e.target.value })
            }
            required
          />
        </FormGroup>
        <Button marginTop="1rem" type="submit">
          {loading ? (
            <TailSpin
              height="25"
              width="25"
              color="#0D0D0D"
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
  );
};

export default Step2;
