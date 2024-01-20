import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";

export default function Sidebar({ links, logOut }) {
  const { pathname, push } = useRouter();
  return (
    <div className="bg-white md:min-h-[600px] h-screen text-[--primary-brand] p-3 rounded-md shadow-md md:w-[16rem] w-fit">
      <div className="flex flex-col gap-y-3">
        {links.map((link, index) => {
          return (
            <button
              key={index}
              onClick={() => push(link.url)}
              className={`px-3 rounded-md py-3 h-full md:w-full w-fit inline-flex items-center gap-x-2 text-lg hover:bg-[--primary-brand] hover:text-white ${
                pathname === link.url ? "bg-[--primary-brand] text-white" : ""
              }   `}
            >
              {link.icon} <span className="hidden md:block">{link.title}</span>
            </button>
          );
        })}
        <button
          className="inline-flex items-center px-3 rounded-md py-3 text-lg hover:bg-[--primary-brand] gap-x-2 hover:text-white md:w-full w-fit"
          onClick={logOut}
        >
          <CiLogout /> <span className="hidden md:block">Log Out</span>
        </button>
      </div>
    </div>
  );
}
