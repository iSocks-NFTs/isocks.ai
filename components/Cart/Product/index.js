import Image from "next/image";

export default function Product({
  productIMGURL,
  productTitle,
  quantity,
  price,
}) {
  return (
    <div className="rounded-sm border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent backdrop-blur-20 flex justify-between py-3 px-2 gap-y-1">
      <div className="flex gap-x-3 justify-between items-center">
        <Image
          src={productIMGURL}
          width={40}
          height={40}
          className="object-fill rounded-sm"
        />
        <div>
          <h3 className="text-md">{productTitle}</h3>
          <p>{quantity} Qty</p>
        </div>
      </div>
      <div>
        <button className="text-[0.5rem]">REMOVE</button>
        <p>{price}.00</p>
      </div>
    </div>
  );
}
