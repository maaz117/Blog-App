import axiosInstance from "../config/axios";

const deleteService = async (ID) => {
    const response = await axiosInstance.delete(`/blogs/${ID}`);
    return response?.data;
};

export default deleteService;