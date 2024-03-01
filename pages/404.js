import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFound() {
  const { push } = useRouter();
  
  return (
    <div className="h-screen w-full bg-[--primary-brand] text-white">
      <Head>
        <title>iSocks | Page Not Found</title>
      </Head>
      <div className="w-full flex items-center justify-center flex-col h-screen text-center">
        <Link href="/store">
          <Image
            src="/img/logo/isocks_store.svg"
            width={240 * 2}
            height={30 * 2}
            className="cursor-pointer"
          />
        </Link>
        <h3 className="text-2xl">Page Not Found</h3>
        <p className="text-xl">
          Sorry We could not find the link you were looking for.
        </p>
        <button onClick={() => push("/store")} className="underline font-thin">
          Get Back to Shopping
        </button>
      </div>
    </div>
  );
}
