import React from "react";
import Slider from "react-slick";
import { Button } from "../ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  };

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative min-h-48">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-48">
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="pt-4">
        <h3 className="text-lg font-semibold mb-2 text-green-90">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-600 text-sm mb-4">{address}</p>

        <div className="flex justify-end items-center  m-3">
          <Button
            // className="!w-[120px]"
            onClick={onClick}
            type="button"
            size="sm"
            variant="outline"
            color="red"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
