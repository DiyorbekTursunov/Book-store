"use client"
//components
import Navbar from "@/components/ui_elements/navbar";
//images
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../actions/auth";


interface RegisterType {
    email: string;
    password: string;
}


export default function Login() {
    const [errorMassage, setErrorMassage] = useState<errorMassageType>({ readMore: false, massage: "" })
    const [isLoading, setisLoading] = useState(false)
    const router = useRouter()


    const [userData, setUserData] = useState<RegisterType>({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUserData({
            ...userData,
            [id]: value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setisLoading(true)
        try {
            const data = await login(userData);
            console.log(data);

            const { status, message } = data;
            switch (status) {
                case "200":
                    // toast(message);
                    localStorage.setItem("verification_token", JSON.stringify(data.token))
                    router.push("/");
                    break;
                case "400":
                    setErrorMassage({ readMore: true, massage: data.fullMessage ?? "" });
                    setTimeout(() => {
                        setErrorMassage({ readMore: false, massage: "" });
                    }, 9000);
                    toast(message);
                    break
                case "409":
                case "404":
                case "500":
                    toast(message);
                    break;
            }
        } catch (error) {
            toast("Internet yoq");
            router.push("/");
        }
        setisLoading(false)
    }

    return (
        <>
            <Navbar />
            <section className="max-w-[1440px] mx-auto h-screen flex items-center px-3">
                <ToastContainer />
                <div className="flex justify-center w-full h-full items-center">
                    <div className="w-2/5">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        id="email"
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="email"
                                        placeholder="Email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        autoComplete='email'
                                        required
                                    />
                                    <input
                                        id="password"
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        autoComplete='new-password'
                                        required
                                    />
                                    <Button type="submit" aria-disabled={isLoading ? "true" : "false"} className={`${isLoading ? "cursor-wait" : "cursor-pointer w-full"} mt-5 tracking-wide font-semibold text-gray-100 w-full py-7 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mb-3`}>
                                        Register
                                    </Button>
                                    {errorMassage.readMore && <p className='text-red-500 mb-3'>{errorMassage.massage}</p>}
                                </form>
                                <span className="text-[#4d4d4d]">Already have an account? <Link className="text-[#000] font-bold" href={"/register"}>Register</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}