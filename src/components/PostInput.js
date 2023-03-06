import { BiFace, BiImages, BiXCircle } from "react-icons/bi";
import { useState, useRef } from "react";
import { createPost } from "@/services/post.service";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/userAtom";

export default function Input() {
    const currentUser = useRecoilValue(userState);
    const [input, setInput] = useState("");
    const currentUser = {};
    const [isMD, setIsMD] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);

    const sendPost = async () => {
        if (loading) return;
        setLoading(true);
        const fd = new FormData();
        fd.append("caption", input);
        fd.append("isMarkdown", isMD);

        if (selectedFile) {
            fd.append("mediaFiles", selectedFile);
        }
        createPost({ formData: fd }).then((res) => console.log(res.data));

        setInput("");
        setSelectedFile(null);
        setLoading(false);
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    function onSignOut() {
        // logout
    }

    return (
        <>
            {currentUser && (
                <div className="flex p-3 space-x-3">
                    <div className="w-full ">
                        <textarea
                            className="w-full border-none focus:ring-0 text-lg bg-white10 tracking-wide min-h-[50px] text-rn-white rounded-2xl "
                            rows="2"
                            placeholder="What's happening?"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        ></textarea>
                        {selectedFile && (
                            <div className="relative">
                                <BiXCircle
                                    onClick={() => setSelectedFile(null)}
                                    className="border-none h-7 w-7 text-black absolute cursor-pointer shadow-md  m-1 rounded-full "
                                />
                                <img
                                    src={selectedFile}
                                    className={`${loading && "animate-pulse"}`}
                                />
                            </div>
                        )}
                        <div className="flex items-center justify-between pt-2.5">
                            {!loading && (
                                <>
                                    <div className="flex gap-2">
                                        <div
                                            className=""
                                            onClick={() =>
                                                filePickerRef.current.click()
                                            }
                                        >
                                            <BiImages className="h-10 w-10 hoverEffect p-2 text-cyan-400 hover:bg-cyan-400" />
                                            <input
                                                type="file"
                                                hidden
                                                ref={filePickerRef}
                                                onChange={addImageToPost}
                                            />
                                        </div>
                                        <BiFace className="h-10 w-10 hoverEffect p-2 text-[#ef476fe6] hover:bg-[#ef476fe6]" />
                                    </div>

                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            onClick={() => setIsMD(!isMD)}
                                            class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Markdown
                                        </span>
                                    </label>

                                    <button
                                        onClick={sendPost}
                                        disabled={!input.trim()}
                                        className="bg-cyan-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                    >
                                        Post Now!
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
