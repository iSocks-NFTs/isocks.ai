import Head from "next/head";
import StoreNavbar from "../../../../components/Navbar/Store";
import ProductList from "../../../../components/Store/Checkout/ProductList";
import { Summary } from "../../../../components/Store/Checkout";
import ProductSlider from "../../../../components/Store/ProductSlider";
import UserAddress from "../../../../components/Store/Checkout/Address";
import Delivery from "../../../../components/Store/Checkout/Address/Delivery";
import Wardrobe from "../../../../components/Wardrobe";
import AddNewAddress from "../../../../components/Store/Checkout/Address/Add";
import EditAddress from "../../../../components/Store/Checkout/Address/Edit/[id]";
import { useCartContext } from "../../../../context/CartContext";

export default function Checkout() {
  const { checkoutPage } = useCartContext();
  const componentsList = [
    <ProductList />,
    <UserAddress />,
    <Delivery />,
    <AddNewAddress />,
    <EditAddress />,
  ];

  return (
    <>
      <Head>
        <title>iSocks Store | Checkout</title>
      </Head>
      <StoreNavbar />
      <div className="w-full flex sm:flex-row flex-col-reverse gap-3 p-3 justify-center">
        {componentsList[checkoutPage]}
        <Summary />
      </div>
      <div className="w-full bg-[var(--primary-brand)] ">
        <ProductSlider />
        <Wardrobe />
      </div>
    </>
  );
}
