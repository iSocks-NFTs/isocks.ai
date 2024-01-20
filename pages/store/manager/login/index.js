import { useState } from "react";
import Head from "next/head";
import Navbar from "../../../../components/Navbar/Store/Auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { adminEndpoints } from "../../../../utils/endpoints";
import axios from "axios";
import Toast from "awesome-toast-component";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({
    emailAddress: "",
    password: "",
  });
  const [passwordForm, setPasswordForm] = useState("password");
  const [cookies, setCookie] = useCookies(["isocks_store_admin"]);
  const { push } = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    login(form);
  }

  async function login(form) {
    try {
      const { login } = adminEndpoints;

      const response = await axios.post(login, form);

      if (response.status === 200) {
        setCookie("isocks_store_admin", response.data.token, {
          path: "/",
          maxAge: 3600 * 24 * 30, // 30 days
        });

        new Toast("Sign In Successful... Redirecting to Dashboard", {
          timeout: 5000,
        });

        setTimeout(() => {
          push("/store/manager/dashboard");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 400) {
          new Toast("Email/Password can't be empty", {
            timeout: 5000,
          });
        }

        if (error.response.status === 500) {
          new Toast("Server Error", {
            timeout: 5000,
          });
        }

        if (error.response.status === 401) {
          new Toast("Invalid Email Addresss/Password", {
            timeout: 5000,
          });
        }
      }

      if (error && !error.response) {
        new Toast(
          "Server is Unavailable at this time... Please Try again later..."
        );
      }
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  return (
    <div className="bg-white h-screen">
      <Head>
        <title>iSocks Store | Admin Access</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="text-3xl font-bold">Admin Access</h3>
        <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start gap-y-2">
            <label
              htmlFor="emailAddress"
              className="text-[--subtle-text] text-xs"
            >
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="border bg-white rounded-sm h-[55px] w-[380px] p-1"
              aria-required
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-start gap-y-2 relative">
            <label htmlFor="password" className="text-[--subtle-text] text-xs">
              Password
            </label>
            <input
              type={passwordForm}
              id="password"
              name="password"
              className="border bg-white rounded-sm h-[55px] w-[380px] p-1"
              aria-required
              required
              onChange={handleChange}
            />
            <div className="absolute right-3 top-10">
              {passwordForm === "password" ? (
                <FaRegEyeSlash
                  onClick={() => setPasswordForm("text")}
                  size={20}
                  className="cursor-pointer"
                />
              ) : (
                <FaRegEye
                  onClick={() => setPasswordForm("password")}
                  size={20}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <a href="/store/forgot-password" className="font-semibold text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-[--primary-brand] py-3 rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
