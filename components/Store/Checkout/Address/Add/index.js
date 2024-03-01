import { useState } from "react";
import { useCartContext } from "../../../../../context/CartContext";
import Toast from "awesome-toast-component";
import { TiDelete } from "react-icons/ti";

export default function AddNewAddress() {
  const { storeNewAddress, goToAddressList } = useCartContext();
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phoneTextField: "",
    phoneNumber: [],
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
    handleKeyDown(e);
    if (id === "phoneTextField") {
      new Toast("Tap Enter to Save...");
    }
  }

  function handlePhoneNumber(e) {
    const { value } = e.target;
    setForm((prevState) => ({ ...prevState, phoneTextField: value }));
    new Toast("Tap Enter to Save...");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const { phoneNumber } = form;

      if (e.target.value === "") {
        new Toast("Input Field is empty...");
        return;
      }

      const newPhoneNumbers = [...phoneNumber, e.target.value];
      setForm((form) => ({
        ...form,
        phoneNumber: newPhoneNumbers,
        phoneTextField: "",
      }));

      new Toast("Added New Phone Number...");
    }
  }

  function handleTagRemove(index) {
    const updatedPhoneNumbers = [...form.phoneNumber];
    updatedPhoneNumbers.splice(index, 1);
    setForm((prevForm) => ({ ...prevForm, phoneNumber: updatedPhoneNumbers }));
  }

  return (
    <div className="space-y-2 sm:w-3/6 w-full h-fit border-2 p-2 shadow-md rounded-md">
      <h3 className="text-xl font-Zen-Dots capitalize">
        Add New Delivery Address
      </h3>
      <hr />
      <div className="flex justify-end w-full">
        <button className="underline font-semibold" onClick={goToAddressList}>
          Back {">"}{" "}
        </button>
      </div>
      <form
        onSubmit={(event) => storeNewAddress(event, form)}
        className="w-full space-y-3"
      >
        <div className="flex sm:flex-row flex-col gap-2">
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] w-full p-1 outline-none"
            placeholder="Full Name"
            id="fullName"
            onChange={handleChange}
            value={form.fullName}
          />
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] w-full p-1 outline-none"
            placeholder="Address"
            id="address"
            onChange={handleChange}
            value={form.address}
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-2">
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] w-full p-1 outline-none"
            placeholder="City"
            id="city"
            onChange={handleChange}
            value={form.city}
          />
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] w-full p-1 outline-none"
            placeholder="State"
            id="state"
            onChange={handleChange}
            value={form.state}
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-2">
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] w-full p-1 outline-none"
            placeholder="Postal Code"
            id="postalCode"
            onChange={handleChange}
            value={form.postalCode}
          />
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] w-full p-1 outline-none"
            placeholder="Country"
            id="country"
            onChange={handleChange}
            value={form.country}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            className="border bg-white rounded-sm h-[55px] min-w-fit w-[380px] p-1 outline-none"
            placeholder="Phone Number (Include Country Code)"
            id="phoneTextField"
            onChange={handlePhoneNumber}
            onKeyDown={handleKeyDown}
            value={form.phoneTextField}
          />
          <div className="flex gap-x-2">
            {form.phoneNumber.map((number, index) => {
              return (
                <span
                  key={index}
                  className="bg-slate-300 px-2 py-1 text-white inline-flex justify-center items-center rounded-md shadow-md hover:cursor-pointer"
                  onClick={() => handleTagRemove(index)}
                >
                  {number} <TiDelete />
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="uppercase font-Zen-Dots rounded-md border border-solid border-black bg-white text-black border-opacity-40 shadow-lg backdrop-blur-20 px-5 py-3 hover:bg-white hover:text-[--primary-brand] w-fit max-w-[380px] text-center duration-500 disabled:bg-slate-400 disabled:text-white"
            type="submit"
          >
            Add Address
          </button>
        </div>
      </form>
      <h4 className="text-sm uppercase font-bold"></h4>
    </div>
  );
}
