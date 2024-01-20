import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center py-4 shadow-md w-full border bg-white">
      <Link href="/store">
        <Image
          src="/img/logo/isock_store_black.png"
          width={240}
          height={30}
          className="cursor-pointer"
        />
      </Link>
    </nav>
  );
}
