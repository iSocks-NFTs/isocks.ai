import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import {
  Container,
} from "../../../../components/Dashboard/style";
import Layout from "../../../../layouts/admin_layout";
import { baseURL } from "../../../../config";
import axios from "../../../api/axios";
import { AuthContext } from "../../../../context/authContext";
import Toast from "awesome-toast-component";
import {
  Button,
  ButtonContainer,
  Form,
  FormGroup,
  Input,
  Label,
} from "../../../../components/Form";

export async function getServerSideProps(context) {
  const { id } = context.query;

  const endpoint = `/api/user/vendor/${id}`;

  const response = await fetch(`${baseURL + endpoint}`, {
    method: "GET",
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });

  console.log(response);

  const vendor = await response.json();

  return {
    props: { vendor },
  };
}

export default function ManageVendorId({ vendor }) {
  const { accountId } = useContext(AuthContext);
  const [goBack, setBack] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: vendor.firstName,
    lastName: vendor.lastName,
    emailAddress: vendor.emailAddress,
    currentState: vendor.currentState,
    nationality: vendor.nationality,
    noOfAvailableNFTs: vendor.noOfAvailableNFTs,
  });
  const router = useRouter();

  function clearFields() {
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      emailAddress: "",
      currentState: "",
      nationality: "",
      noOfAvailableNFTs: "",
    });
  }

  function handleSubmit(e) {
    setIsUpdating(true);
    e.preventDefault();
    console.log(formData);
    axios
      .put(`/api/user/vendor/`, { ...formData, adminId: accountId, vendorUUId:vendor.id })
      .then((res) => {
        console.log(res);
        setIsUpdating(false);
        new Toast("Updated Vendor", {
          timeout: 3000,
        });
        setTimeout(() => {
          router.push("/dashboard/admin/vendor/manage");
        }, 1000);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
        setIsUpdating(false);
        clearFields();
        if (err.status === 409) {
          new Toast("Failed To Create New Vendor", {
            style: {
              container: [["background-color", "red"]],
              message: [["color", "#eee"]],
            },
            timeout: 5000,
          });
        }
        if (err.response.data.error === "Vendor record already exists") {
          new Toast("Vendor with this Email already exists", {
            style: {
              container: [["background-color", "var(--error)"]],
              message: [["color", "#eee"]],
            },
            timeout: 5000,
          });
        }
      });
  }

  function handleDelete() {
    setIsDeleting(true);
    axios.delete(`/api/user/vendor/${vendor.id}`).then(() => {
      setIsDeleting(false);
      new Toast("Successfully Deleted Vendor", {
        timeout: 3000,
      });
      setTimeout(() =>{
        router.push("/dashboard/admin/vendor/manage");
      },3000)
    });
  }

  function back() {
    setBack(true);
    router.push("/dashboard/admin/vendor");
  }
  return (
    <Layout>
      <Head>
        <title>iSocks | Manage Vendor</title>
      </Head>
      <Container>
        <div className="text-center my-4">
          <h3 className="text-3xl font-semibold">Manage Vendor</h3>
          <p className="text-xl text-[var(--subtle-text)]">
            Change Vendor Information
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input
                type="text"
                id="emailAddress"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="currentState">Current State</Label>
              <Input
                type="text"
                id="currentState"
                value={formData.currentState}
                onChange={(e) =>
                  setFormData({ ...formData, currentState: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="countryOfResidence">Country</Label>
              <Input
                type="text"
                id="countryOfResidence"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="noOfNFTs">No of NFTs</Label>
              <Input
                type="number"
                id="noOfNFTs"
                value={formData.noOfAvailableNFTs}
                min="0"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    noOfAvailableNFTs: e.target.value,
                  })
                }
                required
              />
            </FormGroup>
            <ButtonContainer flexDirection="column">
              <Button
                type="submit"
                backgroundColor="#fff"
                color="var(--primary-brand)"
              >
                {isUpdating ? (
                  <TailSpin
                    height="25"
                    width="25"
                    color="var(--primary-brand)"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  "Update Vendor"
                )}
              </Button>
              <Button
                type="button"
                backgroundColor="var(--error)"
                borderColor="transparent"
                onClick={handleDelete}
              >
                {isDeleting ? (
                  <TailSpin
                    height="25"
                    width="25"
                    color="var(--primary-brand)"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  "Delete Vendor"
                )}
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button onClick={back} type="button">
                {goBack ? (
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
                  "Back"
                )}
              </Button>
            </ButtonContainer>
          </Form>
        </div>
      </Container>
    </Layout>
  );
}
