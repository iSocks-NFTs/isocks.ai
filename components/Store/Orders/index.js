import { useState } from "react";
import Product from "./Product";

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

  return (
    <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6">
      <div className="w-full border-b p-2">
        <h3 className="text-2xl font-semibold">Orders</h3>
      </div>
      <div className="p-2 flex gap-x-2 items-center">
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
      </div>
      <div className="my-3 px-2 flex flex-col gap-y-3 overflow-y-auto h-screen">
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
