import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { endpoints } from "../../../../../utils/endpoints";
import Toast from "awesome-toast-component";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../../../../hooks/useAuth";

export default function ChangePassword({ setModalTrigger }) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  function closeModal() {
    setModalTrigger((modalTrigger) => ({
      ...modalTrigger,
      changePassword: false,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  function resetForm() {
    setFormData((formData) => ({
      ...formData,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { newPassword, confirmNewPassword } = formData;

    if (newPassword !== confirmNewPassword) {
      resetForm();
      return new Toast("Confirm password does not Match...");
    }

    try {
      const { newPassword: newPasswordEndpoint } = endpoints;
      const { currentPassword, newPassword } = formData;

      const response = await axios.post(
        newPasswordEndpoint,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        new Toast("Successfully changed password");
        closeModal();
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 401) {
          new Toast("Incorrect Password... Please Try again...", {
            timeout: 5000,
          });
        }

        if (error.response.status === 409) {
          new Toast("Password Change Failed... Please Try again later...", {
            timeout: 5000,
          });
        }
      }

      if (error && !error.response) {
        new Toast(
          "Server is Unavailable at this time... Please Try again later...",
          {
            timeout: 5000,
          }
        );
      }
      resetForm();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-black bg-opacity-50 w-full h-screen absolute z-40 flex items-center justify-center flex-col">
      <div className="w-full flex justify-end top-0 absolute">
        <button>
          <IoMdClose
            size={40}
            onClick={closeModal}
            color="#fff"
            className="drop-shadow"
          />
        </button>
      </div>
      <div className="bg-white min-w-[420px] min-h-[500px] rounded-md shadow-md space-y-5 relative">
        <div className="flex flex-col justify-center items-center gap-y-4 mt-10">
          <Image
            src="/img/logo/isocks_store_black.svg"
            width={240}
            height={30}
            className="cursor-pointer"
          />
          <form
            className="flex flex-col gap-y-3 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="border bg-white rounded-sm h-[55px] w-[380px] p-1"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="border bg-white rounded-sm h-[55px] w-[380px] p-1"
                value={formData.newPassword}
                onChange={handleChange}
                required
                minLength={8}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                className="border bg-white rounded-sm h-[55px] w-[380px] p-1"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                required
                minLength={8}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[--primary-brand] py-3 rounded-full w-[380px] inline-flex items-center justify-center"
            >
              {loading ? (
                <ThreeDots color="white" width={30} height={30} />
              ) : (
                "Change Password "
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
