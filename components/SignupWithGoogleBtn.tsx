import React from "react";
import { Button } from "./ui";
import { Icon } from "@iconify/react";

const SignupWithGoogleBtn = ({children}) => {
  return (
    <Button
      variant={"outline"}
      className="w-full p-[10px] text-base leading-4 font-semibold rounded-lg border-black"
    >
      <Icon className="h-6 w-6" icon="devicon:google" />
      {children}
    </Button>
  );
};

export default SignupWithGoogleBtn;
