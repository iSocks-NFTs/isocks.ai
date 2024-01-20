import Head from "next/head";
import StoreNavbar from "../../../components/Navbar/Store";

export default function RecentlyViewed() {
  return (
    <section className="min-h-screen">
      <Head>
        <title>iSocks | Recently Viewed Products</title>
      </Head>
      <StoreNavbar />
    </section>
  );
}
