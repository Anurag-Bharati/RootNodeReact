import React from "react";

export default function Tooltip({ message, children, invertY }) {
    return (
        <div className="group relative flex">
            {children}
            <span
                className={`absolute scale-0 z-10 ${
                    invertY ? "bottom-4 -right-10" : "top-4 -left-10"
                } transition-all rounded-full bg-rn-black p-2 text-xs text-white group-hover:scale-100 text-center`}
            >
                {message}
            </span>
        </div>
    );
}
