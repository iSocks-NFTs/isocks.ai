import React from "react";
import { baseURL } from "../../../../../config";
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

export default function ManageTransaction() {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-2xl text-center">
        Transaction Management
      </h3>
    </div>
  );
}
