//components
import Navbar from "@/components/ui_elements/navbar";
//images
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {

    return (
        <>
            <Navbar />
            <section className="max-w-[1440px] mx-auto h-screen flex items-center px-3">
                <div className="flex justify-center w-full h-full items-center">
                    <div className="w-2/5">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
                            <div className="w-full flex-1 mt-8">
                                <form>
                                    <input
                                        id="email"
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        autoComplete="given-name"
                                    />
                                    <input
                                        id="password"
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />

                                    <Button className="mt-5 tracking-wide font-semibold text-gray-100 w-full py-7 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mb-3">
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy={7} r={4} />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">Login</span>
                                    </Button>
                                    <span className="text-[#4d4d4d]">Accaccountsingiz yo'qmi <Link className="text-[#000] font-bold" href={"/register"}>Ro'yhatdan o'tish</Link></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}