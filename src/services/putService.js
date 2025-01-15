import axiosInstance from "../config/axios";

const putService = async (Id, updatedData) => {
    const response = await axiosInstance.put(`/blogs/${Id}`, updatedData);
    return response?.data;
};

export default putService;