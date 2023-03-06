import {
    BiMessageSquareDots,
    BiHeart,
    BiTrash,
    BiDotsVerticalRounded,
} from "react-icons/bi";
import Moment from "react-moment";
import { useRouter } from "next/router";
import { useState, useId } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Markdown from "./Markdown";
import { userState } from "@/atoms/userAtom";
import { postIdState } from "@/atoms/modalAtom";
import { likeUnlike } from "@/services/post.service";
export default function Post({ post, id, hasLiked }) {
    const [liked, setLiked] = useState(hasLiked | false);
    const [likeCount, setLikeCount] = useState(post?.likesCount | 0);
    const router = useRouter();
    const [postId, setPostId] = useRecoilState(postIdState);
    const currentUser = useRecoilValue(userState);

    // for SSR + CSH Rendering strategy
    const reactId = useId();

    const likePost = () => {
        if (currentUser) {
            likeUnlike({ id: id })
                .then((res) => {
                    liked
                        ? setLikeCount((old) => old - 1)
                        : setLikeCount((old) => old + 1);
                    setLiked(res.data?.data?.liked);
                })
                .catch((err) => console.error(err));
        } else {
            // signIn();
            router.push("/auth/login");
        }
    };

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
                        onClick={() =>
                            currentUser
                                ? router.push(`/posts/${id}`)
                                : router.push("/auth/login")
                        }
                        className="rounded-lg w-full max-h-80 object-cover overflow-hidden"
                        src={`http://localhost:3000/${media?.url}`}
                        alt="post-image"
                    />
                ))}
            </div>
            {/* icons */}
            <div className="flex justify-left pt-2 pb-2 space-x-4">
                <div className="flex items-center">
                    {liked ? (
                        <BiHeart
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
                            liked && "text-[#ef476fe6]"
                        } text-sm select-none`}
                    >
                        {likeCount}
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
