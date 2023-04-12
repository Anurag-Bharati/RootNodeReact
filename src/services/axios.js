import axios from "axios";
export default axios.create({
    baseURL: "https://rootnodeapi-production.up.railway.app/api/v0",
    headers: {
        "Content-type": "application/json",
    },
});
