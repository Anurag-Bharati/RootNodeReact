import {
    BiMessageSquareDots,
    BiHeart,
    BiTrash,
    BiDotsVerticalRounded,
} from "react-icons/bi";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";
import { useRouter } from "next/router";
import { userState } from "../atoms/userAtom";

export default function Comment({ comment, commentId, pid }) {
    // for more complex init state use function since param method runs in every call
    const [likes, setLikes] = useState(() => {
        // DUMMY_VALUE
        return [];
    });
    // this runs everytime this component is called.
    const [hasLiked, setHasLiked] = useState(false);
    // const [open, setOpen] = useRecoilState(modalState);
    const [postId, setPostId] = useRecoilState(postIdState);
    const [currentUser] = useRecoilState(userState);
    const router = useRouter();

    // if array has no dependency then its like initState in flutter
    useEffect(() => {
        // fetch likes here
        return () => {
            // clean up method like dispose in flutter
        };
    }, [pid, commentId]);

    useEffect(() => {
        // DUMMY_VALUE
        // For logged in user like state
        setHasLiked();
    }, [likes, currentUser]);

    async function likeComment() {
        if (currentUser) {
            if (hasLiked) {
                // unlike comment
            } else {
                // like comment
            }
        } else {
            // signIn();
            router.push("/auth/signin");
        }
    }

    async function deleteComment() {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            // confirm and delete logic
        }
    }

    return (
        <div className="flex p-3 cursor-pointer bg-white10 my-3 rounded-2xl pl-4">
            {/* user image */}
            <img
                className="h-11 w-11 rounded-full mr-4"
                src={"http://localhost:3000/" + comment?.user?.avatar}
                alt="user-img"
            />
            {/* right side */}
            <div className="flex-1">
                {/* Header */}

                <div className="flex items-center justify-between">
                    {/* post user info */}
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                            {comment?.user.fname + comment?.user.lname}
                        </h4>
                        <span className="text-sm sm:text-[15px]">
                            @{comment?.user.username} -{" "}
                        </span>
                        <span className="text-sm sm:text-[15px] hover:underline">
                            <Moment fromNow>{comment?.createdAt}</Moment>
                        </span>
                    </div>

                    <BiDotsVerticalRounded className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
                </div>

                {/* post text */}

                <p className=" text-[15px sm:text-[16px] mb-2">
                    {comment?.comment}
                </p>

                {/* icons */}

                <div className="flex justify-between p-2">
                    <div className="flex items-center">
                        {hasLiked ? (
                            <BiHeart
                                onClick={likeComment}
                                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
                            />
                        ) : (
                            <BiHeart
                                onClick={likeComment}
                                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
                            />
                        )}
                        {comment?.likes > 0 && (
                            <span
                                className={`${
                                    hasLiked && "text-red-600"
                                } text-sm select-none`}
                            >
                                {" "}
                                {comment?.likes}
                            </span>
                        )}
                        {currentUser?._id === comment?.user._id && (
                            <BiTrash
                                onClick={deleteComment}
                                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
