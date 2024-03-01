import axios from "axios";
import ManagerLayout from "../../../../../../layouts/manager_layout";
import { useState, useRef } from "react";
import { TiDelete } from "react-icons/ti";
import _debounce from "lodash/debounce";
import Toast from "awesome-toast-component";
import { adminEndpoints } from "../../../../../../utils/endpoints";
import useAuth from "../../../../../../hooks/useAdminAuth";
import { useRouter } from "next/router";

export default function AddProduct() {
  const [form, setForm] = useState({
    productTitle: "",
    productTag: "",
    productTags: [],
    productDescription: "",
    price: 0,
    sizes: [],
    availableQuantity: 0,
  });
  const { token } = useAuth();
  const [sizesSpec, setSizesSpec] = useState([
    {
      size: "X",
      setQuantity: 0,
      active: false,
    },
    {
      size: "XL",
      setQuantity: 0,
      active: false,
    },
    {
      size: "XXL",
      setQuantity: 0,
      active: false,
    },
  ]);
  const [showSetSize, setShowSetSizes] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateInput(form);
    const { addProduct } = adminEndpoints;
    try {
      const response = await axios.post(addProduct, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        new Toast(
          "Successfully Added New Product... Proceed to Set Product Image"
        );

        const { data } = response;

        push("/store/manager/dashboard/products/add/image/" + data.id);
      }
    } catch (error) {
      if (error && error.response) {
        if (error.response.status === 400) {
          new Toast(
            "There's something missing... Please fill the entire form and try again"
          );
        }

        if (error.response.status === 500) {
          new Toast("Server Error... Please Try Again Later");
        }

        if (error.response.status === 409) {
          new Toast(
            "There was a problem creating the Product Record on the Server... Please Try Again Later"
          );
        }
      }

      if (error && !error.response) {
        new Toast(
          "Server is Unavailable at this time... Please Try again later..."
        );
      }
    } finally {
    }
  };

  const increaseSizeQuantity = (index) => {
    setSizesSpec((prevState) => {
      const newState = [...prevState];
      newState[index].setQuantity + 1;
      return newState;
    });

    debounceSumTotal(sizesSpec);
  };

  const decreaseSizeQuantity = (index) => {
    setSizesSpec((prevState) => {
      const newState = [...prevState];
      if (newState[index].setQuantity > 0) {
        newState[index].setQuantity - 1;
      }
      return newState;
    });

    debounceSumTotal(sizesSpec);
  };

  const handleQuantity = (e) => {
    const { id, value } = e.target;

    setSizesSpec((prevState) => {
      const newState = [...prevState];
      newState[id].setQuantity = value;
      return newState;
    });
  };

  const debounceSumTotal = useRef(
    _debounce((data) => {
      sumTotal(data);
    }, 500)
  ).current;

  const sumTotal = (sizesSpec) => {
    const quantity = sizesSpec.reduce(
      (accumulator, object) => accumulator + object.setQuantity,
      0
    );

    setForm((sizesSpec) => ({ ...sizesSpec, availableQuantity: quantity }));
  };

  function validateInput(form) {
    const { productTitle, productDescription, availableQuantity, price } = form;
    const inputs = [productTitle, productDescription, availableQuantity, price];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === "" || inputs[i] === 0) {
        return new Toast("Please Fill All Available Input");
      }
    }
  }

  const handleChange = (e) => {
    const { value, id } = e.target;
    setForm((form) => ({ ...form, [id]: value }));
  };

  const handleTagCreation = (e) => {
    const { value, id } = e.target;
    setForm((form) => ({ ...form, [id]: value }));
    handleKeyDown(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { productTags } = form;
      const newTags = [...productTags, e.target.value];
      setForm((form) => ({
        ...form,
        productTags: newTags,
        productTag: "",
      }));
    }
  };

  const handleTagRemove = (index) => {
    const updatedTags = [...form.productTags];
    updatedTags.splice(index, 1);
    setForm((prevForm) => ({ ...prevForm, productTags: updatedTags }));
  };

  return (
    <ManagerLayout title="iSocks | Add Products">
      <div className="w-full h-full">
        <div className="px-3 space-y-3">
          <AddProductForm
            form={form}
            handleSubmit={handleSubmit}
            handleTagRemove={handleTagRemove}
            handleKeyDown={handleKeyDown}
            handleTagCreation={handleTagCreation}
            handleChange={handleChange}
            handleQuantity={handleQuantity}
            decreaseSizeQuantity={decreaseSizeQuantity}
            increaseSizeQuantity={increaseSizeQuantity}
            showSetSize={showSetSize}
            setShowSetSizes={setShowSetSizes}
            sizesSpec={sizesSpec}
            setSizesSpec={setShowSetSizes}
            key={0}
          />
          ,
        </div>
      </div>
    </ManagerLayout>
  );
}

