import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Tooltip } from "@/src/components/ui";
import { Location, ReceiveGift } from "@/src/components/svgs/icons";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/djlour8oc/image/upload/v1740989561/philan/t66pezzqkte8duatwikq.png";

interface CardProps {
  title: string;
  description: string;
  address: string;
  images: string[];
  onClick: () => void;
  interestCount: number;
}

export const UserIcon: FC<any> = ({
  width = "12",
  height = "14",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 14"
      fill="none"
      {...props}
    >
      <path
        d="M1.33301 12.3376V11.6709C1.33301 9.09357 3.42235 7.00423 5.99967 7.00423M10.6663 12.3376V11.6709C10.6663 9.09357 8.577 7.00423 5.99967 7.00423M5.99967 7.00423C7.47243 7.00423 8.66634 5.81032 8.66634 4.33756C8.66634 2.86481 7.47243 1.6709 5.99967 1.6709C4.52692 1.6709 3.33301 2.86481 3.33301 4.33756C3.33301 5.81032 4.52692 7.00423 5.99967 7.00423Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  images,
  onClick,
  address,
  interestCount,
}) => {
  const displayImages = images && images.length > 0 ? images : [DEFAULT_IMAGE];

  const settings = {
    dots: true,
    infinite: displayImages?.length > 1,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="rounded-[20px]  max-w-auto overflow-hidden transition-transform transform hover:shadow-lg cursor-pointer p-3 bg-white shadow-lg">
      {/* Image Slider Section */}
      <div className="relative min-h-80">
        <Slider {...settings}>
          {displayImages?.map((image, index) => (
            <div key={index} className="relative max-h-[327px] rounded-lg">
              {/* Image */}
              <div className="flex justify-between gap-2 bg-[#000] max-w-[83px] max-h-[35px] py-[8px] px-[10px] z-50 absolute right-4 top-3 text-center text-white rounded-[5px] font-semibold">
                <div className="">
                  <ReceiveGift fill="#fff" />
                </div>
                {interestCount}
              </div>
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-[325px] object-cover max-h-[327px] rounded-lg"
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-[#00000080] rounded-lg"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <h3 className="text-lg mb-1 font-semibold text-green-90 capitalize">
          {title}
        </h3>
        <div className="flex gap-2 mb-1 h-12">
          <span className="app_card_desc">Description:</span>
          <Tooltip
            className="!max-w-max"
            message={<p>{description}</p>}
            displayedText={<span className="app_card_desc_text">{description}</span>}
            position="top"
          />
          
        </div>

        {/* Address & Button */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2 w-3/5">
            <div className="w-5 h-5 text-gray-500">
              <Location />
            </div>
            <Tooltip
              className="max-w-max"
              message={<p>{address}</p>}
              displayedText={<span className="card_text">{address}</span>}
              position="top"
            />
          </div>

          <Button
            className="sm:!w-[180px] !w-[130px] sm:h-auto !h-[45px] font-medium app_claim_btn flex items-center gap-2 px-1"
            onClick={onClick}
            type="button"
            size="sm"
            variant="outline"
            color="red"
          >
            <div className="app_claim_btn_icon animate-rotate45 xs:flex hidden">
              <ReceiveGift />
            </div>
            <span className="app_claim_btn_text sm:!text-base !text-sm">
              Claim Item
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
