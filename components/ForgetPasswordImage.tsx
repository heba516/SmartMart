import Image from "next/image";

const ForgetPasswordLayout = () => {
  return (
    <div className="hidden lg:block w-full relative overflow-hidden">
      <Image
        src={"/vercode.jpg"}
        alt="vercode"
        fill
        className="object-cover scale-[1.5] object-top translate-y-24"
      />
    </div>
  );
};

export default ForgetPasswordLayout;
