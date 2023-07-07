import { useState } from "react";
import CarouselItem from "./CarouselItem";
import boo from "./images/boo.svg";
import mindfullness from "./images/mindfullness.svg";
import coffee from "./images/coffee.svg";
import "./Carousel.css";

export interface ItemType {
  description: string;
  icon: string;
}

const items: ItemType[] = [
  { description: "Boo!", icon: boo },
  { description: "Focus on your mindfullness", icon: mindfullness },
  { description: "Drink coffee", icon: coffee },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carouselMainContainer">
      {/* <div id="carouselTestDiv1"></div> */}
      <div className="carouselItemsContainer">
        <img className="carousel-img" src={items[activeIndex].icon} />
        <div className="carousel-item-text">
          {items[activeIndex].description}
        </div>
      </div>

      <div className="carouselButtonsContainer">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
