export default function Section() {
  return (
    <div className="w-full flex sm:flex-row md:flex-col lg:flex-row flex-col h-fit">
      <div className="sm:w-[60%] md:w-full lg:w-[55%] w-full">
        <img
          src="/img/section/wb.png"
          alt="White and Black Photo"
          className="border-0"
        />
      </div>
      <div className="sm:w-[40%] md:w-full lg:w-[45%] w-full bg-black text-white sm:text-right md:text-center lg:text-right text-center flex flex-col justify-center p-2">
        <h3 className="sm:text-[3.2rem] xl:text-[3.2rem] lg:text-[2.3rem] text-[2.8rem]">
          Our Vision
        </h3>
        <p className="sm:text-[2.5rem] xl:text-[2.5rem] lg:text-[1.8rem] text-[2rem] font-semibold">
          Long-term goals and objectives
        </p>
        <p className="sm:text-[1.7rem] xl:text-[1.7rem] lg:text-[1.2rem] text-[1rem] font-thin">
          {" "}
          "We believe that the future of fashion is about more than just looking
          good, it is about being able to prove the authencity and ownership of
          your wardrobe. Join us on our journey to revolutionize the way we
          think about fashion and style. Shop our collection today and elevate
          your style with iSocksNFT."
        </p>
      </div>
    </div>
  );
}
