import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { endpoints } from "../../../../utils/endpoints";
import axios from "axios";
import Toast from "awesome-toast-component";

export default function PaymentPage() {
  const { query } = useRouter();
  const { id } = query;
  const { getOrderById } = endpoints;
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPaymentData() {
      try {
        const response = await axios.get(getOrderById + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getPaymentData();
  }, []);

  return (
    <section>
      <Head>
        <title>iSocks Product Payment | {id}</title>
      </Head>
      <main>
        <p>Payment Page</p>
        <p>Product ID: {id}</p>
      </main>
    </section>
  );
}
