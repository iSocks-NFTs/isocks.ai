import { useState } from "react";

export default function Quantity() {
  const [productQuantity, setProductQuantity] = useState(0);

  function increase() {
    setProductQuantity((productQuantity) => productQuantity + 1);
  }

  function decrease() {
    if (productQuantity === 0) {
      return;
    }

    setProductQuantity((productQuantity) => productQuantity - 1);
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
        {productQuantity}
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
