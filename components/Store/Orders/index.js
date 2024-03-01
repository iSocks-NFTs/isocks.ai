import { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import { endpoints } from "../../../utils/endpoints";
import Toast from "awesome-toast-component";
import useAuth from "../../../hooks/useAuth";

const orderStatus = [
  {
    status: "Open Orders",
    noOfOrders: 4,
  },
  {
    status: "Closed Orders",
    noOfOrders: 3,
  },
];

export default function UserOrders() {
  const [selectedOrder, setSelectedOrder] = useState(orderStatus[0]);
  const products = [
    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },
    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },
    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },
    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },
    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },

    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },

    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },

    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },

    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },

    {
      imgUrl: "/img/products/sneakers.jpg",
      imgAlt: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      productTitle: "Mi Redmi AirDot Bluetooth Wireless Headset-BLACK",
      orderId: "1839546162",
      status: "delivered",
      date: "On 21-08",
    },
  ];
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { token } = useAuth();

  useEffect(() => {
    async function getOrders() {
      const { getOrders } = endpoints;
      try {
        const response = await axios.get(getOrders, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(response.data);
      } catch (error) {
        console.error(error);
        if (error && !error.response) {
          new Toast("Server Connection Failure...");
        }

        if (error && error.response) {
          const { status } = error.response;

          if (status === 500) {
            new Toast("Server Failure... Something went wrong...");
          }
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getOrders();
  }, []);

  return (
    <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6">
      <div className="w-full border-b p-2">
        <h3 className="text-2xl font-semibold">Orders</h3>
      </div>
      {/* <div className="p-2 flex gap-x-2 items-center">
        {orderStatus.map((order, index) => {
          return (
            <button
              className={`uppercase py-3 inline-flex ${
                selectedOrder.status === orderStatus[index].status
                  ? "font-semibold border-b-2 border-black"
                  : ""
              }`}
              key={index}
              onClick={() => setSelectedOrder(order)}
            >
              {order.status} ({order.noOfOrders}){" "}
            </button>
          );
        })}
      </div> */}
      <div className="flex justify-center items-center w-full h-[550px] border">
        {orders?.length === 0 && <p>You haven't made an order yet...</p>}
      </div>
      <div className="my-3 px-2 flex flex-col gap-y-3 overflow-y-auto h-screen">
        {orders?.map((order, index) => {
          return <Product product={order} key={index} />;
        })}
      </div>
    </div>
  );
}
