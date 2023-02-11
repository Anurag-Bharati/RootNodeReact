import {
    BiMessageSquareDots,
    BiHeart,
    BiTrash,
    BiDotsVerticalRounded,
} from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import Moment from "react-moment";
import { useRouter } from "next/router";
import { useState, useEffect, useId } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Markdown from "./Markdown";
import { userState } from "@/atoms/userAtom";
import { postIdState } from "@/atoms/modalAtom";

export default function Post({ post, id, hasLiked }) {
    const router = useRouter();
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useRecoilState(postIdState);
    const currentUser = useRecoilValue(userState);
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
    const numImages = post.mediaFiles.length;
    const gridCols = numImages === 2 ? 2 : numImages > 2 ? 3 : 1;
    return (
        <div className="flex-1 pt-3 pl-3 pr-3 cursor-pointer bg-white10 rounded-2xl m-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                {/* Post Header*/}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                    <img
                        className="h-11 w-11 rounded-full mr-2"
                        src={`http://localhost:3000/${post?.owner.avatar}`}
                        alt="user-img"
                    />
                    <div className="flex flex-col space-y-0 ">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                            {post?.owner.fname + " " + post?.owner.lname}
                        </h4>
                        <span className="text-sm sm:text-[15px]">
                            @{post?.owner.username}
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-sm sm:text-[15px] hover:underline">
                        <Moment fromNow>{post?.createdAt}</Moment>
                    </span>
                    {/* dot icon */}
                    <BiDotsVerticalRounded className="h-9 hoverEffect w-9 hover:bg-cyan-100 hover:text-cyan-500 p-2 ml-2 " />
                </div>
            </div>
            {/* post text */}

            {post?.type === "markdown" ? (
                <Markdown text={post?.caption} />
            ) : (
                <p
                    onClick={() => router.push(`/posts/${id}`)}
                    className=" text-[15px sm:text-[16px] mb-2"
                >
                    {post?.caption}
                </p>
            )}

            <div className={`grid gap-2 grid-cols-${gridCols}`}>
                {post.mediaFiles.map((media, i) => (
                    <img
                        key={reactId + `${i}:`}
                        onClick={() => router.push(`/posts/${id}`)}
                        className="rounded-lg w-full max-h-80 object-cover overflow-hidden"
                        src={`http://localhost:3000/${media?.url}`}
                        alt="post-image"
                    />
                ))}
            </div>
            {/* icons */}
            <div className="flex justify-left pt-2 pb-2 space-x-4">
                <div className="flex items-center">
                    {hasLiked ? (
                        <BsHeart
                            onClick={likePost}
                            className="h-9 w-9 hoverEffect p-2 mr-2 text-[#ef476fe6] hover:bg-red-100"
                        />
                    ) : (
                        <BiHeart
                            onClick={likePost}
                            className="h-9 w-9 hoverEffect p-2 mr-2  hover:text-[#ef476fe6] hover:bg-red-100"
                        />
                    )}

                    <span
                        className={`${
                            hasLiked && "text-[#ef476fe6]"
                        } text-sm select-none`}
                    >
                        {post?.likesCount}
                    </span>
                </div>
                <div className="flex items-center select-none ">
                    <BiMessageSquareDots
                        onClick={() => {
                            if (!currentUser) {
                                // signIn();
                                router.push("/auth/signin");
                            } else {
                                // comment page
                            }
                        }}
                        className="h-9 w-9 hoverEffect p-2 mr-2 hover:text-sky-500 hover:bg-sky-100"
                    />

                    <span className="text-sm">{post?.commentsCount}</span>
                </div>
                {currentUser?._id === post?.owner._id && (
                    <BiTrash
                        onClick={null}
                        className="h-9 w-9 hoverEffect p-2 hover:text-[#ef476fe6] hover:bg-red-100"
                    />
                )}
            </div>
        </div>
    );
}
