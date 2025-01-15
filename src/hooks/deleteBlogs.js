import { useState } from 'react';
import deleteService from '../services/deleteService';

function deleteBlogs() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteBlogById = async (ID) => {
        setLoading(true);
        try {
            await deleteService(ID);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, deleteBlogById };
}

export default deleteBlogs;