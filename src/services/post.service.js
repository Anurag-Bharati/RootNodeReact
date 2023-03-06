import axios from "./axios";

export const fetchPublicFeed = async ({ page, refresh }) => {
    return axios.get(`/post?page=${page}&refresh=${refresh}`);
};

export const fetchMutualFeed = async ({ page, refresh }) => {
    const token = localStorage.getItem("token");
    return axios.get(`/post/feed?page=${page}&refresh=${refresh}`, {
        headers: { Authorization: token },
    });
};

export const createPost = async ({ formData }) => {
    return axios.post(`http://localhost:3000/api/v0/post`, formData);
};
