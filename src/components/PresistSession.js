import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "../services/axios";
import { userState } from "../atoms/userAtom";
import { feedScope } from "@/atoms/scopeAtom";

const PresistSession = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useRecoilState(userState);
    const [scopeState, setScopeState] = useRecoilState(feedScope);
    useEffect(() => {
        const token = localStorage.getItem("token");
        const verifySession = async () => {
            try {
                let res = await axios.get("/user/", {
                    headers: { Authorization: token },
                });
                const user = res.data?.user;
                if (user) setScopeState(1);
                setCurrentUser(user);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        token ? verifySession() : setIsLoading(false);
    }, []);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);
    return <></>;
};

export default PresistSession;
