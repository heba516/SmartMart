import React from "react";
import { Button } from "./ui";
import { Icon } from "@iconify/react";

const SignupWithGoogleBtn = () => {
  return (
    <Button
      variant={"outline"}
      className="w-full  h-12 text-base leading-4 font-semibold rounded-lg border-black hover:bg-transparent hover:text-primaryRed hover:border-primaryRed"
    >
      <Icon className="h-6 w-6" icon="devicon:google" />
      Sign up with Google
    </Button>
  );
};

export default SignupWithGoogleBtn;
