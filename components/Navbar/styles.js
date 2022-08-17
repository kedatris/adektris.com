import { css } from "@emotion/css";
import { white, blackLight } from "@/css/colors";
import {
  vw8,
  vw14,
  vw16,
  vw20,
  vw24,
  vw28,
  vw30,
  vw32,
  vw66,
  vw200,
  vw210,
} from "@/css/size";
import iconClose from "@/icons/close.svg";

export const navbar = css`
  position: fixed;
  left: 0;
  right: 0;
  height: ${vw66};
  padding: ${vw16} 0;
  z-index: 2;
  transition: all 1s; ease-in-out;
  transform: translateY(-70px);
`;

export const navbarScroll = css`
  background-color: ${blackLight};
  transition: all 1s; ease-in-out;
`;

export const navList = css`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const navListItem = css`
  margin-right: ${vw32};
  padding: ${vw14} 0;
`;

export const navHome = css`
  font-size: ${vw24};
  font-weight: 700;
  margin-right: ${vw24};
`;

export const sideMenu = css`
  position: absolute;
  left: ${vw24};
  top: 50%;
  height: ${vw30};
  width: ${vw30};
  background-size: contain;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const sideNav = css`
  position: fixed;
  top: 0;
  right: -${vw210};
  bottom: 0;
  width: ${vw200};
  padding: ${vw32} ${vw20};
  background-color: ${white};
  box-shadow: 0 0 ${vw8} rgba(0, 0, 0, 0.32);
`;

export const sideNavShow = css`
  right: 0;
`;

export const sideNavItem = css`
  margin-bottom: ${vw16};

  button {
    margin-top: ${vw32};
  }
`;

export const sideNavClose = css`
  position: absolute;
  right: ${vw16};
  top: ${vw28};
  height: ${vw20};
  width: ${vw20};
  background: url(${iconClose}) no-repeat center;
  background-size: contain;
`;
