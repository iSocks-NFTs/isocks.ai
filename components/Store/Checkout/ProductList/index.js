import Image from "next/image";
import { RiCoupon2Line } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../../../context/CartContext";

export default function ProductList() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCartContext();

  return (
    <div className="space-y-2 sm:w-3/6 w-full h-[580px] border-2 p-2 shadow-md rounded-md">
      <h3 className="text-xl font-Zen-Dots capitalize">
        Your Order ({cartItems.length})
      </h3>
      <hr />
      <div className="flex flex-col items-start gap-y-3 justify-start max-h-[500px] overflow-y-auto p-3">
        {cartItems.map((product, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-x-3 border p-5 rounded-md w-full"
            >
              <div className="flex items-center gap-1">
                <Image
                  src={product.imgUrl}
                  className="rounded-md object-cover"
                  height={100}
                  width={100}
                />
                <div className="space-y-2">
                  <p className="font-semibold text-xl">{product.heading}</p>
                  <p className="font-semibold text-xl">
                    {product?.description}
                  </p>
                  <Image
                    src="/img/logo/isocks_store_black.svg"
                    width={240}
                    height={30}
                  />
                </div>
              </div>
              <div className="flex flex-col items-end gap-y-3">
                <div className="text-xl">${product.price}</div>
                <div className="flex items-center justify-center flex-row gap-3">
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 border border-black rounded-md bg-white text-black p-3 shadow-md"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="text-xl">{product.quantity}</span>
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 border rounded-md bg-black text-white p-3 shadow-md"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <p
                  className="flex gap-x-3 text-orange-600 items-center justify-center hover:cursor-pointer uppercase"
                  onClick={() => removeFromCart(product.id)}
                >
                  <span>delete</span>
                  <FaTrash size={15} />
                </p>
              </div>
            </div>
          );
        })}
        {cartItems.length === 0 ? <p>Your Cart is empty...</p> : ""}
      </div>
      {/* <div className="">
        <h4 className="font-Zen-Dots text-lg">Discount Code</h4>
        <input
          type="text"
          className="w-full bg-transparent p-2 h-[40px] border rounded-sm"
        />
      </div> */}
    </div>
  );
}
