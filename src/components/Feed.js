import {
    BiRefresh,
    BiMessageAltDots,
    BiHeart,
    BiTrash,
    BiDotsHorizontalRounded,
} from "react-icons/bi";
import Moment from "react-moment";
export default function Feed() {
    return (
        <div className="xl:ml-[370px] xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-rn-black">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                    Home
                </h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <BiRefresh className="h-6 w-6" />
                </div>
            </div>

            <div className="flex-1 pt-3 pl-3 pr-3 cursor-pointer bg-white10 rounded-2xl m-2">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    {/* Post Header*/}
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                        <img
                            className="h-11 w-11 rounded-full mr-2"
                            src={null}
                            alt="user-img"
                        />
                        <div className="flex flex-col space-y-0 ">
                            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                                Anurag Bharati
                            </h4>
                            <span className="text-sm sm:text-[15px]">
                                @anuragbharati
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm sm:text-[15px] hover:underline">
                            <Moment fromNow>{Date.now()}</Moment>
                        </span>
                        {/* dot icon */}
                        <BiDotsHorizontalRounded className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
                    </div>
                </div>
                {/* post text */}

                <p onClick={null} className=" text-[15px sm:text-[16px] mb-2">
                    So awesome...
                </p>

                <div className={`grid gap-2 grid-cols-1`}>
                    <img src="https://media.pocketgamer.com/artwork/na-28660-1675375803/brawl-stars-edgar-guide-header.jpg" />
                </div>
                {/* icons */}
                <div className="flex justify-left pt-2 pb-2 space-x-4">
                    <div className="flex items-center">
                        <BiHeart
                            onClick={null}
                            className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
                        />
                        <span className={"text-red-600"}> {100}</span>
                    </div>
                    <div className="flex items-center select-none ">
                        <BiMessageAltDots
                            onClick={null}
                            className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
                        />
                        <span className="text-sm">{100}</span>
                    </div>

                    <BiTrash
                        onClick={null}
                        className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
                    />
                </div>
            </div>
        </div>
    );
}
