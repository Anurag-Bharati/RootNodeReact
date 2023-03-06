import { useEffect, useId, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import Post from "./Post";
import { fetchPublicFeed } from "@/services/post.service";
import Input from "./PostInput";
export default function Feed() {
    const [posts, setPosts] = useState([]);
    const [hasLiked, setHasLiked] = useState([]);
    const [page, setPage] = useState(2);
    // for SSR + CSH Rendering strategy
    const reactId = useId();

    useEffect(() => {
        fetchPublicFeed({ page: 1, refresh: 1 })
            .then((res) => {
                setPosts(res.data?.data?.feed);
                setHasLiked(res.data?.data?.meta?.isLiked);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                increasePage();
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page]);

    useEffect(() => {
        fetchPublicFeed({ page: page, refresh: 0 })
            .then((res) => setPosts((old) => old.concat(res.data?.data?.feed)))
            .catch((err) => console.log(err));
    }, [page]);

    function increasePage() {
        setPage((x) => x + 1);
    }

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
            <Input />
            {posts.length === 0 ? (
                <div className="progress-bar" />
            ) : (
                <AnimatePresence>
                    {posts.map((post, i) => (
                        <motion.div
                            key={reactId + `${i}:`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.1 > 0.3 ? 0.3 : i * 0.1,
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Post
                                key={post._id}
                                id={post._id}
                                post={post}
                                hasLiked={hasLiked[i]}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            )}
        </div>
    );
}
