import axios from "@/services/axios"; // must import from services

export const fetchPublicFeed = ({ page, refresh }) => {
    const token = localStorage.getItem("token");
    return axios.get(`/post?page=${page}&refresh=${refresh}`, {
        headers: { Authorization: token },
    });
};

export const fetchMutualFeed = ({ page, refresh }) => {
    const token = localStorage.getItem("token");
    return axios.get(`/post/feed?page=${page}&refresh=${refresh}`, {
        headers: { Authorization: token },
    });
};

export const fetchPostById = ({ id }) => {
    const token = localStorage.getItem("token");
    return axios.get(`post/${id}`, {
        headers: { Authorization: token },
    });
};

export const fetchComments = ({ id, page }) => {
    const token = localStorage.getItem("token");
    return axios.get(`post/${id}/comment?page=${page}`, {
        headers: { Authorization: token },
    });
};

export const likeUnlike = ({ id }) => {
    const token = localStorage.getItem("token");
    return axios.post(
        `/post/${id}/like-unlike`,
        {},
        { headers: { Authorization: token } }
    );
};
