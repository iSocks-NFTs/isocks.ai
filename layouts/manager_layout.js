import Head from "next/head";
import Sidebar from "../components/Store/Sidebar";
import Navbar from "../components/Navbar/Store/Auth";
import useAuth from "../hooks/useAdminAuth";
import { adminLinks } from "../components/Store/Sidebar/sidebarlinks";

export default function ManagerLayout({ title, children }) {
  const { logOut } = useAuth();
  return (
    <section className="min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="p-3 w-full flex gap-x-3 justify-center">
        <Sidebar links={adminLinks} logOut={logOut} />
        <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6 shadow-md">
          {children}
        </div>
      </div>
    </section>
  );
}
