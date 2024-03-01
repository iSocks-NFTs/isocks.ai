import { FaRegUser, FaUserCog } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { MdOutlineNotifications } from "react-icons/md";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { GiClothes } from "react-icons/gi";

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

export const adminLinks = [
  {
    title: "Admin",
    url: "/store/manager/dashboard",
    icon: <FaRegUser />,
  },
  {
    title: "Products",
    url: "/store/manager/dashboard/products",
    icon: <GiClothes />,
  },
  {
    title: "Orders",
    url: "/store/manager/dashboard/orders",
    icon: <GoPackage />,
  },
  {
    title: "Gallery",
    url: "/store/manager/dashboard/gallery",
    icon: <TfiGallery />,
  },
  {
    title: "Management",
    url: "/store/manager/dashboard/settings",
    icon: <FaUserCog />,
  },
];
