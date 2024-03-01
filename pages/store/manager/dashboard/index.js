import { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "../../../../components/Store/Sidebar";
import { adminLinks } from "../../../../components/Store/Sidebar/sidebarlinks";
import useAuth from "../../../../hooks/useAdminAuth";
import Navbar from "../../../../components/Navbar/Store/Auth";
import { adminEndpoints } from "../../../../utils/endpoints";
import axios from "axios";

export default function ManagerHome() {
  const {
    logOut,
    user,
    loading: userDataLoading,
    error: userDataError,
    token,
  } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const { dashboardStats } = adminEndpoints;
    async function getStats() {
      try {
        const response = await axios.get(dashboardStats, {
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

    getStats()
  }, []);

  return (
    <section className="min-h-screen">
      <Head>
        <title>iSocks | Manager Account</title>
      </Head>
      <Navbar />
      <div className="p-3 w-full flex gap-x-3 justify-center">
        <Sidebar links={adminLinks} logOut={logOut} />
        <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6 shadow-md">
          <div className="w-full border-b p-2">
            <h3 className="text-2xl font-semibold">Store Overview</h3>
          </div>
          <div className="my-3 px-2 grid sm:grid-cols-2 grid-cols-1 gap-3 justify-center">
            <div className="border w-full h-[250px] rounded-md py-3">
              <div className="w-full border-b p-2 text-semibold">
                Account Details
              </div>
              {!userDataError && !userDataLoading ? (
                <div className="p-2">
                  <p className="font-semibold">{user.fullName}</p>
                  <p>{user.emailAddress}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="border w-full h-[250px] rounded-md py-3">
              <div className="w-full border-b p-2 text-semibold">Orders</div>
              <div className="p-2">
                <p>Pending Orders : {data?.pendingOrders}</p>
                <p>Completed Orders: {data?.completedOrders}</p>
              </div>
            </div>
            <div className="border w-full h-[250px] rounded-md py-3">
              <div className="w-full border-b p-2 text-semibold">Products</div>
              <div className="p-2">
                <p>Uploaded Products : {data?.createdProducts}</p>
                <p>Sold Products: {data?.soldProducts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
