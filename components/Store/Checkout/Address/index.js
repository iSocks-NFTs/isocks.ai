import { useEffect, useState } from "react";
import { useCartContext } from "../../../../context/CartContext";
import useAuth from "../../../../hooks/useAuth";
import { RiPencilLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { endpoints } from "../../../../utils/endpoints";

export default function UserAddress() {
  const { token } = useAuth();
  const [addresses, setAddress] = useState();
  const [loading, setLoading] = useState(true);
  const { selectAddressPurchase, previousCheckoutPage, goToCreateAddressPage } =
    useCartContext();

  useEffect(() => {
    async function getBillingInfo() {
      try {
        const { getAllBillingAddress } = endpoints;
        const response = await axios.get(getAllBillingAddress, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setAddress(response.data);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getBillingInfo();
  }, []);

  const selectAddress = (index) => {
    setAddress((prevState) => {
      return prevState.map((address, currentIndex) => {
        if (currentIndex === index) {
          return { ...address, selected: true };
        } else {
          return { ...address, selected: false };
        }
      });
    });
  };

  return (
    <div className="space-y-2 sm:w-3/6 w-full h-[580px] border-2 p-2 shadow-md rounded-md">
      <h3 className="text-xl font-Zen-Dots capitalize">
        Select Delivery Address
      </h3>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {addresses && addresses?.length === 0 ? (
            <p>You haven't set an address...</p>
          ) : (
            <>
              <h4 className="text-sm uppercase font-bold">
                Address Book({addresses?.length})
              </h4>
              <div className="w-full max-h-[350px] overflow-y-auto space-y-3">
                {addresses?.map((data, index) => {
                  return (
                    <div
                      className={`border p-3 rounded-md ${
                        data?.selected ? "border-black" : ""
                      } hover:cursor-pointer hover:shadow-md duration-500 flex justify-between items-start`}
                      key={index}
                      onClick={() => selectAddress(index)}
                    >
                      <div>
                        <h3>{data?.fullName}</h3>
                        <p>
                          {data?.address} {data?.city}, {data?.state},{" "}
                          {data?.country}
                        </p>
                        <div className="space-x-3">
                          {data?.phoneNumber?.map((number, index) => {
                            return <span key={index}>{number}</span>;
                          })}
                        </div>
                        {data?.isDefault ? (
                          <p className="uppercase text-xs bg-slate-300 w-fit p-1 text-white rounded-sm">
                            default address
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <button className="flex items-start gap-1">
                        {" "}
                        Edit <RiPencilLine />
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
      <button
        className="inline-flex items-center justify-center uppercase gap-2 my-2"
        onClick={goToCreateAddressPage}
      >
        <FaPlus size={20} /> Add Address
      </button>
      <hr />
      <div className="my-3 w-full">
        <div className="w-full flex justify-end items-center gap-x-3">
          <button className="uppercase p-4" onClick={previousCheckoutPage}>
            Cancel
          </button>
          <button
            className="uppercase shadow-md p-4 bg-[var(--primary-brand)] text-white rounded-md"
            onClick={() => {
              const address = addresses.find(
                (address) => address.selected === true
              );
              selectAddressPurchase(address);
            }}
          >
            Select Address
          </button>
        </div>
      </div>
    </div>
  );
}
