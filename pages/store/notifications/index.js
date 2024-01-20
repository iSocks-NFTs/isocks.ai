import Head from "next/head";
import StoreNavbar from "../../../components/Navbar/Store";
import Sidebar from "../../../components/Store/Sidebar";
import Messages from "../../../components/Store/Messages";
import { links } from "../../../components/Store/Sidebar/sidebarlinks";
import useAuth from "../../../hooks/useAuth";

export default function Notifications() {
  const { logOut } = useAuth();
  return (
    <section className="min-h-section">
      <Head>
        <title>iSocks | Notifications</title>
      </Head>
      <StoreNavbar />
      <div className="flex gap-x-3 p-3 w-full justify-center">
        <Sidebar links={links} logOut={logOut} />
        <Messages />
      </div>
    </section>
  );
}
