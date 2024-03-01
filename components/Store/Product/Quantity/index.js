import { useState } from "react";
import { useCartContext } from "../../../../context/CartContext";

export default function Quantity({ productId }) {
  const [productQuantity, setProductQuantity] = useState(0);
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    getProductQuantity,
  } = useCartContext();

  function increase() {
    setProductQuantity((productQuantity) => productQuantity + 1);
    incrementQuantity(productId);
  }

  function decrease() {
    if (productQuantity === 0) {
      return;
    }

    setProductQuantity((productQuantity) => productQuantity - 1);
    decrementQuantity(productId);
  }

  return (
    <div className="flex gap-x-3 items-center text-xl">
      <p className="uppercase font-bold">Quantity</p>
      <div className="flex gap-x-3 items-center">
        <button
          onClick={decrease}
          className="border rounded-full h-10 w-10 border-black"
        >
          -
        </button>
        {getProductQuantity(productId)}
        <button
          onClick={increase}
          className="border rounded-full h-10 w-10 bg-black text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}
