import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { register } from "@/services/auth.service";
import Image from "next/image";
export default function Register() {
    const router = useRouter();
    const [err, setError] = useState({});
    const emailRef = useRef();
    const pwdRef = useRef();
    const fnameRef = useRef();
    const lnameRef = useRef();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await register({
                email: emailRef.current.value,
                password: pwdRef.current.value,
                fname: fnameRef.current.value,
                lname: lnameRef.current.value,
            });
            if (res.status == 201) router.push("/auth/login");
            else setError("Sorry something went wrong!");
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };
    const loginPage = (e) => {
        e.preventDefault();
        router.push("/auth/login");
    };
    return (
        <section className="bg-rn-black min-h-screen flex items-center justify-center">
            {/*  register container  */}
            <div className="bg-white10 flex rounded-2xl shadow-lg max-w-3xl px-5 py-5 items-center">
                {/* form  */}
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-rn-white">
                        Register
                    </h2>
                    <p className="text-xs mt-4 text-rn-white">
                        Register and claim your unique handle
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <input
                            className="p-2 mt-8 rounded-xl border"
                            ref={fnameRef}
                            placeholder="First name"
                        />
                        <input
                            className="p-2  rounded-xl border"
                            ref={lnameRef}
                            placeholder="Last name"
                        />
                        <input
                            className="p-2  rounded-xl border"
                            ref={emailRef}
                            type="email"
                            placeholder="Email"
                        />

                        <div className="relative">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="password"
                                ref={pwdRef}
                                autoComplete="current-password"
                                placeholder="Password"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="gray"
                                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </div>
                        <p className="text-red-300 text-sm">{err?.message}</p>
                        <button
                            type="submit"
                            className="bg-white10 rounded-xl text-white py-2 hover:scale-105 duration-300"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-5  text-rn-white"></div>

                    <div className="mt-3 text-xs flex justify-between items-center text-rn-white">
                        <p>Already a user?</p>
                        <button
                            onClick={loginPage}
                            className="py-2 px-5  border rounded-xl hover:scale-110 duration-300"
                        >
                            Login
                        </button>
                    </div>
                </div>

                {/* image */}
                <div className="md:block hidden w-1/2">
                    <div className="bg-white10 rounded-2xl">
                        <img
                            className="rounded-2xl opacity-75 scale-75"
                            src="http://localhost:5500/rootnode_w.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
