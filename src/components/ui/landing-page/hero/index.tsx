"use client";

import React from "react";
import { Button } from "../../Button";
import { useRouter } from "next/navigation";
import Typography from "../../typography";
import Pillow from "../../../../../public/media/hero/pillow.png";
import Clothes from "../../../../../public/media/hero/clothes.png";
import Bible from "../../../../../public/media/hero/bible.png";
import Junks from "../../../../../public/media/hero/junks.png";
import Image from "next/image";

export const Hero = () => {
  const { push } = useRouter();

  const imageStyles =
    "w-full h-full object-cover rounded-[20px] transition-all duration-500 animate-pulseGray hover:grayscale-0 hover:animate-shake hover:scale-105";
  return (
    <div className="bg-[#F6F8FA] app_landing_page__px max-h-[90vh] h-full mt-2 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[555px] gap-5 ">
        <div className="w-[90%] my-auto flex flex-col gap-6">
          <Typography
            variant="h1"
            fontWeight="bd"
            color="main-color"
            className="text-5xl leading-tight"
          >
            Breathe New Life into Old Items.
          </Typography>
          <Typography variant="p" color="main-color" className="text-xl">
            Join Philan to give old items a new story.
          </Typography>
          <div className="flex w-full">
            <Button
              className="!max-w-[300px] w-full h-[65px] rounded-2xl font-semibold"
              onClick={() => push("/givens")}
              type="button"
              size="sm"
            >
              Get Started
            </Button>
          </div>
              </div>
              
        <div className="flex gap-3">
          <div className="h-full flex flex-col gap-3">
            <div className="max-w-[346px] h-2/3 center w-full">
              <Image src={Junks} alt="" priority className={imageStyles} />
            </div>
            <div className="max-w-[346px]  center w-full h-1/3">
              <Image src={Pillow} alt="" priority className={imageStyles} />
            </div>
          </div>

          <div className="h-full flex flex-col gap-3">
            <div className="max-w-[346px] h-1/2 center w-full">
              <Image src={Clothes} alt="" priority className={imageStyles} />
            </div>
            <div className="max-w-[346px] center w-full h-1/2">
              <Image src={Bible} alt="" priority className={imageStyles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
