import { useState } from "react";
import { useCartContext } from "../../../../../context/CartContext";
import Image from "next/image";
import { format, addWeeks } from "date-fns";

export default function Delivery() {
  const {
    selectedCurrency,
    selectCurrency,
    previousCheckoutPage,
    currency,
    address,
    confirmOrder,
  } = useCartContext();
  const [dropdownOpen, setDropdown] = useState(false);

  const today = new Date();
  const formattedToday = format(today, "dd MMMM");

  const dateInOneWeek = addWeeks(today, 1);
  const formattedDateInOneWeek = format(dateInOneWeek, "dd MMMM");

  const dateInTwoWeeks = addWeeks(today, 2);
  const formattedDateInTwoWeeks = format(dateInTwoWeeks, "dd MMMM");

  return (
    <div className="space-y-2 sm:w-3/6 w-full h-fit border-2 p-2 shadow-md rounded-md">
      <h3 className="text-xl font-Zen-Dots capitalize">Delivery Details</h3>
      <hr />
      <div className="flex w-full justify-end">
        <button
          className="text-right underline font-semibold"
          onClick={previousCheckoutPage}
        >
          Change {">"}
        </button>
      </div>
      <h4 className="font-semibold text-xl">Door-Step Delivery</h4>
      <div>
        <p className="text-lg">To be Delivered to : {address.fullName}</p>
        <p>
          Address : {address.address} {address.city} {address.state}{" "}
          {address.country}
        </p>
        <p>
          Phone Number :{" "}
          {address?.phoneNumber?.map((number) => (
            <span className="font-semibold">{number}</span>
          ))}
        </p>
      </div>
      <p className="text-sm">
        Delivery between{" "}
        <span className="font-bold">{formattedDateInOneWeek}</span> and{" "}
        <span className="font-bold">{formattedDateInTwoWeeks}</span>
      </p>
      <h3 className="text-xl">Select Payment Method</h3>
      <div className="max-w-[380px] w-fit relative">
        <div
          className="flex p-3 border rounded-md shadow-md items-center gap-x-3 hover:cursor-pointer bg-[var(--primary-brand)] text-white"
          onClick={() => setDropdown(true)}
        >
          <Image src={selectedCurrency.imgURL} width={20} height={20} />
          <p className="text-lg">{selectedCurrency.title}</p>
        </div>
        {dropdownOpen && (
          <div className="max-w-[380px] w-fit bg-[var(--primary-brand)] absolute top-16 left-0 shadow-md rounded-md p-3">
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
      <div className="flex justify-end">
        <button
          className="uppercase font-Zen-Dots rounded-md border border-solid border-black bg-white text-black border-opacity-40 shadow-lg backdrop-blur-20 px-5 py-3 hover:bg-white hover:text-[--primary-brand] w-fit max-w-[380px] text-center duration-500 disabled:bg-slate-400 disabled:text-white"
          onClick={confirmOrder}
        >
          Process Order
        </button>
      </div>
    </div>
  );
}
