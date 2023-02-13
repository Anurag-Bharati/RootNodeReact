import { BiSearch } from "react-icons/bi";
import ConnOverview from "./ConnOverview";
import NodeGrid from "./NodeGrid";

export default function Widgets() {
    const follow = () => {};
    const overview = () => {};
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

                <ConnOverview />
            </div>
            <div className="sticky top-16 space-y-3 pt-2 rounded-xl w-[90%] xl:w-[90%]">
                <h4 className="font-bold text-xl px-4">Recommended Nodes</h4>
                <NodeGrid />
            </div>
            <div className="sticky top-64 space-y-3  pt-2 rounded-xl w-[90%] xl:w-[90%]">
                <h4 className="font-bold text-xl px-4">Random Nodes</h4>
                <NodeGrid />
            </div>
        </div>
    );
}
