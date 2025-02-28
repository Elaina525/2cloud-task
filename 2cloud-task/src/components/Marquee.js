import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.jpg",
];

const LogoMarquee = () => {
  return (
    <div className="bg-white py-4">
      <Marquee speed={50} gradient={false} autoFill={true}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative w-16 h-16 mx-14 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
