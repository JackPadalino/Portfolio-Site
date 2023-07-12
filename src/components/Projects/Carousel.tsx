import { useState } from "react";
import CarouselItem from "./CarouselItem";
import boo from "./images/boo.svg";
import mindfullness from "./images/mindfullness.svg";
import coffee from "./images/coffee.svg";
import ams from "../../../images/pictures/ams.png";
import limit from "../../../images/pictures/limit.png";
import attendance from "../../../images/pictures/attendance.png";
import underConstruction from "../../../images/graphics/underConstruction.png";
import "./Carousel.css";

export interface ItemType {
  title: string;
  description: string;
  tech: string[];
  gitHub: string;
  video: string;
  icon: string;
}

const items: ItemType[] = [
  {
    title: "CS Classroom",
    description:
      "Python Django application that allows for better classroom collaboration and communication",
    tech: ["Python", "Django", "HTML", "CSS"],
    gitHub: "https://github.com/JackPadalino/AMSCSApp",
    video: "#",
    icon: ams,
  },
  {
    title: "Limit Financial",
    description:
      "Single page application that allows users to track their spending and set goals",
    tech: [
      "ExpressJS",
      "ReactJS",
      "TypeScript",
      "Node",
      "React/Redux",
      "PostgreSQL",
    ],
    gitHub: "https://github.com/2208-Capstone-Team-3/limit-planner",
    video: "https://www.youtube.com/watch?v=IrHuUIg49OY",
    icon: limit,
  },
  {
    title: "School Attendance",
    description:
      "Single page application to help NYC school admin to track staff attendance/absences and assign coverages",
    tech: ["ExpressJS", "ReactJS", "Node", "React/Redux", "PostgreSQL"],
    gitHub: "https://github.com/JackPadalino/TeacherAttendanceApp",
    video: "https://www.youtube.com/watch?v=xYJgEmK5XcQ",
    icon: attendance,
  },
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
      {/* <div className="carouselItemsContainer"> */}
      <div className="carouselImgContainer">
        <img className="carousel-img" src={items[activeIndex].icon} />
        <div className="carousel-item-text">
          <p className="itemTitle">{items[activeIndex].title}</p>
          <p className="itemDescription">{items[activeIndex].description}</p>
          <p className="itemStackLabel">Tech Stack</p>
          <ul className="itemStack">
            {items[activeIndex].tech.map((thing) => (
              <li className="itemTech">{thing}</li>
            ))}
          </ul>
          <div className="itemLinks">
            <a
              target="_blank"
              className="itemLink"
              href={items[activeIndex].gitHub}
            >
              GitHub &rarr;
            </a>
            <a
              target="_blank"
              className="itemLink"
              href={items[activeIndex].video}
            >
              Video &rarr;
            </a>
          </div>
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
      {/* </div> */}
    </div>
  );
};

export default Carousel;
