import { BiFace, BiImages, BiXCircle } from "react-icons/bi";
import { useState, useRef } from "react";

export default function Input() {
    const [input, setInput] = useState("");
    const currentUser = {};
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);

    const sendPost = async () => {
        if (loading) return;
        setLoading(true);

        // add post logic

        // get image

        if (selectedFile) {
            // upload file
        }

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
