import React from "react";
import Typography from "../../typography";
import PostIcon from "../../../../../public/media/how-it-works/icon-post.svg";
import Gift from "../../../../../public/media/how-it-works/icon-claim.svg";
import Lens from "../../../../../public/media/how-it-works/icon-browse.svg";
import routes from "@/src/utils/routes";

interface IProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HowItWorks = () => {
  const Items: IProps[] = [
    {
      icon: <PostIcon />,
      title: "Post Your Unwanted Items",
      description: "Share your unwanted items with the community.",
    },
    {
      icon: <Lens />,
      title: "Browse Available Items",
      description: "Find items you need from our community listings.",
    },
    {
      icon: <Gift />,
      title: "Claim Needed Items",
      description: "Get the items you need by showing interest.",
    },
  ];
  return (
    <div className="lg:mt-24" id={routes.home.hash.features}>
      <div className="center w-full mb-5 tablet:mt-5 mt-5 lg:mt-10">
        <Typography variant="h1" fontWeight="bd" className="md:text-4xl text-3xl py-4">
          How It works
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full max-w-7xl mx-auto">
        {Items?.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-10 w-full sm:max-w-[406px] lg:max-w-[380px]"
          >
              
              <div className="w-32 h-40 flex items-center justify-center mb-6 relative z-20">
                {item.icon}
                </div>
            
            <Typography
              variant="h6"
              className="text-black-60 text-lg md:text-start text-center"
              fontWeight="sb"
            >
              {item.title}
            </Typography>
            <Typography variant="p" fontWeight="rg" className="text-center py-1">
              {"  "}{item.description}{"  "}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
