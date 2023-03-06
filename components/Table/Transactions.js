import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { baseURL } from "../../config";
import { useRouter } from "next/router";

export default function Transactions({ transactions }) {
  const [isLoading, setLoading] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["users"]);
  const [vendorId, setVendorId] = useState(null);

  useEffect(() => {
    const endpoint = `/api/find/user/${cookie.user}`;
    fetch(`${baseURL + endpoint}`, {
      headers: {
        key: process.env.NEXT_PUBLIC_BACKEND_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVendorId(data.vendorId);
      });
  }, []);

  const { push } = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left my-3">
        <thead className="bg-gray-900">
          <tr className="text-white">
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Wallet Address</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            if (!vendorId) {
              return (
                <tr
                  key={index}
                  onClick={() =>
                    push(
                      `/dashboard/admin/transactions/manage/${transaction.id}`
                    )
                  }
                  className={`border-b hover:bg-gray-400 hover:text-white hover:cursor-pointer duration-500`}
                >
                  <td className="px-4 py-2">{transaction?.emailAddress}</td>
                  <td className="px-4 py-2">{transaction?.phoneNumber}</td>
                  <td className="px-4 py-2">
                    {transaction?.buyerWalletAddress}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`rounded-full px-2 py-1 text-white ${
                        transaction?.transactionStatus === "pending" &&
                        "bg-[var(--primary-brand)]"
                      } ${
                        transaction?.transactionStatus === "failed" &&
                        "bg-[var(--error)]"
                      } ${
                        transaction?.transactionStatus === "approved" &&
                        "bg-[var(--success)]"
                      } `}
                    >
                      {transaction?.transactionStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2">{transaction?.time}</td>
                  <td className="px-4 py-2">{transaction?.date}</td>
                </tr>
              );
            }

            return (
              <tr
                key={index}
                onClick={() =>
                  push(`/dashboard/admin/transactions/manage/${transaction.id}`)
                }
                className={`border-b hover:bg-gray-400 hover:text-white hover:cursor-pointer duration-500 ${
                  transaction.vendorId !== vendorId ? "hidden" : ""
                }`}
              >
                <td className="px-4 py-2">{transaction?.emailAddress}</td>
                <td className="px-4 py-2">{transaction?.phoneNumber}</td>
                <td className="px-4 py-2">{transaction?.buyerWalletAddress}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-2 py-1 text-white ${
                      transaction?.transactionStatus === "pending" &&
                      "bg-[var(--primary-brand)]"
                    } ${
                      transaction?.transactionStatus === "failed" &&
                      "bg-[var(--error)]"
                    } ${
                      transaction?.transactionStatus === "approved" &&
                      "bg-[var(--success)]"
                    } `}
                  >
                    {transaction?.transactionStatus}
                  </span>
                </td>
                <td className="px-4 py-2">{transaction?.time}</td>
                <td className="px-4 py-2">{transaction?.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
