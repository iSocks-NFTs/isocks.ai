import { FaRegShareFromSquare } from "react-icons/fa6";

export default function ShareButton() {
  return (
    <button className="inline-flex gap-x-3 px-7 py-4 items-center uppercase font-semibold border border-black rounded-md focus:ring focus:ring-black">
      <FaRegShareFromSquare />
      Share
    </button>
  );
}
