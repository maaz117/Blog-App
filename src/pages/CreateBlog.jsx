import React from "react";
import { useFormik } from "formik";
import postBlogs from "../hooks/postBlogs";
import blogValidationSchema from "../validations/blogValidationSchema";

const initialValues = {
  title: "",
  content: "",
  author: "",
  category: "",
};

const CreateBlog = () => {
  const { loading, error, createBlog } = postBlogs(); 

  const formik = useFormik({
    initialValues,
    validationSchema: blogValidationSchema,
    onSubmit: async (values) => {
      try {
        await createBlog(values); 
        console.log("Blog created successfully:", values);
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Create Blog
        </h1>

        {error && (
          <div
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
            role="alert"
          >
            {error.message || "An error occurred while creating the blog."}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              placeholder="Enter blog title"
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3 text-gray-800"
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.title}
              </div>
            )}
          </div>

          {/* Content Input */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
              onBlur={formik.handleBlur}
              placeholder="Enter blog content"
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3 text-gray-800 h-32 resize-none"
            />
            {formik.touched.content && formik.errors.content && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.content}
              </div>
            )}
          </div>

          {/* Author Input */}
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              onChange={formik.handleChange}
              value={formik.values.author}
              onBlur={formik.handleBlur}
              placeholder="Enter author name"
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3 text-gray-800"
            />
            {formik.touched.author && formik.errors.author && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.author}
              </div>
            )}
          </div>

          {/* Category Input */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              onBlur={formik.handleBlur}
              placeholder="Enter category"
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3 text-gray-800"
            />
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.485.878 4.747 2.338 6.565l1.662-1.274z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;