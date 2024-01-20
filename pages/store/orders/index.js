import Head from "next/head";
import StoreNavbar from "../../../components/Navbar/Store";
import Sidebar from "../../../components/Store/Sidebar";
import UserOrders from "../../../components/Store/Orders";
import { links } from "../../../components/Store/Sidebar/sidebarlinks";
import useAuth from "../../../hooks/useAuth";

export default function Orders() {
  const { logOut } = useAuth();

  return (
    <section className="min-h-screen">
      <Head>
        <title>iSocks | Orders</title>
      </Head>
      <StoreNavbar />
      <div className="flex gap-x-3 p-3 w-full justify-center">
        <Sidebar links={links} logOut={logOut} />
        <UserOrders />
      </div>
    </section>
  );
}
