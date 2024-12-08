import { useForm } from "react-hook-form";

import { IoMdPhotos } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddNewProduct() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formSubmitHandler = async (formValues) => {
    try {
      console.log("formValues ka object ", formValues);
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        formValues
      );
      toast.success("added successfully");
      console.log("response ", response);
    } catch (error) {
      console.log("error ", error);
      toast.error(error.message || "Unknown error, please try again!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)} className="container-x">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2
              className={`text-base/7 font-semibold ${
                darkMode ? "text-white" : " text-gray-900"
              }`}
            >
              Profile
            </h2>
            <p
              className={`mt-1 text-sm/6 ${
                darkMode ? "text-white" : "  text-gray-600"
              }`}
            >
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="product-name"
                  className={`block text-sm/6 font-medium  ${
                    darkMode ? "text-white" : "  text-gray-900"
                  }`}
                >
                  Product name
                </label>
                <div className="mt-2">
                  <div
                    className={`"flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 ${
                      errors["product-name"]
                        ? "outline-red-300"
                        : "outline-gray-300"
                    }  focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary`}
                  >
                    <input
                      {...register("product-name", { required: true })}
                      type="text"
                      placeholder="enter your product name"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                  {errors["product-name"] ? (
                    <span className="text-xs text-red-400">
                      This input field is required
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className={`block text-sm/6 font-medium  ${
                    darkMode ? "text-white" : "  text-gray-900"
                  }`}
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("description")}
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="product-photo"
                  className={`block text-sm/6 font-medium ${
                    darkMode ? "text-white" : "  text-gray-900"
                  }`}
                >
                  Product photo
                </label>
                <div
                  className={`mt-2 flex justify-center rounded-lg border border-dashed  px-6 py-10 ${
                    darkMode ? "border-white" : "  border-gray-900/25"
                  }`}
                >
                  <div className="text-center">
                    <IoMdPhotos
                      aria-hidden="true"
                      className="mx-auto size-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary"
                      >
                        <span>Upload a file</span>
                        <input
                          id="product-photo"
                          name="product-photo"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p
                      className={`text-xs/5  ${
                        darkMode ? "text-white" : "  text-gray-600"
                      }`}
                    >
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className={`block text-sm/6 font-medium  ${
                    darkMode ? "text-white" : "  text-gray-900"
                  }`}
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  />
                </div>
                {errors.price && (
                  <span className="text-xs text-red-400">
                    This input field is required
                  </span>
                )}
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="stock"
                  className={`block text-sm/6 font-medium  ${
                    darkMode ? "text-white" : "  text-gray-900"
                  }`}
                >
                  Quantity
                </label>
                <div className="mt-2">
                  <input
                    {...register("stock", { required: true })}
                    type="number"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className={`block text-sm/6 font-medium text-gray-900  ${
                    darkMode ? "text-white" : "  text-gray-900"
                  }`}
                >
                  Category
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    {...register("category")}
                    autoComplete="category-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  >
                    <option>Electronics</option>
                    <option>Cosmetics</option>
                    <option>Grocery</option>
                    <option>Sports</option>
                    <option>Clothings</option>
                  </select>
                  <FaChevronDown
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            to="/"
            type="button"
            className={`text-sm/6 font-semibold ${
              darkMode ? "text-white" : "  text-gray-900"
            }`}
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

// Extra{
//     // https://www.youtube.com/watch?v=ZiXRsi5XiqI

// =======USE=======
// {
// React Hook Form
// React-toastify

// }
// }