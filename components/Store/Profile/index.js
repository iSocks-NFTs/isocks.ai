import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import useAuth from "../../../hooks/useAuth";
import { getFirstName } from "../../../utils/helpers";
import { FiLogOut } from "react-icons/fi";
import { useCookies } from "react-cookie";

export default function Profile() {
  const [dropdown, setDropdown] = useState(false);
  const { push, reload } = useRouter();
  const { activeSession, error, loading, user, logOut } = useAuth();


  return (
    <>
      <div className="relative">
        <div
          className="cursor-pointer inline-flex gap-x-2 items-center"
          onClick={() => setDropdown(!dropdown)}
        >
          <FaUser size={20} className="cursor-pointer" />
          {!error & !loading ? `${getFirstName(user.fullName)}` : ""}
        </div>
        <AnimatePresence
          initial={false}
          node="wait"
          onExitComplete={() => null}
        >
          {dropdown && (
            <motion.div
              className="absolute top-10 right-0 w-56 bg-[--primary-brand] text-white border flex flex-col items-center p-3 rounded-md z-10"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {!activeSession && (
                <button
                  className="py-2 w-full rounded-sm px-6 inline-flex justify-center border border-white bg-white text-[--primary-brand] hover:text-white hover:bg-transparent duration-500"
                  onClick={() => push("/store/login")}
                >
                  Login
                </button>
              )}
              <div className="w-full flex flex-col gap-y-2 items-center my-2 text-lg">
                <button
                  className="w-full inline-flex gap-x-4 items-center py-2"
                  onClick={() => push("/store/profile")}
                >
                  <FaUser size={25} /> My Account
                </button>
                <button
                  className="w-full inline-flex gap-x-4 items-center py-2"
                  onClick={() => push("/store/orders")}
                >
                  <FiShoppingBag size={25} /> Orders
                </button>
                {activeSession && (
                  <button
                    className="w-full inline-flex gap-x-4 items-center py-2"
                    onClick={logOut}
                  >
                    <FiLogOut size={25} /> Logout
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
