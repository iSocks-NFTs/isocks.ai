import Head from "next/head";
import StoreNavbar from "../components/Navbar/Store";
import EmailVerification from "../components/Store/EmailVerification";
import Footer from "../components/Store/Footer";

export default function StoreLayout({ children, title, mode }) {
  return (
    <section
      className={`bg-[--primary-brand] min-h-screen ${
        mode === "dark" ? "text-white" : "text-[--primary-brand]"
      }`}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <EmailVerification />
      <StoreNavbar />
      {children}
      <Footer />
    </section>
  );
}
