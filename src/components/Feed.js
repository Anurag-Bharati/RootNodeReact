import {
    BiRefresh,
    BiMessageAltDots,
    BiHeart,
    BiTrash,
    BiDotsHorizontalRounded,
} from "react-icons/bi";
import Moment from "react-moment";
import Post from "./Post";
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
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    );
}
