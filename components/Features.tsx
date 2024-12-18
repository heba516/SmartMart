import { IFeatures } from "@/interfaces";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Features = ({ src: icon, title, desc }: IFeatures) => {
  return (
    <div className="group relative overflow-hidden w-[312px] h-[294px] rounded-[36px] py-7 px-8 shadow-md border-b-8 border-b-primaryRed text-center flex flex-col items-center space-y-5">
      <Image
        className="text-primaryRed child group-hover:-translate-y-1 duration-700"
        src={icon}
        width={115}
        height={115}
        alt="Feature"
      />
      <h3 className="text-xl font-semibold child group-hover:-translate-y-1 duration-700">
        {title}
      </h3>
      <p className="text-xs font-medium text-medGray child group-hover:opacity-0 duration-700">
        {desc}
      </p>
      <Link
        href={"/"}
        className="absolute -bottom-16 h-16 bg-primaryRed w-full text-xl flex items-center justify-center text-white font-semibold child group-hover:bottom-0 duration-300"
      >
        Learn More <MoveRight className="ml-4" />
      </Link>
    </div>
  );
};

export default Features;
