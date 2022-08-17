import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ xPos: 0, yPos: 0 });

  const updatePosition = () => {
    setScrollPosition({ xPos: window.scrollX, yPos: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
