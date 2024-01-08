import { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Store/Auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({
    emailAddress: "",
    password: "",
  });

  const [passwordForm, setPasswordForm] = useState("password");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }));
  }

  return (
    <div className="bg-white h-screen">
      <Head>
        <title>iSocks Store | Login</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="text-3xl font-bold">Login</h3>
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
          <div>
            <p className="text-center text-xs text-semibold">
              By logging in, you agree to the{" "}
              <a href="/terms" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
          <div>
            <p className="text-center text-xs text-semibold">
              Need an Account?{" "}
              <a href="/store/signup" className="underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
