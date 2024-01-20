import Image from "next/image";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const { push } = useRouter();

  return (
    <div className="border p-3 gap-x-3 flex items-start rounded-md shadow-sm w-fit">
      <Image
        src={product.imgUrl}
        alt={product.imgAlt}
        width={120}
        height={120}
        className="object-cover"
      />
      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="font-semibold text-xl">{product.productTitle}</h3>
          <h3 className="text-md text-black opacity-65">
            Order {product.orderId}
          </h3>
        </div>
        <div>
          <p className="bg-green-600 text-white uppercase w-fit p-1 text-xs">
            {product.status}
          </p>
          <p>{product.date}</p>
        </div>
      </div>
      <div>
        <button className="uppercase bold">See Details</button>
      </div>
    </div>
  );
}
