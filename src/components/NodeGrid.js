import React from "react";

function NodeGrid() {
    return (
        <div className=" rounded-2xl relative flex flex-wrap justify-evenly p-5 ">
            <div className="h-16 bg-[#555555] w-24 rounded-2xl mx-1 box-border">
                <img
                    className="object-cover rounded-2xl "
                    src={`http://localhost:3000/public/anonymous.jpg`}
                    alt="user-img"
                />
            </div>
            <div className="h-24 bg-[#555555] w-24 rounded-2xl mx-1 box-border">
                <img
                    className="object-cover rounded-2xl"
                    src={`http://localhost:3000/public/anonymous.jpg`}
                    alt="user-img"
                />
            </div>
            <div className="h-24 bg-[#555555] w-24 rounded-2xl mx-1 box-border">
                <img
                    className="object-cover rounded-2xl"
                    src={`http://localhost:3000/public/anonymous.jpg`}
                    alt="user-img"
                />
            </div>
            <div className="h-24 bg-[#555555] w-24 rounded-2xl mx-1 box-border">
                <img
                    className="object-cover rounded-2xl"
                    src={`http://localhost:3000/public/anonymous.jpg`}
                    alt="user-img"
                />
            </div>
        </div>
    );
}

export default NodeGrid;
