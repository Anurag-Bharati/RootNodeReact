import axios from "./axios";

export const fetchConnOverview = async () => {
    const token = localStorage.getItem("token");
    return axios.get(`/conn/old-recent`, {
        headers: { Authorization: token },
    });
};

export const fetchRecomm = async () => {
    const token = localStorage.getItem("token");
    return axios.get(`/conn/recom`, {
        headers: { Authorization: token },
    });
};

export const fetchRandom = async () => {
    const token = localStorage.getItem("token");
    return axios.get(`/conn/random`, {
        headers: { Authorization: token },
    });
};
