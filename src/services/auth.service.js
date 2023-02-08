import axios from "./axios";

// takes either username or gmail and password and
// sends req to api
export const login = async ({ username, password }) => {
    try {
        const res = await axios.post(
            "/auth/login",
            {
                username: username,
                password: password,
            },
            { withCredentials: true }
        );
        return res.data;
    } catch (err) {
        throw err;
    }
};

// takes user details and
// sends req to api to register user
export const register = async ({ fname, lname, email, password }) => {
    return axios.post("/auth/register", {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
    });
};

// to refresh expired access token
// withCredentials:true sends cookie data
export const refreshAccessToken = async () => {
    try {
        const res = await axios.get("/auth/refresh", { withCredentials: true });
        return res.data;
    } catch (err) {
        throw err;
    }
};
