import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import Image from "next/image";

export function Summary() {
  const {
    calculateTotalPrice,
    cartItems,
    currency,
    selectCurrency,
    selectedCurrency,
    processOrder,
    checkoutPage,
    calculateDiscountPrice,
  } = useCartContext();
  const [dropdownOpen, setDropdown] = useState(false);

  return (
    <>
      <div className="space-y-2 sm:w-1/6 w-full h-fit border-2 p-2 shadow-md rounded-md">
        <h3 className="uppercase font-semibold">Cart Summary</h3>
        <hr />

        <div className="flex justify-between items-center">
          <p className="font-semibold">Total Items ({cartItems.length})</p>
          <p>${calculateTotalPrice()}</p>
        </div>

        {selectedCurrency.title === "Defi Tiger" ? (
          <>
            <div className="flex justify-between items-center">
              <p className="font-semibold">DTG (Discount)</p>
              <p className="line-through">${calculateTotalPrice() * 0.3}</p>
            </div>
          </>
        ) : (
          ""
        )}

        {cartItems.length > 1 ? (
          <p>Free Shipping...</p>
        ) : (
          <p className="text-sm opacity-70">
            Shipping Fees not included yet...
          </p>
        )}

        <hr />
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Total Price</p>
          <p className="">${calculateDiscountPrice(calculateTotalPrice())}</p>
        </div>

        <div className="w-full relative">
          <div
            className="flex p-3 border rounded-md shadow-md items-center gap-x-3 hover:cursor-pointer bg-[var(--primary-brand)] text-white"
            onClick={() => setDropdown(true)}
          >
            <Image src={selectedCurrency.imgURL} width={20} height={20} />
            <p className="text-lg">{selectedCurrency.title}</p>
          </div>
          {dropdownOpen && (
            <div className="w-full bg-[var(--primary-brand)] absolute top-16 left-0 shadow-md rounded-md p-3">
              {currency.map((currency, index) => {
                return (
                  <div
                    key={index}
                    className="text-white flex gap-x-3 items-center hover:cursor-pointer"
                    onClick={() => {
                      selectCurrency(currency);
                      setDropdown(false);
                    }}
                  >
                    <Image src={currency.imgURL} width={20} height={20} />
                    <p className="text-lg">{currency.title}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {checkoutPage === 2 ? (
          <></>
        ) : (
          <button
            className="uppercase font-Zen-Dots rounded-md border border-solid border-black bg-white text-black border-opacity-40 shadow-lg backdrop-blur-20 px-5 py-3 hover:bg-white hover:text-[--primary-brand] w-full text-center duration-500 disabled:bg-slate-400 disabled:text-white"
            onClick={() => {
              processOrder();
            }}
            disabled={
              checkoutPage === 4 || checkoutPage === 0 || checkoutPage === 2
                ? false
                : true
            }
          >
            {checkoutPage > 0 ? (
              <>Confirm Order</>
            ) : (
              <>Checkout ${calculateDiscountPrice(calculateTotalPrice())}</>
            )}
          </button>
        )}
      </div>
    </>
  );
}
