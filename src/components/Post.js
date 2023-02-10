import {
    BiMessageAltDots,
    BiHeart,
    BiTrash,
    BiDotsHorizontalRounded,
} from "react-icons/bi";
import Moment from "react-moment";
import { useState, useEffect, useId } from "react";
import { useRouter } from "next/router";

export default function Post({ post, id }) {
    const router = useRouter();
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const currentUser = {};
    // for SSR + CSH Rendering strategy
    const reactId = useId();
    useEffect(
        () => {
            // fetch likes
            //  setLikes(snapshot.docs)
        },
        [
            /**Dependency to watch */
        ]
    );

    useEffect(
        () => {
            // axios
            //     .get(`http://localhost:3000/api/v0/post/${id}/comment`)
            //     .then((x) => console.log(x));
        },
        [
            /**Dependency to watch */
        ]
    );

    useEffect(() => {
        // set like state of user
        // setHasLiked(true);
    }, [likes, currentUser]);

    async function likePost() {
        if (currentUser) {
            if (hasLiked) {
                // remove like
            } else {
                // add like
            }
        } else {
            // signIn();
            router.push("/auth/login");
        }
    }

    async function deletePost() {
        if (window.confirm("Are you sure you want to delete this post?")) {
            // delete post
            router.push("/");
        }
    }

    return (
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
                        className="h-9 w-9 hoverEffect p-2 hover:text-[#ef476fe6] hover:bg-red-100"
                    />
                    <span className={"text-[#ef476fe6]"}> {100}</span>
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
                    className="h-9 w-9 hoverEffect p-2 hover:text-[#ef476fe6] hover:bg-red-100"
                />
            </div>
        </div>
    );
}
