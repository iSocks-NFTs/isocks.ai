import { useRouter } from "next/router";

export default function Header() {
  const { push } = useRouter();

  return (
    <div className="w-auto h-[350px] rounded-md bg-[url('/img/products/sneakers.jpg')] relative bg-center bg-no-repeat bg-origin-border bg-cover my-10 mx-3 shadow">
      <button
        className="uppercase font-Zen-Dots rounded-sm border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 px-5 py-3 hover:bg-white hover:text-[--primary-brand] text-center text-white bottom-10 md:left-10 left-8 absolute"
        onClick={() => push("/store/product")}
      >
        View The Collection
      </button>
    </div>
  );
}
