import { useState } from "react";
import putService from "../services/putService";

function updateBlogs() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateBlogData = async (Id, updatedData) => {
        setLoading(true);
        try {
            await putService(Id, updatedData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, updateBlogData };
}

export default updateBlogs;