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
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })}
        </div>

        <div className="carousel-buttons">
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
          </button>
          <div className="indicators">
            {items.map((item, index) => {
              return (
                <button
                  className="indicator-buttons"
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              );
            })}
          </div>
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
    </div>
  );
};

export default Carousel;
