import React from "react";
import { ItemType } from "./Carousel";

interface CarouselItemProps {
  item: ItemType;
}

export const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <div className="carousel-item-container">
      <img className="carousel-img" src={item.icon} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};

export default CarouselItem;
