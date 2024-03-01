import { useState } from "react";
import ManagerLayout from "../../../../../layouts/manager_layout";
import { Table } from "../../../../../components/Store/Manager/Products";
import Search from "../../../../../components/Store/Gallery/Search";
import { useRouter } from "next/router";
import { useProduct } from "../../../../../hooks/useData";


export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useRouter();
  const { data, error, loading, refreshTable } = useProduct();

  const filteredData = data
    ? data.filter(
        (product) =>
          product.productName
            ?.toLowerCase()
            ?.includes(searchTerm.toLowerCase()) ||
          product.productDescription
            ?.toLowerCase()
            ?.includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <ManagerLayout title="iSocks | Products">
      <div className="w-full h-full shadow-md">
        <div className="px-3 space-y-3">
          <button
            className="py-2 px-4 bg-black text-white rounded-md shadow-md border border-black"
            onClick={() => push("/store/manager/dashboard/products/add")}
          >
            Add Product
          </button>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="w-full overflow-x-auto max-h-[600px] overflow-y-auto">
            <Table data={filteredData} refreshTable={refreshTable} />
          </div>
        </div>
      </div>
    </ManagerLayout>
  );
}
