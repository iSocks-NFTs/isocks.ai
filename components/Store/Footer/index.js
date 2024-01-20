import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const { pathname } = useRouter();
  const supportedCurrency = [
    {
      title: "US Dollar",
      imgURL: "/img/currency/dollar.svg",
      shortForm: "USD",
    },
    {
      title: "USDT - Tether",
      imgURL: "/img/currency/usdt.svg",
      shortForm: "USDT",
    },
    {
      title: "Nigerian Naira",
      imgURL: "/img/currency/naira.svg",
      shortForm: "NGN",
    },
    {
      title: "Defi Tiger",
      imgURL: "https://bscscan.com/token/images/defitiger_32.png",
      shortForm: "DTG",
    },
  ];
  const footerLinks = [
    {
      title: "Facebook",
      url: "https://www.facebook.com/100084982976478/posts/pfbid02n18vDRwtfzP8xeg1cuQeV4PHJHHZguSXydhU3vw1yzCS2x4dFC5ENo26eZB4qt4Ql/",
    },
    {
      title: "Tik Tok",
      url: "https://www.tiktok.com/@isocksnft?_t=8VmXPtv8jH4&_r=1",
    },
    {
      title: "Twitter",
      url: "https://mobile.twitter.com/isocksNft",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/isocksnft/",
    },
    {
      title: "Discord",
      url: "https://discord.gg/nbrsZY9z59",
    },
  ];
  const pageLinks = [
    {
      title: "Home",
      url: "/store",
    },
    {
      title: "Cart",
      url: "/store/cart",
    },
    {
      title: "All Products",
      url: "/store/product",
    },
    {
      title: "Collections",
      url: "/store/collection",
    },
  ];
  const extraLinks = [
    {
      title: "Refund Policy",
      url: "/refund-policy",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      url: "/terms",
    },
  ];

  return (
    <footer className="w-full text-white py-5 space-y-3 bg-[--primary-brand] relative bottom-0">
      <div className="sm:px-10 px-0">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <div className="flex gap-2">
            {pageLinks.map((link, index) => {
              return (
                <a
                  href={link.url}
                  className={`uppercase text-lg ${
                    pathname === link.url ? "border-b-2 font-semibold" : ""
                  }`}
                  key={index}
                >
                  {link.title}
                </a>
              );
            })}
          </div>
          <div className="flex gap-2">
            {extraLinks.map((link, index) => {
              return (
                <a href={link.url} className={`uppercase text-sm`} key={index}>
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:px-40 px-0">
        <div className="flex gap-x-1 gap-y-4">
          <h3>Supported Currencies</h3>
          {supportedCurrency.map((currency, index) => {
            return (
              <Image
                src={currency.imgURL}
                width={25}
                height={25}
                alt={currency.title}
                key={index}
                title={currency.title}
                className="cursor-pointer"
              />
            );
          })}
        </div>
        <div className="flex gap-x-3 items-center">
          {footerLinks.map((link, index) => {
            return (
              <a href={link.url} key={index} className="uppercase text-sm">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