function AddProductForm({
  form,
  handleSubmit,
  handleKeyDown,
  handleTagCreation,
  handleTagRemove,
  handleChange,
  decreaseSizeQuantity,
  increaseSizeQuantity,
  showSetSize,
  sizesSpec,
}) {
  return (
    <>
      <h3 className="font-semibold text-3xl">Add Product</h3>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-3">
        <div className="flex flex-col w-full">
          <label htmlFor="productTitle">Product Name</label>
          <input
            type="text"
            name="productTitle"
            id="productTitle"
            className="border bg-white rounded-sm h-[55px] md:w-[380px] w-full p-1"
            value={form.productTitle}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            type="text"
            name="productDescription"
            id="productDescription"
            className="border bg-white rounded-sm h-[170px] md:w-[380px] w-full p-1 resize-none"
            value={form.productDescription}
            rows={50}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <label htmlFor="productTag">Product Tags</label>
          <input
            type="text"
            name="productTag"
            id="productTag"
            className="border bg-white rounded-sm h-[55px] md:w-[380px] w-full p-1"
            value={form.productTag}
            onKeyDown={handleKeyDown}
            onChange={handleTagCreation}
          />
          <div className="w-full flex flex-row gap-x-1 items-center">
            Tags :
            {form.productTags.length > 0 ? (
              form.productTags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="px-3 border inline-flex items-center w-fit gap-x-2 rounded-md hover:cursor-pointer border-black"
                    onClick={() => handleTagRemove(index)}
                  >
                    {tag} <TiDelete size={20} />
                  </span>
                );
              })
            ) : (
              <p>These make the products easy to find</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p
            className="underline hover:cursor-pointer"
            onClick={() => new Toast("Feature currently in development...")}
          >
            {showSetSize ? "Close Sizes" : "Set Sizes"}
          </p>
        </div>
        {showSetSize ? (
          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="Sizes">Sizes</label>
            <div className="flex flex-col items-start gap-x-2">
              {sizesSpec.map((sizeSpec, index) => {
                return (
                  <div className="flex items-center gap-x-1" key={index}>
                    <label htmlFor={sizeSpec.size}>{sizeSpec.size}</label>
                    <input
                      type="checkbox"
                      name={sizeSpec.size}
                      className="h-4 w-4"
                      value={sizeSpec.active}
                    />
                    <div className="flex gap-x-3">
                      <button
                        className="h-5 w-5 rounded-full text-white bg-black inline-flex items-center justify-center"
                        onClick={() => decreaseSizeQuantity(index)}
                      >
                        -
                      </button>
                      <span className="">{sizeSpec.setQuantity}</span>
                      <button
                        className="inline-flex items-center justify-center h-5 w-5 text-black bg-white rounded-full border border-black"
                        onClick={() => increaseSizeQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col w-full gap-y-2">
          <label htmlFor="availableQuantity">Available Quantity</label>
          <input
            type="text"
            name="availableQuantity"
            id="availableQuantity"
            className="border bg-white rounded-sm h-[55px] md:w-[380px] w-full p-1"
            value={form.availableQuantity}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="price">Price ($)</label>
          <input
            type="text"
            name="price"
            id="price"
            className="border bg-white rounded-sm h-[55px] md:w-[380px] w-full p-1"
            value={form.price}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[--primary-brand] py-3 rounded-full md:w-[380px] w-full"
        >
          Add Product
        </button>
      </form>
    </>
  );
}
