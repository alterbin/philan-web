import React from "react";
import { Button } from "../ui";
import { useModals } from "@/src/contexts/modals";

interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
  const { setModals } = useModals();

  const handleOpen = () => {
    setModals((prev) => ({ ...prev, show: true }));
  };
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        className="!w-[120px]"
        onClick={handleOpen}
        type="button"
        size="sm"
        variant="outline"
        color="red"
      >
        Create Post
      </Button>
    </div>
  );
};

export default Card;
