import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { PiCaretDown } from "react-icons/pi";
import { useCartContext } from "../../context/CartContext";
import Product from "./Product";

export default function Cart() {
  const [cartDropdown, setCartDropdown] = useState(false);
  const {
    cartItems,
    calculateTotalPrice,
    calculateTotalQuantity,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    checkOut,
  } = useCartContext();

  return (
    <div className="relative">
      <div
        className="inline-flex text-black bg-white p-3 rounded-md cursor-pointer relative"
        onClick={() => setCartDropdown(!cartDropdown)}
      >
        <FaShoppingCart size={25} />
        <span className="bg-black text-white rounded-full border-[3px] border-white absolute h-6 w-6 inline-flex justify-center items-center -top-2 -right-2">
          {calculateTotalQuantity()}
        </span>
      </div>
      <AnimatePresence initial={false} node="wait" onExitComplete={() => null}>
        {cartDropdown && (
          <motion.div
            className="sm:absolute relative md:top-14 top-3 right-0 rounded-md border border-solid bg-[--primary-brand] border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 h-[450px] w-[380px] p-3 z-50 text-white flex flex-col justify-between items-center gap-y-3"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-full flex justify-between items-start">
              <h3 className="uppercase font-Zen-Dots text-2xl">Cart</h3>
              <PiCaretDown
                size={25}
                className="cursor-pointer"
                onClick={() => setCartDropdown(false)}
              />
            </div>

            <div className="h-full w-full overflow-y-auto p-1 flex flex-col gap-y-2">
              {cartItems.map((data, index) => {
                return (
                  <Product
                    key={index}
                    productIMGURL={data.imgUrl}
                    productTitle={data.productTitle}
                    quantity={data.quantity}
                    price={data.price}
                    removeFromCart={() => removeFromCart(data.id)}
                    increaseQuantity={() => incrementQuantity(data.id)}
                    decreaseQuantity={() => decrementQuantity(data.id)}
                  />
                );
              })}
              {cartItems.length === 0 ? (
                <p>Your Cart is currently empty...</p>
              ) : (
                ""
              )}
            </div>

            <div className="flex w-full justify-end items-start gap-x-5">
              <p className="uppercase text-[0.5rem]">Total</p>
              <p className="text-2xl">${calculateTotalPrice()}</p>
            </div>

            <button
              className="uppercase font-Zen-Dots rounded-sm border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 px-5 py-3 hover:bg-white hover:text-[--primary-brand] w-full text-center"
              onClick={checkOut}
            >
              Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
