import Image from "next/image";
import {
    BiHomeHeart,
    BiStats,
    BiBell,
    BiMessageAltDots,
    BiUser,
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
                <Image
                    width="50"
                    height="50"
                    src="/logo.png"
                    alt="rootnode"
                ></Image>
            </div>

            {/* Nav */}
            <div className="mt-4 mb-2.5 xl:items-start text-rn-white">
                <SidebarMenuItem text="Home" Icon={BiHomeHeart} active />
                <SidebarMenuItem text="Node" Icon={BiStats} />
                <SidebarMenuItem text="Notifications" Icon={BiBell} />
                <SidebarMenuItem text="Message" Icon={BiMessageAltDots} />
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
