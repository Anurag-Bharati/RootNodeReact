import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3000/api/v0",
    headers: {
        "Content-type": "application/json",
    },
});
