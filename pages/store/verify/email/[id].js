import Head from "next/head";
import Navbar from "../../../../components/Navbar/Store/Auth";
import { useRouter } from "next/router";
import { endpoints } from "../../../../utils/endpoints";
import { useState } from "react";

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const { verifyEmail } = endpoints;

  // Fetch data for the specific dynamic route using the id
  const response = await fetch(`${verifyEmail}${id}`);
  if (
    response.status === 400 ||
    response.status === 409 ||
    response.status === 404
  ) {
    const data = {
      msg: "Invalid/Expired Verification Token...",
      error: true,
    };
    return {
      props: data,
    };
  }

  if (response.status === 200) {
    const data = {
      msg: "Email Successfully Verified... Click Here to Go back to the Store...",
      error: false,
    };
    return {
      props: data,
    };
  }

  if (response.status === 500) {
    const data = {
      msg: "Server Error",
      error: true,
    };

    return {
      props: data,
    };
  }
};

export default function EmailAddress({ data }) {
  const [hideForm, setHideForm] = useState(false);
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>iSocks Store | Email Verification {}</title>
      </Head>
      <Navbar />
      <div>
        {data && data.error ? (
          <p>
            <p>{data?.msg}</p>
            <button>Click Here to Resend</button>
          </p>
        ) : (
          <p>
            Email Successfully Verified... Click Here to Go back to the Store...
          </p>
        )}
      </div>
    </div>
  );
}
