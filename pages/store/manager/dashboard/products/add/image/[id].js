import ManagerLayout from "../../../../../../../layouts/manager_layout";
import { parse } from "cookie";
import { adminEndpoints } from "../../../../../../../utils/endpoints";
import { GalleryImageSelector } from "../../../../../../../components/Store/UploadBox/GallerySelector";

export async function getServerSideProps(context) {
  const { getProductById } = adminEndpoints;
  const { id } = context.params;
  // Parse the cookie string from the request headers
  const cookies = parse(context.req.headers.cookie || "");

  // Access the value of the "isocks_store_admin" cookie
  const token = cookies.isocks_store_admin;

  try {
    const response = await fetch(getProductById + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      redirect: {
        destination: "/500", // or an external URL
        permanent: false, // Set to true for permanent redirect (301), false for temporary redirect (302)
      },
    };
  }
}

export default function SelectProductImage({ data }) {
  return (
    <ManagerLayout title="iSocks | Select Product Image">
      <GalleryImageSelector product={data} />
    </ManagerLayout>
  );
}
