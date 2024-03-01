import axios from "axios";
import { useState, useRef } from "react";
import useAuth from "../../../hooks/useAdminAuth";
import Toast from "awesome-toast-component";

export function UploadMedia({ endpoint, title, nextPage }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const { token } = useAuth();


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
      console.log("Upload Triggered...")
      new Toast("Uploading Image(s)");
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("productImages", files[i]);
      }

      // Make a POST request using Axios
      const response = await axios.patch(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        new Toast("Image(s) Uploaded Successfully");
        nextPage();
      }
    } catch (error) {
      // Display a toast indicating the upload failure
      new Toast(
        "Upload Failed... Seems something is broken...Please Try Again later"
      );
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
    <>
      <h3 className="font-semibold text-2xl text-center">{title}</h3>
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
    </>
  );
}
