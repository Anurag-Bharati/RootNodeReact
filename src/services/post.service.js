import axios from "./axios";

export const fetchPublicFeed = async ({ page, refresh }) => {
    return axios.get(
        `http://localhost:3000/api/v0/post?page=${page}&refresh=${refresh}`
    );
};
