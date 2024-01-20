import { FaRegUser, FaUserCog } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { MdOutlineNotifications } from "react-icons/md";
import { PiClockCounterClockwiseLight } from "react-icons/pi";

export const links = [
  {
    title: "My Account",
    url: "/store/profile",
    icon: <FaRegUser />,
  },
  {
    title: "Orders",
    url: "/store/orders",
    icon: <GoPackage />,
  },
  {
    title: "Notifications",
    url: "/store/notifications",
    icon: <MdOutlineNotifications />,
  },
  {
    title: "Account Management",
    url: "/store/management",
    icon: <FaUserCog />,
  },
  {
    title: "Recently Viewed",
    url: "/store/recently-viewed",
    icon: <PiClockCounterClockwiseLight />,
  },
];
