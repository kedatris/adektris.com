import { useRef, useEffect } from "react";
import { cx } from "@emotion/css";
import { gsap } from "gsap";
import IconArrowDown from "@/icons/arrow-down.svg";

import * as css from "./styles";

const Header = () => {
  const titleRef = useRef();
  const subTitleRef = useRef();
  const scrollRef = useRef();
  const arrowRef = useRef();

  const handleScrollTo = (elementId) => () => {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  useEffect(() => {
    let titleTween = gsap.to(titleRef.current, { y: 0, duration: 0.7 });
    let subTitleTween = gsap.to(subTitleRef.current, { y: 0, duration: 0.5 });
    let scrollTween = gsap.to(scrollRef.current, { y: 0, duration: 0.7 });
    let arrowTween = gsap.to(arrowRef.current, { y: 20, duration: 1.5 });

    subTitleTween.delay(0.5);
    titleTween.delay(1);
    scrollTween.delay(2);
    arrowTween.delay(1.5).repeat(-1);
  }, []);

  return (
    <div id="home" className={css.headerWrapper}>
      <div className={css.headerContent}>
        <div>
          <div className={css.overflowHide}>
            <p className={cx(css.mb52, css.headerTextSmall)} ref={subTitleRef}>
              Hi there,
            </p>
          </div>
          <div className={css.overflowHide}>
            <p className={css.headerText} ref={titleRef}>
              I'm <span className={css.colYellow}>Adek Trisno</span>
            </p>
          </div>
        </div>
      </div>
      <div className={css.headerScrollWrapper}>
        <div className={css.headerScroll} ref={scrollRef}>
          <p>Scroll to get started</p>
          <a
            className={css.arrowDown}
            ref={arrowRef}
            onClick={handleScrollTo("aboutMe")}
          >
            <IconArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
