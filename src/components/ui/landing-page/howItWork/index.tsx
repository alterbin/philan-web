import React from "react";
import Typography from "../../typography";
import Lens from "../../../../../public/media/how-it-works/lens.png";
import Gift from "../../../../../public/media/how-it-works/gift.png";
import HoldPhone from "../../../../../public/media/how-it-works/phone.png";
import Image, { StaticImageData } from "next/image";

interface IProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export const HowItWorks = () => {
  const Items: IProps[] = [
    {
      icon: HoldPhone,
      title: "Post Your Unwanted Items",
      description: "Share your unwanted items with the community.",
    },
    {
      icon: Lens,
      title: "Browse Available Items",
      description: "Find items you need from our community listings.",
    },
    {
      icon: Gift,
      title: "Claim Needed Items",
      description: "Get the items you need by showing interest.",
    },
  ];
  return (
    <div className="my-6">
      <div className="center w-full my-5">
        <Typography variant="h1" fontWeight="bd" className="text-4xl">How It works</Typography>
      </div>

      <div className="flex gap-8 justify-between items-center w-full">
        {Items?.map((item) => (
          <div key={item.title} className="flex-col gap-3 bg-white px-7 py-7 max-w-[406px] max-h-[473px] h-[473px] rounded-2xl">
            <div className="max-w-[346px] max-h-[270px] rounded-full center w-full h-full mb-5">
              <Image src={item.icon} alt="" priority className="w-full h-[270px] object-cover" />
            </div>
            <Typography
              variant="h6"
              className="text-black-60 text-lg"
              fontWeight="sb"
            >
              {item.title}
            </Typography>
            <Typography variant="p" fontWeight="rg" className="">
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
