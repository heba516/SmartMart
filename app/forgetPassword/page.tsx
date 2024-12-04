import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import ResetPassword from "@/components/ResetPassword";

export default function page() {
    return (
        <div className="grid grid-cols-1 px-2 sm:px-16 lg:px-0 lg:grid-cols-2 gap-4 h-screen font-urban">
            <div className="flex flex-col md:px-10 ">
                <div className="w-full px-5 py-6 lg:px-5 md:px-12 md:py-12 flex flex-col">
                    <div className="w-full flex items-center justify-start">
                        <p className="text-base font-medium">
                            <Link className=" flex gap-2" href="/login">
                                <Icon
                                    icon="weui:back-outlined"
                                    width="12"
                                    height="24"
                                />
                                <span className="text-[16px]">
                                    Back to login
                                </span>
                            </Link>
                        </p>
                    </div>
                    <ResetPassword />
                </div>
            </div>
            <div className="relative">
                <Image
                    className="object-cover hidden lg:block"
                    fill
                    src="/forgetPassword.png"
                    alt="person-shopping-with-face-mask"
                />
            </div>
        </div>
    );
}
