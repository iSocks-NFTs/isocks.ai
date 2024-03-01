import { TiDelete } from "react-icons/ti";

export function EditProductForm({
  form,
  handleSubmit,
  nextPage,
  previousPage,
  handleKeyDown,
  handleTagCreation,
  handleTagRemove,
  handleChange,
  handleQuantity,
  decreaseSizeQuantity,
  increaseSizeQuantity,
  showSetSize,
  setShowSetSizes,
  sizesSpec,
  setSizesSpec,
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
