import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "@/app/_components/Loader";
import { RenderParams } from "@/app/_components/RenderParams";
import { LoginForm } from "./loginForm";

const LoginPage = () => {
    return (
        <div>
            {/* <RenderParams /> */}
            <div
                className="flex flex-col items-center justify-center py-16 bg-cover"
                style={{
                    backgroundImage:
                        "url('https://source.unsplash.com/featured/?beach,dark')",
                }}
            >
                <div className="bg-white pt-8 pb-12 px-12 shadow-md w-full max-w-[27em] relative">
                    <div className="flex mt-5 mb-12 justify-center w-full">
                        <Image
                            alt="default alt"
                            src={`/assets/images/logo.svg`}
                            width="160"
                            height="160"
                        />
                    </div>
                    <div>
                        {/* <Loader /> */}
                        <div>
                            <h1 className="portal-heading">Sign In</h1>
                            <LoginForm />
                            <p className="mt-4 text-center">
                                Don{"' "}t have an account?{" "}
                                <Link href="/register" className="link">
                                    Create One
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
