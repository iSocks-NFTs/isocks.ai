import React from "react";
import { baseURL } from "../../../../config";
import Image from "next/image";

export async function getServerSideProps(context) {
  const { id } = context.query;

  const FIND_TRANSACTION = `/api/find/transaction/${id}`;

  const response = await fetch(`${baseURL + FIND_TRANSACTION}`);
  const data = await response.json();

  return {
    props: { data },
  };
}

const TransactionData = ({ data }) => {
  return (
    <>
      {data ? (
        data.map((transaction, index) => {
          return (
            <div key={index}>
              <div>{transaction?.emailAddress}</div>
              <div>{transaction?.phoneNumber}</div>
              <div>{transaction?.buyerWalletAddress}</div>
              <div>{transaction?.transactionStatus}</div>
              <div>
                <Image
                  src={transaction?.transactionProofIMGURL}
                  alt="transaction Receipt"
                />
              </div>
            </div>
          );
        })
      ) : (
        <>Can't Locate Transaction Data</>
      )}
    </>
  );
};

export default TransactionData;
