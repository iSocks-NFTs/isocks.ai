import Head from "next/head";
import StoreNavbar from "../../../../components/Navbar/Store";
import ProductImageSelector from "../../../../components/Store/Product/Selector";
import SizeSelector from "../../../../components/Store/SizeSelector";
import Description from "../../../../components/Store/Product/Description";
import Quantity from "../../../../components/Store/Product/Quantity";
import AddToCart from "../../../../components/Store/Product/AddToCart";
import Footer from "../../../../components/Store/Footer";
import ShareButton from "../../../../components/Store/Product/Share";
import MoreProducts from "../../../../components/Store/Product/More";
import { useRouter } from "next/router";
import Wardrobe from "../../../../components/Wardrobe";
import ColorSelector from "../../../../components/Store/ColorSelector";

export default function Product() {
  const images = [
    "/img/products/2023/pink.jpg",
    "/img/products/store/test/product_2.jpg",
    "/img/products/2023/green.jpg",
    "/img/products/sneakers.jpg",
  ];

  const { asPath } = useRouter();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "iSocks Merch 🔥",
        text: "Check out this really cool iSocks Product!",
        url: asPath,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>iSocks Product</title>
      </Head>
      <StoreNavbar />
      <div className="w-full h-full py-10 flex flex-wrap md:flex-row flex-col gap-3 px-1">
        <ProductImageSelector images={images} />
        <div className="flex flex-col gap-y-3 justify-between items-start">
          <div className="space-y-3">
            <h3 className="uppercase text-5xl font-Zen-Dots">Shuffle Hat</h3>
            <p className="text-3xl font-semibold">$35.00 USD</p>
            <div className="flex items-center gap-x-3">
              <ColorSelector />
              <SizeSelector />
            </div>
            <Description />
            <Quantity />
          </div>
          <div className="flex gap-x-3 items-center flex-wrap gap-3">
            <AddToCart />
            <ShareButton onClick={handleShare} />
          </div>
        </div>
      </div>
      <MoreProducts />
      <Wardrobe />
      <Footer />
    </section>
  );
}
