import { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Store/Auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { endpoints } from "../../../utils/endpoints";
import axios from "axios";
import Toast from "awesome-toast-component";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function SignUp() {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
  });
  const [passwordForm, setPasswordForm] = useState("password");
  const [cookies, setCookie] = useCookies(["isocks_store_user"]);
  const { push } = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  async function signUp(form) {
    try {
      const { signup } = endpoints;
      const response = await axios.post(signup, form);

      if (response.status === 201) {
        setCookie("isocks_store_user", response.data.token, {
          path: "/",
          maxAge: 3600 * 24 * 30, // 30 days
        });

        new Toast("Sign Up Successful... Redirecting to Store", {
          timeout: 5000,
        });

        setTimeout(() => {
          push("/store");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 400) {
          new Toast("Full Name, Email Address/Password can not be empty");
        }

        if (
          (error.response.status === 400) &
          (error.response.data.error === "Password is less than 8 characters")
        ) {
          new Toast("Password can't be less than 8 characters", {
            timeout: 5000,
          });
        }

        if (error.response.status === 500) {
          new Toast("Server Error", {
            timeout: 5000,
          });
        }

        if (error.response.status === 409) {
          new Toast("User with this Email already exists", {
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

  function handleSubmit(e) {
    e.preventDefault();
    signUp(form);
  }

  return (
    <div className="bg-white h-screen">
      <Head>
        <title>iSocks Store | Sign Up</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="text-3xl font-bold">Sign Up</h3>
        <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start gap-y-2">
            <label htmlFor="fullName" className="text-[--subtle-text] text-xs">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="border bg-white rounded-sm h-[55px] w-[380px] p-1"
              aria-required
              required
              onChange={handleChange}
            />
          </div>
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
          <div>
            <p className="text-center text-xs text-semibold">
              Already have an account?{" "}
              <button
                onClick={() => push("/store/login")}
                className="underline"
              >
                Log In
              </button>
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-[--primary-brand] py-3 rounded-full"
          >
            Sign Up
          </button>
          <div>
            <p className="text-center text-xs text-semibold">
              By signing up, you agree you've read and accepted our{" "}
              <button onClick={() => push("/terms")} className="underline">
                Terms and
                <br />
                Conditions
              </button>
              . Please see our Privacy Policy for information on how we
              <br />
              process your data.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
