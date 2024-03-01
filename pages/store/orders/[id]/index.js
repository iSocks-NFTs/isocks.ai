import Head from "next/head";
import StoreNavbar from "../../../../components/Navbar/Store";
import Sidebar from "../../../../components/Store/Sidebar";
import PurchaseOrder from "../../../../components/Store/Orders/Purchase";
import { links } from "../../../../components/Store/Sidebar/sidebarlinks";
import useAuth from "../../../../hooks/useAuth";
import { useRouter } from "next/router";

export default function CurrentOrder() {
  const { logOut } = useAuth();
  const { query } = useRouter();
  const { id } = query;

  return (
    <section className="min-h-screen">
      <Head>
        <title>iSocks | Purchase Order {id}</title>
      </Head>
      <StoreNavbar />
      <div className="flex gap-x-3 p-3 w-full justify-center">
        <Sidebar links={links} logOut={logOut} />
        <PurchaseOrder id={id} />
      </div>
    </section>
  );
}
