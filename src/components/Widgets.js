import { userState } from "@/atoms/userAtom";
import router from "next/router";
import { BiSearch, BiSelection, BiQuestionMark, BiCube } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import ConnOverview from "./ConnOverview";
import NodeGrid from "./NodeGrid";

export default function Widgets() {
    const currentUser = useRecoilValue(userState);
    const login = () => router.push("/auth/login");

    return (
        <div className=" md:w-[600px] hidden lg:inline ml-8 space-y-5 ">
            <div className=" sticky top-0  py-1.5 z-50 bg-rn-black">
                <div className="flex items-center p-3 rounded-full relative text-white10 w-[90%] xl:w-[75%]">
                    <BiSearch className="h-5 z-50 " />
                    <input
                        className="absolute inset-0 rounded-full pl-11 bg-rn-black focus:shadow-lg focus:border-cyan-400 border-2"
                        type="text"
                        placeholder="Find nodes & posts"
                    />
                </div>
            </div>

            <div className="space-y-3 rounded-xl pt-2 w-[90%] ">
                <h4 className="font-bold text-xl px-4">Connection Overview</h4>

                {currentUser ? (
                    <ConnOverview />
                ) : (
                    <div className=" h-56 bg-white10 rounded-2xl relative flex flex-col justify-center items-center p-5">
                        <BiSelection
                            className="hoverEffect w-14 hover:bg-[#ffffff1a] hover:text-cyan-500"
                            onClick={login}
                        />
                        Please login to generate.
                    </div>
                )}
            </div>
            <div className="space-y-3 pt-2 rounded-xl w-[90%] xl:w-[90%]">
                <h4 className="font-bold text-xl px-4">Recommended Nodes</h4>
                {currentUser ? (
                    <NodeGrid type={"recom"} />
                ) : (
                    <div className=" h-56 bg-white10 rounded-2xl relative flex flex-col justify-center items-center p-5">
                        <BiCube
                            className="hoverEffect w-14 hover:bg-[#ffffff1a] hover:text-[#ef476fe6]"
                            onClick={login}
                        />
                        Please login to generate.
                    </div>
                )}
            </div>
            <div className="space-y-3  pt-2 rounded-xl w-[90%] xl:w-[90%]">
                <h4 className="font-bold text-xl px-4">Random Nodes</h4>
                {currentUser ? (
                    <NodeGrid type={"random"} />
                ) : (
                    <div className=" h-56 bg-white10 rounded-2xl relative flex flex-col justify-center items-center p-5">
                        <BiQuestionMark
                            className="hoverEffect w-14 hover:bg-[#ffffff1a] hover:text-yellow-500"
                            onClick={login}
                        />
                        Please login to generate.
                    </div>
                )}
            </div>
        </div>
    );
}
