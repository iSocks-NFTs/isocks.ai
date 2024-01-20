import Image from "next/image";
import { RiCoupon2Line } from "react-icons/ri";

export default function ProductList() {
  const products = [
    {
      productTitle: "Puma Air Zoom Sneakers",
      productImgURL: "/img/products/sneakers.jpg",
      size: "XXL",
      prize: "$45",
      quantity: 2,
    },
    {
      productTitle: "Puma Air Zoom Sneakers",
      productImgURL: "/img/products/sneakers.jpg",
      size: "XXL",
      prize: "$45",
      quantity: 2,
    },
    {
      productTitle: "Puma Air Zoom Sneakers",
      productImgURL: "/img/products/sneakers.jpg",
      size: "XXL",
      prize: "$45",
      quantity: 2,
    },
    {
      productTitle: "Puma Air Zoom Sneakers",
      productImgURL: "/img/products/sneakers.jpg",
      size: "XXL",
      prize: "$45",
      quantity: 2,
    },
  ];

  return (
    <div className="space-y-2 w-5/6 border-2">
      <h3 className="text-xl font-Zen-Dots capitalize">Your Order</h3>
      <div className="flex flex-col items-start gap-y-3 justify-start max-h-[300px] overflow-y-auto p-3">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-x-3 border p-5 rounded-md"
            >
              <Image
                src={product.productImgURL}
                className="rounded-md object-cover"
                height={90}
                width={100}
              />
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold">{product.productTitle}</p>
                <p className="font-semibold">
                  <span className="font-normal">Size</span> : {product.size}
                </p>
                <p className="font-semibold">
                  <span className="font-normal">Color</span> : {product.size}
                </p>
              </div>
              <div className="font-semibold">$500</div>
            </div>
          );
        })}
      </div>
      <div className="">
        <h4 className="font-Zen-Dots text-lg">Discount Code</h4>
        <input
          type="text"
          className="w-full bg-transparent p-2 h-[40px] border rounded-sm"
        />
      </div>
    </div>
  );
}
