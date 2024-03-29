import { BiArrowToLeft } from "react-icons/bi";
import Head from "next/head";
import Post from "@/components/Post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Comment from "@/components/Comment";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/userAtom";
import { fetchComments, fetchPostById } from "@/services/post.service";

export default function PostPage() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);
    const [hasLiked, setHasLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentLiked, setCommentLiked] = useState([]);
    const [commentsPage, setCommentsPage] = useState(1);
    const currentUser = useRecoilValue(userState);

    // get the post data

    useEffect(() => {
        fetchPostById({ id: id })
            .then((res) => {
                setPost(res.data?.data?.post);
                setHasLiked(res.data?.data?.hasLiked);
            })
            .catch((err) => console.error(err));
    }, [id]);

    useEffect(() => {
        fetchComments({ id: id, page: commentsPage }).then((res) => {
            setComments(res.data?.data?.comments);
            setCommentLiked(res.data?.data?.meta?.isLiked);
        });
    }, [currentUser]);

    // get comments of the post

    useEffect(() => {
        //  setComments()
    }, [id]);

    return (
        <div>
            <Head>
                <title>PostPage</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex min-h-screen mx-auto bg-rn-black text-rn-white">
                <div className="xl:ml-[370px]  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
                    <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-rn-black text-rn-white ">
                        <div
                            className="hoverEffect"
                            onClick={() => router.push("/")}
                        >
                            <BiArrowToLeft className="h-5 " />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                            Back To Home
                        </h2>
                    </div>

                    {post && <Post id={id} post={post} hasLiked={hasLiked} />}
                    {comments.length > 0 && (
                        <div className="">
                            <AnimatePresence>
                                {comments.map((comment) => (
                                    <motion.div
                                        key={comment._id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Comment
                                            key={comment.id}
                                            commentId={comment.id}
                                            originalPostId={id}
                                            comment={comment}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
