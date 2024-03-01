import { useState } from "react";
import { useGallery } from "../../../../hooks/useData";
import Image from "next/image";
import { Blocks } from "react-loader-spinner";
import Search from "../../Gallery/Search";
import axios from "axios";
import { adminEndpoints } from "../../../../utils/endpoints";
import useAuth from "../../../../hooks/useAdminAuth";
import Toast from "awesome-toast-component";
import { useRouter } from "next/router";

export function GalleryImageSelector({ product }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, loading, setData } = useGallery();
  const [apiCallLoading, setApiCallLoading] = useState(false);
  const { token } = useAuth();
  const { push } = useRouter();

  const filteredData = data
    ? data?.filter((image) =>
        image?.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
      )
    : [];

  async function saveSelectedImages() {
    new Toast("Processing...");
    const { setProductImage } = adminEndpoints;
    try {
      setApiCallLoading(true);
      const selectedImages = filteredData.filter(
        (image) => image.selected === true
      );
      const response = await axios.patch(
        setProductImage + product.id,
        { productImages: selectedImages },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        new Toast("Successfully set product image");
        push("/store/manager/dashboard/products");
      }
    } catch (error) {
      console.error(error);
      new Toast("Setting Product Image Failed...");
    } finally {
      setApiCallLoading(false);
    }
  }

  function selectImage(index) {
    setData((data) => {
      return data.map((entry, stateIndex) => {
        if (index === stateIndex) {
          return {
            ...entry,
            selected: !entry.selected,
          };
        } else {
          return entry;
        }
      });
    });
  }

  return (
    <div className="w-full border h-[600px] rounded-md">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex justify-end p-3">
        <button
          className="p-3 bg-[--primary-brand] text-white rounded-md shadow-md hover:bg-white hover:text-[--primary-brand] duration-500 inline-flex items-center justify-center"
          onClick={saveSelectedImages}
        >
          {apiCallLoading ? (
            <Blocks
              height="80"
              width="80"
              color="#000"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          ) : (
            "Save Images"
          )}
        </button>
      </div>
      <div className="w-full">
        {loading ? (
          <div className="flex w-full h-[600px] items-center justify-center">
            {/* Loading indicator */}
            <Blocks
              height="80"
              width="80"
              color="#000"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full h-[480px] overflow-y-scroll p-2">
            {filteredData?.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`aspect-w-1 aspect-h-1 h-fit w-fit m-0 p-0 flex items-center justify-center rounded-md hover:cursor-pointer ${
                    image.selected ? "border-2 border-black" : ""
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    width={250}
                    height={250}
                    className={`w-full h-full object-cover rounded-md`}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
