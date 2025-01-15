import { useState, useEffect } from "react";
import getService from "../services/getService"; // Assuming this is the service used for API requests

function getBlogById() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogById = async (id) => {
    setLoading(true);
    try {
      const response = await getService(`/blogs/${id}`);
      setBlog(response); 
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { blog, loading, error, fetchBlogById };
}

export default getBlogById;
