import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
