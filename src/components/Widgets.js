import { BiSearch } from "react-icons/bi";

export default function Widgets() {
    const follow = () => {};
    const overview = () => {};
    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <div className="w-[90%] xl:w-[75%] sticky top-0  py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full relative text-white10">
                    <BiSearch className="h-5 z-50 " />
                    <input
                        className="absolute inset-0 rounded-full pl-11 bg-rn-black focus:shadow-lg focus:border-cyan-400 border-2"
                        type="text"
                        placeholder="Find nodes & posts"
                    />
                </div>
            </div>

            <div className="space-y-3  rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">Connection Overview</h4>

                <button
                    onClick={overview}
                    className="text-cyan-300 pl-4 pb-3 hover:text-cyan-400"
                >
                    Show more
                </button>
            </div>
            <div className="sticky top-16 space-y-3  pt-2 rounded-xl w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">Recommended Nodes</h4>

                <button
                    onClick={follow}
                    className="text-cyan-300 pl-4 pb-3 hover:text-cyan-400"
                >
                    Show more
                </button>
            </div>
        </div>
    );
}
