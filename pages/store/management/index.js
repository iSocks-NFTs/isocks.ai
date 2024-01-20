import Head from "next/head";
import { useState } from "react";
import Sidebar from "../../../components/Store/Sidebar";
import StoreNavbar from "../../../components/Navbar/Store";
import Manager from "../../../components/Store/Account/Manager";
import ChangePassword from "../../../components/Store/Account/Manager/ChangePassword";
import { links } from "../../../components/Store/Sidebar/sidebarlinks";
import useAuth from "../../../hooks/useAuth";

export default function Management() {
  const [modalTrigger, setModalTrigger] = useState({
    changePassword: false,
    deletePassword: false,
    basicDetails: false,
    editContactInformation: false,
  });
  const { logOut } = useAuth();

  return (
    <section className="min-h-screen relative">
      {modalTrigger.changePassword ? (
        <ChangePassword setModalTrigger={setModalTrigger} />
      ) : (
        ""
      )}
      <Head>
        <title>iSocks | Account Management</title>
      </Head>
      <StoreNavbar />
      <div className="flex gap-x-3 p-3 w-full justify-center">
        <Sidebar links={links} logOut={logOut} />
        <Manager setModalTrigger={setModalTrigger} />
      </div>
    </section>
  );
}
