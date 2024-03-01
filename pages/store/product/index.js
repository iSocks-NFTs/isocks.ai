import StoreLayout from "../../../layouts/Store";
import ProductSlider from "../../../components/Store/ProductSlider";

export default function AllProducts() {
  return (
    <StoreLayout title="iSocks Store | Best of Our Collections" mode="dark">
      <ProductSlider />
    </StoreLayout>
  );
}
