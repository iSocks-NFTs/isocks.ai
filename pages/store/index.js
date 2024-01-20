import Header from "../../components/Store/Header";
import ProductSlider from "../../components/Store/ProductSlider";
import Wardrobe from "../../components/Wardrobe";
import StoreLayout from "../../layouts/Store";

export default function Store() {
  return (
    <StoreLayout title="iSocks Store | Best of Our Collections" mode="dark">
      <Header />
      <ProductSlider />
      <Wardrobe />
    </StoreLayout>
  );
}
