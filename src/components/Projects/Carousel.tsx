import { useState } from "react";
import CarouselItem from "./CarouselItem";
import boo from "./images/boo.svg";
import mindfullness from "./images/mindfullness.svg";
import coffee from "./images/coffee.svg";
import ams from "../../../images/pictures/ams.png";
import limit from "../../../images/pictures/limit.png";
import mult from "../../../images/pictures/mult.jpeg";
import attendance from "../../../images/pictures/attendance.png";
import underConstruction from "../../../images/graphics/underConstruction.png";
import "./Carousel.css";

export interface ItemType {
  title: string;
  description: string;
  tech: string[];
  link: string;
  video: string;
  icon: string;
}

const items: ItemType[] = [
  {
    title: "Multiple Expressions",
    description: "Django and React app for posting and live streaming DJ sets",
    tech: ["Django", "Django Rest Framework", "React", "AWS"],
    link: "https://multiple-expressions.onrender.com/",
    video: "#",
    icon: mult,
  },
  {
    title: "CS Classroom",
    description: "Django app that improves HS classroom collaboration and comm",
    tech: ["Django", "Django Rest Framework", "AWS", "HTML/CSS"],
    link: "https://github.com/JackPadalino/AMSCSApp",
    video: "#",
    icon: ams,
  },
  {
    title: "Limit",
    description: "Full stack app for tracking user spending and setting goals",
    tech: ["ExpressJS", "ReactJS", "PostgreSQL", "TypeScript"],
    link: "https://github.com/2208-Capstone-Team-3/limit-planner",
    video: "https://www.youtube.com/watch?v=IrHuUIg49OY",
    icon: limit,
  },
  {
    title: "School Admin",
    description:
      "Full Stack app to help NYC school admin track staff attendance",
    tech: ["ExpressJS", "ReactJS", "React/Redux", "PostgreSQL"],
    link: "https://github.com/JackPadalino/TeacherAttendanceApp",
    video: "https://www.youtube.com/watch?v=xYJgEmK5XcQ",
    icon: ams,
  },
];

// // Validation function for ItemType
// function validateItemType(item: ItemType): string[] {
//   const errors: string[] = [];

//   if (item.tech.length !== 4) {
//     errors.push(`Tech array for item "${item.title}" should have 4 elements.`);
//   }

//   if (item.description.length !== 60) {
//     errors.push(
//       `Description for item "${item.title}" should have a length of 60 characters. Currently has a length of ${item.description.length}`
//     );
//   }

//   return errors;
// }

// // Validate all items
// items.forEach((item) => {
//   const validationErrors = validateItemType(item);

//   if (validationErrors.length > 0) {
//     console.error(
//       `Validation errors for item "${item.title}":\n`,
//       validationErrors.join("\n")
//     );
//   }
// });

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
      <div className="carouselImageDataContainer">
        <img className="carouselImage" src={items[activeIndex].icon} />
        <div className="carouselDataContainer">
          <div className="carouselTitleDescriptionContainer">
            <p className="projectTitle">{items[activeIndex].title}</p>
            <p className="projectDescription">
              {items[activeIndex].description}
            </p>
          </div>
          <div className="carouselStackLinksContainer">
            <div className="carouselStackContainer">
              <p className="projectStackLabel">Tech Stack</p>
              <ul className="projectStackContainer">
                {items[activeIndex].tech.map((item, index) => (
                  <li key={index} className="projectTechItem">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="carouselLinksContainer">
              <a
                target="_blank"
                className="itemLink"
                href={items[activeIndex].link}
              >
                Link;
              </a>
              <a
                target="_blank"
                className="itemLink"
                href={items[activeIndex].video}
              >
                Video;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectButtonsContainer">
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
