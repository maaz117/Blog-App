import axiosInstance from "../config/axios";

const postService = async (postData) => {
    const response = await axiosInstance.post("/blogs", postData);
    return response?.data;
};

export default postService;