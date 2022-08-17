import { useRef, useState, useEffect } from "react";
import { cx } from "@emotion/css";
import { gsap } from "gsap";

import useScrollPosition from "../../hooks/useScrollPosition";
import IconMenu from "@/icons/menu.svg";

// import Menu from "../Menu";

import * as css from "./styles";

const Navbar = () => {
  const navbarRef = useRef();
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const { yPos } = useScrollPosition();

  const handleScrollTo = (elementId) => () => {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  const handleClickMenu = () => {
    setDisplaySideMenu(true);
  };

  const handleCloseMenu = () => {
    setDisplaySideMenu(false);
  };

  useEffect(() => {
    let navbarTween = gsap.to(navbarRef.current, { y: 0, duration: 0.5 });

    navbarTween.delay(1);
  }, []);

  return (
    <div
      className={cx(css.navbar, { [css.navbarScroll]: yPos > 0 })}
      ref={navbarRef}
    >
      {/* {displaySideMenu && (
        <Menu display={displaySideMenu} onClose={handleCloseMenu} />
      )} */}
      <ul className={css.navList}>
        <li className={css.navListItem}>
          <div className={css.sideMenu} onClick={handleClickMenu}>
            <IconMenu />
          </div>
        </li>
        <li className={css.navListItem}>
          <a className={css.navHome} onClick={handleScrollTo("home")}>
            AdekTris.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
