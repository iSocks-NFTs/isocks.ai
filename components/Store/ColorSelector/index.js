import { useState } from "react";
import { TiTick } from "react-icons/ti";
const colors = ["#000", "#DC6400"];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="w-full flex gap-x-3 items-center">
      <span className="uppercase font-bold text-xl">Colors</span>
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            className={`text-lg bg-[${color}] h-10 w-10 rounded-full border inline-flex justify-center items-center ${
              colors[index] === selectedColor && `ring ring-[${color}]`
            }`}
            onClick={() => setSelectedColor(color)}
          ></button>
        );
      })}
    </div>
  );
}
