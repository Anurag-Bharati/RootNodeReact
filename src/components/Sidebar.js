import Image from "next/image";
import {
    BiStats,
    BiUser,
    BiHomeAlt,
    BiMessageSquareDots,
} from "react-icons/bi";
import { useRouter } from "next/router";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
    const router = useRouter();
    function onSignOut() {
        // logout
    }
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/* Logo */}
            <div className=" p-0 xl:px-1">
                <h1 className="font-black text-2xl text-center p-2">
                    ROOT<span className="text-cyan-400">NODE</span>
                </h1>
            </div>

            {/* Nav */}
            <div className="mt-4 mb-2.5 xl:items-start text-rn-white">
                <SidebarMenuItem text="Home" Icon={BiHomeAlt} active />
                <SidebarMenuItem text="Node" Icon={BiStats} />
                <SidebarMenuItem text="Message" Icon={BiMessageSquareDots} />
                <SidebarMenuItem text="Profile" Icon={BiUser} />
            </div>

            <button
                onClick={() => router.push("/auth/login")}
                className="bg-cyan-400 text-rn-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline"
            >
                Login
            </button>
        </div>
    );
}
