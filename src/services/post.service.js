import axios from "./axios";

export const fetchPublicFeed = async ({ page, refresh }) => {
    return axios.get(
        `http://localhost:3000/api/v0/post?page=${page}&refresh=${refresh}`
    );
};

export const fetchMutualFeed = async ({ page, refresh }) => {
    const token = localStorage.getItem("token");
    return axios.get(
        `http://localhost:3000/api/v0/post/feed?page=${page}&refresh=${refresh}`,
        { headers: { Authorization: token } }
    );
};
