import { useState, useRef } from "react";
import ManagerLayout from "../../../../../layouts/manager_layout";
import Search from "../../../../../components/Store/Gallery/Search";
import axios from "axios";
import useAuth from "../../../../../hooks/useAdminAuth";
import { useGallery } from "../../../../../hooks/useData";
import { Blocks } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { adminEndpoints } from "../../../../../utils/endpoints";
import Image from "next/image";
import Toast from "awesome-toast-component";

const tabOptions = [
  {
    option: "Upload Files",
  },
  {
    option: "Media Library",
  },
];

export default function Gallery() {
  const [selectedTab, setSelectedTab] = useState(tabOptions[0]);

  function handleTabSwitch(index) {
    setSelectedTab(tabOptions[index]);
  }

  return (
    <ManagerLayout title="iSocks | Gallery System">
      <div className="w-full h-full">
        <div className="px-3 space-y-3">
          <div className="flex gap-x-3 items-center mt-2">
            {tabOptions.map((tab, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    selectedTab.option === tab.option
                      ? "border-b-2 border-black font-semibold"
                      : ""
                  } text-xl`}
                  onClick={() => handleTabSwitch(index)}
                >
                  {tab.option}
                </button>
              );
            })}
          </div>
          {selectedTab.option === "Upload Files" ? (
            <UploadMedia />
          ) : (
            <GalleryView />
          )}
        </div>
      </div>
    </ManagerLayout>
  );
}

function UploadMedia() {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const { token } = useAuth();
  const { uploadImageToGallery: endpoint } = adminEndpoints;

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleUpload = async (files) => {
    try {
      new Toast("Uploading Image(s)");

      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      // Make a POST request using Axios
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        new Toast("Image(s) Upload Successful...");
      }
    } catch (error) {
      // Display a toast indicating the upload failure
      new Toast("Error Uploading Images");
      console.error("Error uploading images:", error);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    // Handle the dropped files, e.g., upload or process them
    console.log("Dropped files:", files);
    handleUpload(files);
  };

  const handleButtonClick = () => {
    // Trigger file input click to open the file selection dialog
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`w-full h-[500px] border-dashed border-2 rounded-md flex items-center justify-center relative cursor-pointer ${
        isDragOver ? "bg-gray-200" : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute top-0 h-[500px] w-full z-30 invisible"
        name="image"
        ref={fileInputRef}
        accept="image/*"
        multiple
        onChange={(e) => {
          const files = e.target.files;
          console.log("Selected files:", files);
          handleUpload(files);
        }}
      />
      <div className="flex flex-col items-center justify-center text-center gap-y-5">
        <h3 className="text-xl">Drag Files to Upload</h3>
        <p>Or</p>
        <button
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-white hover:text-black border-black border duration-500"
          onClick={handleButtonClick}
        >
          Upload Media
        </button>
      </div>
    </div>
  );
}

function GalleryView() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, loading } = useGallery();

  const filteredData = data
    ? data.filter((image) =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="w-full border h-[600px] rounded-md">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
                  className={`aspect-w-1 aspect-h-1 h-fit w-fit m-0 p-0 flex items-center justify-center rounded-md hover:cursor-pointer`}
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
