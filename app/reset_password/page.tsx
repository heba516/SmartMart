// import VerificationCode from "@/components/VerificationCode";
import CreateNewPassword from "@/components/CreateNewPassword";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex ">
      {/* <VerificationCode /> */}
      <CreateNewPassword />
      <div className="hidden lg:block w-full relative overflow-hidden">
        <Image
          src={"/vercode.jpg"}
          alt="vercode"
          fill
          className="object-cover scale-[1.5] object-top translate-y-24"
        />
      </div>
    </div>
  );
};

export default page;
