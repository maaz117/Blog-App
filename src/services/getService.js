import axiosInstance from "../config/axios";

const getService = async (path) => {
    try {
        const response = await axiosInstance.get(path);
        return response?.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default getService;