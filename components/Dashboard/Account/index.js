import React, { useRef } from "react";
import {
  CardContainer,
  Card,
  OptionDescription,
  Option,
} from "../../BuyOption/style";
import {
  Form,
  FormGroup,
  Label,
  Input,
  ButtonContainer,
  Button,
} from "../../Form";
import { Pill } from "../style";
import { GlobalContext } from "../../../context/globalContext";
import SuccessModal from "../../Modal/success";
import axios from "../../../pages/api/axios";
import { TailSpin } from "react-loader-spinner";
import { baseURL } from "../../../config";

const AccountInfo = ({ data }) => {
  const { modal, setModal } = React.useContext(GlobalContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const inputRef = useRef();
  const [formData, setFormData] = React.useState({
    oldPassword: "",
    newPassword: "",
  });
  const [error, setError] = React.useState("");

  function clearField() {
    setFormData({ ...formData, oldPassword: "", newPassword: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const { oldPassword, newPassword } = formData;
    if (oldPassword === newPassword) {
      setIsLoading(false);
      setError("Old Password can't be New Password");
      clearField();
      return;
    }
    axios
      .put(`${baseURL}/api/user/change/password/${data.id}`, {
        oldPassword,
        newPassword,
      })
      .then((response) => {
        if (response.data.status === "ok") {
          setIsLoading(false);
          setModal({ ...modal, successModal: true });
          clearField();
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          const { status } = error.response;
          if (status === 401) {
            setIsLoading(false);
            setError("Wrong Password");
            clearField();
          }
          if (status === 403) {
            setIsLoading(false);
            setError("Authorization Error");
            clearField();
          }
          if (status === 500) {
            setIsLoading(false);
            setError("Server Error");
            clearField();
          }
        }
      });
  }
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <CardContainer justifyContent="center">
      {modal.successModal && (
        <SuccessModal message="Password Changed Successfully" />
      )}
      <Card height="230px" width="350px" justifyContent="center">
        <Pill>{data?.isAdmin === true ? "Admin Account" : "iSock User"}</Pill>
        <Option fontSize="13px">Admin ID: {data?.id}</Option>
        <Option fontSize="13px">Email: {data?.emailAddress}</Option>
      </Card>
      <Card height="fit-content" width="580px" justifyContent="center">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              type="password"
              value={formData.oldPassword}
              onChange={(e) =>
                setFormData({ ...formData, oldPassword: e.target.value })
              }
              required
              ref={inputRef}
              name="oldPassword"
              id="currentPassword"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="password"
              value={formData.newPassword}
              id="newPassword"
              minLength={8}
              required
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
            />
          </FormGroup>
          <Label textAlign="center" color="red">
            {error}
          </Label>
          <ButtonContainer>
            <Button type="submit">
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
                "Change Password"
              )}
            </Button>
          </ButtonContainer>
        </Form>
      </Card>
    </CardContainer>
  );
};

export default AccountInfo;
