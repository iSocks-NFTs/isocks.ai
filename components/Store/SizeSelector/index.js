import { useState } from "react";
const sizes = [
  {
    label: "L",
  },
  {
    label: "XL",
  },
  {
    label: "XXL",
  },
];
export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="w-full flex gap-x-3 items-center">
      <span className="uppercase font-bold text-xl">Sizes</span>
      {sizes.map((size, index) => {
        return (
          <button
            key={index}
            className={`text-lg ${
              sizes[index].label === selectedSize.label
                ? `border border-black px-3 py-1 rounded-md`
                : ""
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size.label}
          </button>
        );
      })}
    </div>
  );
}
