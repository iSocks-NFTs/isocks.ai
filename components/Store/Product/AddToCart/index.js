import { CiShoppingCart } from "react-icons/ci";
import { useCartContext } from "../../../../context/CartContext";
export default function AddToCart({ product }) {
  const { addToCart } = useCartContext();
  return (
    <button
      className="bg-[--primary-brand] text-white px-7 py-4 inline-flex items-center gap-x-3 rounded-md hover:text-[--primary-brand] border-2 border-[--primary-brand] hover:bg-white duration-500 uppercase font-Zen-Dots"
      onClick={() => addToCart(product)}
    >
      Add To Cart <CiShoppingCart size={25} />{" "}
    </button>
  );
}
