import React, { useState, useEffect } from "react";
import { baseURL } from "../../../../../config";
import Image from "next/image";
import Layout from "../../../../../layouts/admin_layout";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toast from "awesome-toast-component";
import DatePicker from "../../../../../components/Datepicker";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "../../../../api/axios";

export async function getServerSideProps(context) {
  const { id } = context.query;

  const FIND_TRANSACTION = `/api/find/transaction/${id}`;

  const response = await fetch(`${baseURL + FIND_TRANSACTION}`, {
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });
  const data = await response.json();

  return {
    props: { data },
  };
}

export default function ManageTransaction({ data }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    transactionId: data?.id,
    departureDate: new Date(),
    deliveryDate: new Date(),
    NoOfNfts: "",
  });

  const [confirmData, setConfirmData] = useState({
    vendorId: "",
    transactionId: data.id,
  });

  const [cookie, setCookie, removeCookie] = useCookies(["users"]);

  const { reload, push } = useRouter();

  if (copied) {
    new Toast("Wallet Address Copied", {
      timeout: 5000,
    });
  }

  function approveTransaction() {
    axios
      .put("/api/transaction", {
        ...formData,
      })
      .then((res) => {
        if (res.status) {
          new Toast("Successfully Confirmed Transaction");
          setTimeout(() => {
            reload();
          }, 2000);
        }
      });
  }

  function generateReceipt() {
    new Toast("Feature Still in Development", {
      timeout: 5000,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;

    setFormData((formData) => ({
      ...formData,
      [key]: value,
    }));
  }

  useEffect(() => {
    setCopied(false);
    const endpoint = `/api/find/user/${cookie.user}`;
    fetch(`${baseURL + endpoint}`, {
      headers: {
        key: process.env.NEXT_PUBLIC_BACKEND_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setConfirmData({ ...confirmData, vendorId: data.userType });
      });
  }, []);

  return (
    <>
      <Head>
        <title>iSocks | Review Transaction</title>
      </Head>
      <Layout>
        <div className="w-full h-fit">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">Transaction Management</h3>
            <p>Review & Manage Transactions</p>
          </div>
          <div className="flex flex-row justify-center my-5 gap-3 flex-wrap">
            <div className="h-fit border-2 rounded-md flex flex-col justify-center items-center p-2 gap-2 sm:w-[350px] w-[290px]">
              <h3 className="font-semibold text-xl">Buyer's Information</h3>
              <div className="sm:text-[0.85rem] text-[0.65rem] text-center">
                <p>
                  <span className="font-semibold">Email Address</span>:{" "}
                  {data?.emailAddress}
                </p>
                <p>
                  <span className="font-semibold">Phone Number</span>:{" "}
                  {data?.phoneNumber}
                </p>
                <p>
                  <span className="font-semibold">Wallet Address Address</span>:
                  <br /> {data?.buyerWalletAddress}
                </p>
                <p>
                  <span className="font-semibold">Time</span>: {data?.time}
                </p>
                <p>
                  <span className="font-semibold">Date</span>:{data?.date}
                </p>
                <p className="capitalize">
                  <span className="font-semibold">Status</span>:
                  <span
                    className={`rounded-md  p-1 text-white mx-2 ${
                      data.transactionStatus === "pending" && "bg-orange-300"
                    }
                    ${data.transactionStatus === "approved" && "bg-green-300"}
                    
                    ${data.transactionStatus === "failed" && "bg-red-300"}`}
                  >
                    {data?.transactionStatus}
                  </span>
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl py-2">Buyer's Receipt</h3>
                <Image
                  src={data.transactionProofIMGURL}
                  loader={({ src }) => src}
                  width={350}
                  height={350}
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 place-content-center gap-2">
                <button
                  className="rounded-md w-[100%] bg-[var(--primary-brand)] text-white py-[5px] px-[10px] text-[13px] border border-[var(--primary-brand)] hover:bg-transparent duration-500 hover:text-[var(--primary-brand)] focus:border focus:shadow-md"
                  onClick={approveTransaction}
                >
                  Confirm Transaction
                </button>
                <CopyToClipboard
                  text={data?.buyerWalletAddress}
                  onCopy={() => setCopied(true)}
                >
                  <button className="rounded-md w-[100%] bg-[var(--success)] text-white py-[5px] px-[10px] text-[13px] border border-[var(--success)] hover:bg-transparent duration-500 hover:text-[var(--success)] focus:border focus:shadow-md">
                    Copy Wallet Address
                  </button>
                </CopyToClipboard>
                <button
                  className="rounded-md w-[100%] bg-blue-500 text-white py-[5px] px-[10px] text-[13px] border border-blue-500 hover:bg-transparent duration-500 hover:text-blue-500 focus:border focus:shadow-md"
                  onClick={generateReceipt}
                >
                  Generate Receipt
                </button>
                <button className="rounded-md w-[100%] bg-[var(--error)] text-white py-[5px] px-[10px] text-[13px] border border-[var(--error)] hover:bg-transparent duration-500 hover:text-[var(--error)] focus:border focus:shadow-md">
                  Delete Transaction
                </button>
              </div>
            </div>
            <div className="sm:w-[650px] w-[290px] border-2 rounded-md flex flex-col gap-2 justify-center items-center p-2">
              <h3 className="text-xl font-semibold">Order Generator Form</h3>
              {/* <p className="text-[13px]">Communicate with Client</p> */}
              <form className="space-y-2" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="transactionId">Transaction ID</label>
                  <input
                    type="text"
                    name="transactionId"
                    id="transactionId"
                    value={data?.id}
                    className="bg-transparent border-2 rounded-sm h-[50px] w-[275px] p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <DatePicker
                    label="Departure Date"
                    id="departureDate"
                    date={formData.departureDate}
                    setDate={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <DatePicker
                    label="Delivery Date"
                    id="deliveryDate"
                    date={formData.deliveryDate}
                    setDate={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="NoOfNfts">No of NFTs Bought</label>
                  <input
                    type="number"
                    name="NoOfNfts"
                    id="NoOfNfts"
                    value={formData.NoOfNfts}
                    onChange={handleChange}
                    className="bg-transparent border-2 rounded-sm h-[50px] w-[275px] p-1"
                  />
                </div>

                <button
                  className="w-[100%] bg-purple-500 text-white py-3 px-5 rounded-md border-2 border-purple-500 hover:bg-transparent duration-500 hover:text-purple-500"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
