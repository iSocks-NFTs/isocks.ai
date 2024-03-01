import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProductImage({ images, setCurrentImage }) {
  return (
    <AnimatePresence initial={false} node="wait" onExitComplete={() => null}>
      <motion.div
        className="flex gap-x-1 absolute bottom-10 right-5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        {images.map((image, index) => {
          return (
            <Image
              src={image}
              width={45}
              height={45}
              key={index}
              className={`rounded-md hover:cursor-pointer duration-700 border object-fill shadow`}
              onClick={() => setCurrentImage(images[index])}
            />
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductImageSelector({ images }) {
  const [currentImage, setCurrentImage] = useState(
    images[0] ? images[0] : "/img/function/error/broken.png"
  );

  return (
    <div
      className={`relative text-white sm:w-3/6 w-full sm:mx-3 mx-auto h-[550px] rounded-md`}
    >
      <Image
        src={currentImage}
        layout="fill"
        className="h-full w-full object-cover rounded-md border-2"
      />
      <ProductImage images={images} setCurrentImage={setCurrentImage} />
    </div>
  );
}
