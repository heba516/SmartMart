import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import InputField from "@/components/InputField";

export default function page() {
    return (
        <div className="grid grid-cols-1 px-2 sm:px-16 lg:px-0 lg:grid-cols-2 gap-4 h-screen font-urban">
            <div className="flex flex-col px-10 ">
                <div className="w-full px-10 py-12 flex flex-col">
                    <div className="w-full flex items-center justify-start">
                        <p className="text-base font-medium">
                            <Link
                                className=" flex gap-2"
                                href="/forgetPassword"
                            >
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
                    <div className="mt-20">
                        <div className="space-y-4 text-center mt-8 mb-8 px-12">
                            <h1 className="text-[36px] font-bold text-primaryRed leading-9">
                                Reset your Password
                            </h1>
                            <p className="text-medGray text-[16px] font-medium leading-4 ">
                                Enter your email address associated with your
                                account and will send you an email instruction
                                to reset
                            </p>
                        </div>
                        <InputField />
                    </div>
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
