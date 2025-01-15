import { useState } from "react";
import getService from "../services/getService";

function getBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await getService(`/blogs`);
      setPosts(response); 
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, fetchPosts, setPosts };
}

export default getBlogs;

