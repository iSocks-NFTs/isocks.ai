import Image from "next/image";

export default function Product({
  productIMGURL,
  productTitle,
  quantity,
  price,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
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
          <div className="flex items-center gap-x-3">
            <span
              className="inline-flex items-center justify-center border rounded-full bg-white text-black h-5 w-5 hover:bg-transparent hover:text-white hover:cursor-pointer"
              onClick={decreaseQuantity}
            >
              -
            </span>
            <p>{quantity} Qty</p>
            <span
              className="inline-flex items-center justify-center border rounded-full bg-white text-black h-5 w-5 hover:bg-transparent hover:text-white hover:cursor-pointer"
              onClick={increaseQuantity}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div>
        <button className="text-[0.5rem]" onClick={removeFromCart}>
          REMOVE
        </button>
        <p>${price}</p>
      </div>
    </div>
  );
}
