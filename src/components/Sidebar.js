import {
    BiStats,
    BiUser,
    BiHomeAlt,
    BiMessageSquareDots,
} from "react-icons/bi";
import { useRouter } from "next/router";
import SidebarMenuItem from "./SidebarMenuItem";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/userAtom";
import Image from "next/image";

export default function Sidebar() {
    const currentUser = useRecoilValue(userState);
    const router = useRouter();
    function onSignOut() {
        // logout
        localStorage.removeItem("token");
        router.reload();
    }
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/* Logo */}
            <div className=" p-0 xl:px-1">
                <h1 className="hidden font-black text-2xl text-center p-2   xl:flex 2xl:flex">
                    ROOT<span className="text-cyan-400">NODE</span>
                </h1>
            </div>

            {/* Nav */}
            <div className="mt-4 mb-2.5 xl:items-start text-rn-white">
                <SidebarMenuItem text="Home" Icon={BiHomeAlt} active />
                {currentUser && (
                    <>
                        <SidebarMenuItem text="Node" Icon={BiStats} />
                        <SidebarMenuItem
                            text="Message"
                            Icon={BiMessageSquareDots}
                        />
                        <SidebarMenuItem text="Profile" Icon={BiUser} />
                    </>
                )}
            </div>

            {currentUser ? (
                <>
                    <div className="hoverEffect flex items-center justify-start xl:justify-start mt-auto mb-10 ml-2 space-x-2 pr-4">
                        <Image
                            width={64}
                            height={64}
                            onClick={onSignOut}
                            src={`${currentUser?.avatar}`}
                            alt="user-img"
                            className="h-10 w-10 rounded-full xl:mr-2"
                        />
                        <div className="leading-5 hidden xl:inline">
                            <h1 className="font-bold capitalize">
                                {`${currentUser?.fname} ${currentUser?.lname}`}
                            </h1>
                            <p className="text-gray-500">
                                @{currentUser?.username}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <button
                    onClick={() => router.push("/auth/login")}
                    className="bg-cyan-400 text-rn-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline"
                >
                    Login
                </button>
            )}
        </div>
    );
}
