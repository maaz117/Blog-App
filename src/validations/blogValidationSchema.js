import * as Yup from "yup";

export const blogValidationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

  content: Yup.string()
    .required("Content is required")
    .min(10, "Content must be at least 10 characters"),

  author: Yup.string()
    .required("Author is required")
    .min(3, "Author name must be at least 3 characters"),

  category: Yup.string().required("Category is required"),
});

export default blogValidationSchema;
