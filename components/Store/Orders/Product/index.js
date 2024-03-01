import Image from "next/image";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function Product({ product }) {
  const { push } = useRouter();

  return (
    <div className="border p-3 gap-x-3 flex items-start justify-between rounded-md shadow-sm w-full">
      <div className="flex items-center gap-x-3">
        <Image
          src={product.imgUrl}
          alt={product.id}
          width={120}
          height={120}
          className="object-cover"
        />
        <div className="flex flex-col gap-y-4">
          <div>
            <h3 className="font-semibold text-xl">iSocks Store Purchase</h3>
            <h3 className="text-md text-black opacity-65">
              Order {product?.id}
            </h3>
          </div>
          <div>
            <p className="bg-green-600 text-white uppercase w-fit p-1 text-xs">
              {product.status}
            </p>
            <p>
              {product?.orderInitialDate &&
                format(product?.orderInitialDate, "dd MMMM")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button className="uppercase bold">See Details</button>
      </div>
    </div>
  );
}
