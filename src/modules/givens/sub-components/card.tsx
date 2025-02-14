import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/src/components/ui";
import { Location, ReceiveGift } from "@/src/components/svgs/icons";

interface CardProps {
  title: string;
  description: string;
  address: string;
  images: string[];
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  images,
  onClick,
  address,
}) => {
  const settings = {
    dots: true,
    infinite: true,
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
    <div className="rounded-[20px] max-w-[400px] overflow-hidden transition-transform transform hover:shadow-lg cursor-pointer p-3 bg-white shadow-lg">
      {/* Image Slider Section */}
      <div className="relative min-h-80">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative max-h-[327px] rounded-lg">
              {/* Image */}
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
        <h3 className="text-lg mb-1 font-semibold text-green-90">{title}</h3>
        <div className="flex gap-2 mb-1 h-12">
          <span className="app_card_desc">Description:</span>
          <span className="app_card_desc_text">{description}</span>
        </div>

        {/* Address & Button */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2 w-3/5">
            <div className="w-5 h-5 text-gray-500">
              <Location />
            </div>
            <span className="card_text">{address}</span>
          </div>

          <Button
            className="!w-[180px] font-medium app_claim_btn flex items-center gap-2"
            onClick={onClick}
            type="button"
            size="sm"
            variant="outline"
            color="red"
          >
            <div className="app_claim_btn_icon animate-rotate45">
              <ReceiveGift />
            </div>
            <span className="app_claim_btn_text">Claim Item</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
