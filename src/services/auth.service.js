import axios from "./axios";

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
