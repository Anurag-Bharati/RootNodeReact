import { userState } from "@/atoms/userAtom";
import { fetchConnOverview } from "@/services/conn.service";
import React, { useEffect, useId, useState } from "react";
import { useRecoilValue } from "recoil";
import { BiPlus } from "react-icons/bi";
import Tooltip from "./Tooltip";
import Image from "next/image";
function ConnOverview() {
    const currentUser = useRecoilValue(userState);
    const [recentConns, setRecentConns] = useState([]);
    const [oldConns, setOldConns] = useState([]);
    const [count, setCount] = useState(0);
    const reactId = useId();
    useEffect(() => {
        fetchConnOverview()
            .then((res) => {
                setRecentConns(res.data?.data?.recent);
                setOldConns(res.data?.data?.old);
                setCount(res.data?.data?.count);
            })
            .catch((err) => console.err(err));
    }, [currentUser]);
    return (
        <div className=" h-56 bg-white10 rounded-2xl relative flex flex-col justify-between p-5">
            <div className="flex flex-row justify-between">
                <span className="absolute h-1 my-5 bg-[#eeeeee] w-5/6 rounded-full"></span>
                <span className="absolute w-1 mx-5 bg-[#eeeeee] h-1/3 rounded-full translate-y-1/4 right-4"></span>
                <span className="h-10 bg-[#eeeeee] w-10 rounded-full z-10">
                    <Image
                        quality={80}
                        height={64}
                        width={64}
                        className="object-cover rounded-full w-10 h-10"
                        src={`${currentUser?.avatar}`}
                        alt="user-img"
                    />
                </span>
                {oldConns.map((e, i) => (
                    <Tooltip message={e.user.username} key={reactId + i + ":"}>
                        <span className="h-10 bg-[#eeeeee] w-10 rounded-full z-10">
                            <Image
                                quality={80}
                                height={64}
                                width={64}
                                className="object-cover rounded-full w-10 h-10"
                                src={`${e?.user.avatar}`}
                                alt="user-img"
                            />
                        </span>
                    </Tooltip>
                ))}
            </div>
            <div className="flex flex-row justify-center">
                <span className="absolute h-1 my-5 bg-[#eeeeee] w-full rounded-full"></span>
                <Tooltip message="Remaining nodes" invertY={true}>
                    <span className="h-10 bg-[#eeeeee] w-10 rounded-full z-10">
                        <p className="text-center  mt-2 text-rn-black">
                            {count}
                        </p>
                    </span>
                </Tooltip>
            </div>
            <div className="flex flex-row justify-between">
                <span className="absolute w-1 mx-5 bg-[#eeeeee] h-2/6 rounded-full -translate-y-2/3"></span>
                <span className="absolute h-1 my-5 bg-[#eeeeee] w-5/6 rounded-full"></span>

                {recentConns.map((e, i) => (
                    <Tooltip
                        message={e.user.username}
                        invertY={true}
                        key={reactId + i + ":"}
                    >
                        <span className="h-10 bg-[#eeeeee] w-10 rounded-full z-10">
                            <Image
                                priority={true}
                                quality={80}
                                height={64}
                                width={64}
                                className="object-cover rounded-full w-10 h-10"
                                src={`${e?.user.avatar}`}
                                alt="user-img"
                            />
                        </span>
                    </Tooltip>
                ))}
                <span className="h-10 bg-[#eeeeee] w-10 rounded-full z-10 ">
                    <button className="rounded-full w-10 h-10 bg-cyan-400 flex justify-center items-center">
                        <BiPlus className="h-10 hoverEffect w-10 hover:bg-cyan-100 hover:text-cyan-500 "></BiPlus>
                    </button>
                </span>
            </div>
        </div>
    );
}

export default ConnOverview;
