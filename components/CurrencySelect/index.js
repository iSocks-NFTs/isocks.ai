import { useState } from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import Image from "next/image";

const currency = [
  {
    title: "USDT - Tether",
    imgURL: "/img/currency/usdt.svg",
    shortForm: "USDT",
  },
  {
    title: "US Dollar",
    imgURL: "/img/currency/dollar.svg",
    shortForm: "USD",
  },
  {
    title: "Nigerian Naira",
    imgURL: "/img/currency/naira.svg",
    shortForm: "NGN",
  },
  {
    title: "Defi Tiger",
    imgURL: "https://bscscan.com/token/images/defitiger_32.png",
    shortForm: "DTG",
  },
];

export default function CurrencySelect() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);

  function handleClick(currency) {
    setSelectedCurrency(currency);
    setOpenDropdown(false);
  }

  return (
    <div className="relative">
      <span
        className="flex justify-center items-center cursor-pointer gap-x-1"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {selectedCurrency.shortForm}{" "}
        {openDropdown ? <PiCaretUp /> : <PiCaretDown />}
      </span>
      {openDropdown && (
        <div className="absolute top-10 flex justify-center py-3 flex-col w-40 border right-0 shadow-sm shadow-white rounded-md items-start z-10 bg-[--primary-brand]">
          {currency.map((currency, index) => {
            return (
              <p
                key={index}
                className="py-1 inline-flex items-center justify-start gap-x-2 mx-auto w-full px-3 cursor-pointer"
                onClick={() => handleClick(currency)}
              >
                <Image
                  src={currency.imgURL}
                  alt={currency.title}
                  title={currency.title}
                  width={20}
                  height={20}
                />{" "}
                {currency.title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
