"use client";

import React, { useEffect, useState } from "react";
import Typography from "../../typography";
import { Button } from "../../Button";
import { useRouter } from "next/navigation";
import { CheckCircle, Gift, Recycle } from "../../../svgs/icons";
import { motion, useInView } from "framer-motion";

interface IProps {
  icon: React.JSX.Element;
  title: string;
  total: number;
  unit?: string;
}

export const Stats = () => {
  const { push } = useRouter();
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const Items: IProps[] = [
    { icon: <Gift />, title: "TOTAL GIVENS", total: 100 },
    { icon: <CheckCircle />, title: "FULFILLED GIVENS", total: 80 },
    { icon: <Recycle />, title: "WASTE REPURPOSE", total: 200, unit: "kg" },
  ];

  return (
    <div ref={sectionRef} className="bg-[#E6EBEA80] px-20 py-8 mt-8 rounded-3xl">
      <div className="flex flex-col gap-16">
        <Typography className="text-black-60 text-4xl text-center md:text-start" fontWeight="bd">
          Philan Stats
        </Typography>

        <div className="flex md:gap-3 gap-24 md:flex-row flex-col justify-between items-center w-full px-4">
          {Items.map((item) => (
            <div key={item.title} className="flex-col gap-3 center">
              <div className="bg-gold w-[72px] h-[72px] rounded-full center">
                <div className="my-auto">{item.icon}</div>
              </div>
              <Typography
                variant="h1"
                className="text-black-60 text-5xl"
                fontWeight="bd"
              >
                <AnimatedNumber target={item.total} isInView={isInView} />
                {item?.unit}
              </Typography>
              <Typography variant="p" fontWeight="md" className="text-xl text-center">
                {item.title}
              </Typography>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center animate-bounce hover:animate-shake">
          <Button
            className="md:!max-w-[300px] !max-w-[260px] w-full h-[65px] !rounded-2xl font-semibold md:text-[18px] text-[15px]"
            onClick={() => push("/givens")}
            type="button"
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

const AnimatedNumber = ({
  target,
  isInView,
}: {
  target: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 800;
      const interval = 5;
      const step = target / (duration / interval);

      const timer = setInterval(() => {
        start += step;
        setCount(Math.floor(start));
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <motion.span>{count}</motion.span>;
};
