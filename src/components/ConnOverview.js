import React from "react";

function ConnOverview() {
    return (
        <div className=" h-80 bg-white10 rounded-2xl relative flex flex-col justify-between p-5">
            <div className="flex flex-row justify-between">
                <span className="absolute h-1 my-8 bg-[#555555] w-4/5 rounded-full"></span>
                <span className="absolute w-1 mx-8 bg-[#555555] h-1/3 rounded-full translate-y-1/3 right-4"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
            </div>
            <div className="flex flex-row justify-center">
                <span className="absolute h-1 my-8 bg-[#555555] w-full rounded-full"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
            </div>
            <div className="flex flex-row justify-between">
                <span className="absolute w-1 mx-8 bg-[#555555] h-1/3 rounded-full -translate-y-2/3"></span>
                <span className="absolute h-1 my-8 bg-[#555555] w-4/5 rounded-full"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
                <span className="h-16 bg-[#555555] w-16 rounded-full"></span>
            </div>
        </div>
    );
}

export default ConnOverview;
