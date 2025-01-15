import { useState } from "react";
import postService from "../services/postService";  

function postBlogs() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBlog = async (postData) => {
    setLoading(true);
    try {
      await postService(postData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createBlog };
}

export default postBlogs;