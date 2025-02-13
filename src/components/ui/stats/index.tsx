import React from "react";
import "./styles.css";
import Typography from "../typography";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import { CheckCircle, Gift, Recycle } from "../../svgs/icons";

interface IProps {
  icon: React.JSX.Element;
  title: string;
  total: number;
  unit?: string;
}

export const Stats = () => {
  const { push } = useRouter();

  const Items: IProps[] = [
    {
      icon: <Gift />,
      title: "TOTAL GIVENS",
      total: 100,
    },
    {
      icon: <CheckCircle />,
      title: "FULFILLED GIVENS",
      total: 80,
    },
    {
      icon: <Recycle />,
      title: "WASTE REPURPOSE",
      total: 200,
      unit: "kg",
    },
  ];
  return (
    <div className="bg-[#E6EBEA80] px-20 py-8 rounded-3xl">
      <div className="flex flex-col gap-16">
        <Typography className="text-black-60 text-4xl" fontWeight="bd">
          Philan Stats
        </Typography>

        <div className="flex gap-3 justify-between items-center w-full px-4">
          {Items?.map((item) => (
            <div key={item.title} className="flex-col gap-3 center">
              <div className="bg-gold w-[72px] h-[72px] rounded-full center">
                <div className="my-auto">{item.icon}</div>
              </div>
              <Typography
                variant="h1"
                className="text-black-60 text-5xl"
                fontWeight="bd"
              >
                {item.total}{item?.unit}
              </Typography>
              <Typography variant="p" fontWeight="md" className="text-xl">
                {item.title}
              </Typography>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            className="!max-w-[300px] w-full h-[70px] rounded-2xl font-semibold"
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
