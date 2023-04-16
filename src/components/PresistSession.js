import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import axios from "../services/axios";
import { userState } from "../atoms/userAtom";
import { feedScope } from "@/atoms/scopeAtom";

const PresistSession = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setCurrentUser = useSetRecoilState(userState);
    const setScopeState = useSetRecoilState(feedScope);
    useEffect(() => {
        if (isLoading) return;
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const verifySession = async () => {
            try {
                let res = await axios.get("/user/", {
                    headers: { Authorization: token },
                });
                const user = res.data?.user;
                if (user) setScopeState(0);
                setCurrentUser(user);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        token ? verifySession() : setIsLoading(false);
    }, []);

    return <></>;
};

export default PresistSession;
