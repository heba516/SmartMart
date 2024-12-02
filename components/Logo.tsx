import Image from "next/image";
import React from "react";

export default function Logo() {
    return (
        <div className="space-y-1 text-center mt-16 mb-8">
            <Image
                className="mx-auto"
                src={"/logo.png"}
                width={52}
                height={57}
                alt="logo"
            />
            <h1 className="text-4xl font-bold text-primaryRed leading-9">
                Create account
            </h1>
            <p className="text-medGray text-[12px] font-medium leading-4">
                Sign up to start our free journey
            </p>
        </div>
    );
}
