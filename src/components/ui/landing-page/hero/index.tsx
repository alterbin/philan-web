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
import routes from "@/src/utils/routes";

export const Hero = () => {
  const { push } = useRouter();

  const imageStyles =
    "w-full h-full object-cover rounded-[20px] transition-all duration-500 animate-pulseGray hover:grayscale-0 hover:animate-shake hover:scale-105";
  return (
    <div className="bg-[#F6F8FA] app_landing_page__px lg:max-h-[90vh] max-h-auto] h-full mt-2 pt-[70px] md:pb-20 pb-10" id={routes.home.hash.home}>
      <div className="grid grid-cols-1 tablet:grid-cols-2 min-h-[555px] tablet:gap-5 gap-10 ">
        <div className="w-[90%] my-auto flex flex-col gap-6">
          <Typography
            variant="h1"
            fontWeight="bd"
            color="main-color"
            className="md:text-5xl text-4xl leading-tight"
          >
            Breathe <span className="text-sec_color">New Life</span> into Old Items.
          </Typography>
          <Typography variant="p" color="main-color" className="md:text-xl text-[15px]">
            Join Philan to give old items a new story.
          </Typography>
          <div className="flex w-full animate-bounce hover:animate-shake">
            <Button
              className="md:!max-w-[300px] !max-w-[260px] w-full h-[65px] !rounded-2xl font-semibold md:text-[18px] text-[15px]"
              onClick={() => push("/givens")}
              type="button"
              // size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="flex gap-3 !w-full tablet:justify-start justify-center">
          <div className=" tablet:max-w-[346px] w-full h-full flex flex-col gap-3">
            <div className=" h-2/3 center w-full">
              <Image src={Junks} alt="" priority className={imageStyles} />
            </div>
            <div className=" center w-full h-1/3">
              <Image src={Pillow} alt="" priority className={imageStyles} />
            </div>
          </div>

          <div className="tablet:max-w-[346px]  h-full flex flex-col gap-3">
            <div className=" h-1/2 center w-full">
              <Image src={Clothes} alt="" priority className={imageStyles} />
            </div>
            <div className="center w-full h-1/2">
              <Image src={Bible} alt="" priority className={imageStyles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
