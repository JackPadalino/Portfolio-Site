import React from "react";
import { ItemType } from "./Carousel";

interface CarouselItemProps {
  item: ItemType;
  width: string;
}

export const CarouselItem = ({ item, width }: CarouselItemProps) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.icon} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};

export default CarouselItem;
