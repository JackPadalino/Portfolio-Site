import { useEffect, useRef } from "react";
import driveInSign1 from "../../../images/graphics/driveInSign.png";
import driveInSign2 from "../../../images/graphics/driveInSign3.png";
import "./DriveIn.css";

const DriveIn = () => {
  const driveInRef1 = useRef<HTMLImageElement>(null);
  const driveInRef2 = useRef<HTMLImageElement>(null);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("driveInStart")) {
        entry.target.classList.remove("driveInStart");
        entry.target.classList.add("driveInTranslate");
      }
      observer.unobserve(entry.target);
    }
  };

  const driveInOptions = {
    root: null,
    threshold: 0.5,
  };

  useEffect(() => {
    const driveInObserver = new IntersectionObserver(
      observerCallback,
      driveInOptions
    );
    if (driveInRef1.current) {
      driveInObserver.observe(driveInRef1.current as Element);
    }
    if (driveInRef2.current) {
      driveInObserver.observe(driveInRef2.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="driveInMainContainer">
      <img
        id="driveInSign2"
        className="driveInStart"
        ref={driveInRef2}
        src={driveInSign2}
      />
      <img
        id="driveInSign1"
        className="driveInStart"
        ref={driveInRef1}
        src={driveInSign1}
      />
    </div>
  );
};

export default DriveIn;
