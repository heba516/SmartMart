import React from "react";
import InputField from "./InputField";

export default function ResetPassword() {
    return (
        <div className="mt-20">
            <div className="space-y-4 text-center mt-8 mb-8 md:px-12">
                <h1 className="text-[36px] font-bold text-primaryRed leading-9">
                    Reset your Password
                </h1>
                <p className="text-medGray text-[16px] font-medium leading-4 px-8">
                    Enter your email address associated with your account and
                    will send you an email instruction to reset
                </p>
            </div>
            <InputField />
        </div>
    );
}
