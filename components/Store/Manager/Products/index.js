import Image from "next/image";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import useAuth from "../../../../hooks/useAdminAuth";
import { useRouter } from "next/router";
import Toast from "awesome-toast-component";
import { adminEndpoints } from "../../../../utils/endpoints";

export function Table({ data, refreshTable }) {
  const { token } = useAuth();
  const { push } = useRouter();

  async function handleDelete(productId) {
    const { deleteProduct } = adminEndpoints;
    try {
      const response = await axios.delete(`${deleteProduct + productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        new Toast("Product Deleted Successfully");
        refreshTable();
      }
    } catch (error) {
      new Toast("Something went wrong... Please Try again later");
      console.error(error);
    }
  }

  return (
    <table className="min-w-full text-left text-sm font-light">
      {data.length > 0 ? (
        <>
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                Product Image
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Description
              </th>
              <th scope="col" className="px-6 py-4">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => {
              return (
                <tr key={index} className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-2 font-medium">
                    <Image
                      src={
                        product?.productImages[0]?.imageUrl
                          ? product?.productImages[0]?.imageUrl
                          : "/img/function/error/broken.png"
                      }
                      width={80}
                      height={80}
                      className="object-fit"
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-medium">
                    {product.productTitle}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-medium">
                    {product.productDescription}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-medium">
                    ${product.price}
                  </td>
                  <td className="whitespace-nowrap px-1 py-2 font-medium">
                    <MdModeEdit
                      size={20}
                      onClick={() =>
                        push(
                          `/store/manager/dashboard/products/edit/${product.id}`
                        )
                      }
                      className="hover:cursor-pointer"
                    />
                  </td>
                  <td className="whitespace-nowrap px-1 py-2 font-medium">
                    <MdDelete
                      size={20}
                      onClick={() => handleDelete(product.id)}
                      className="hover:cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      ) : (
        <p className="text-center">No Products found for that search term</p>
      )}
    </table>
  );
}
