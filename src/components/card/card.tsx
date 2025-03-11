import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description?: string; //? buat opsional
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col shadow rounded-t-xl">
      <img
        className="h-[150px] md:h-[258px] rounded-t-xl object-cover"
        src={imgSrc}
        alt={`project ${title}`}
      />
      <div className="py-3 px-6 space-y-2">
        <h1 className="font-semibold md:text-xl">{title}</h1>
        <p className="text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
