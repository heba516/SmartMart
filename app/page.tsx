import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import { IFeatures } from "@/interfaces";

const features: IFeatures[] = [
  {
    src: "/images/feature2.svg",
    title: "Smart shopping",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur rutrum fames a.",
  },
  {
    src: "/images/feature3.svg",
    title: "Fast Checkout",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur rutrum fames a.",
  },
  {
    src: "/images/feature1.svg",
    title: "Advanced security",
    desc: "Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur rutrum fames a.",
  },
];
export default function Home() {
  return (
    <div>
      <NavBar />

      <section className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold text-primaryRed mb-2">
          Features in Smart
        </h2>
        <p className="text-base font-medium text-medGray">
          Lorem ipsum dolor sit amet consectetur. Sed elementum eget nascetur
          rutrum fames a.
        </p>
        <div className="xl:px-20 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-3 mt-10">
          {features.map((feature, index) => (
            <Features
              key={index}
              src={feature.src}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
