import { css } from "@emotion/css";
import { white, black, yellow } from "@/css/colors";
import { vw8, vw16, vw32, vw52, vw75, vw100, vw210 } from "@/css/size";

export const mb52 = css`
  margin-bottom: ${vw52};
`;

export const colYellow = css`
  color: ${yellow};
`;

export const overflowHide = css`
  overflow: hidden;
`;

export const headerWrapper = css`
  position: relative;
  height: 100vh;
  background-color: ${black};
`;

export const headerContent = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${vw210};
  text-align: left;
`;

export const headerText = css`
  font-size: ${vw100};
  font-weight: 800;
  line-height: 1.2;
  color: ${white};
  transform: translateY(114px);
`;

export const headerTextSmall = css`
  font-size: ${vw52};
  line-height: 1.2;
  color: ${white};
  transform: translateY(108px);
`;

export const headerScrollWrapper = css`
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 6%;
  height: ${vw75};
`;

export const headerScroll = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${white};
  font-size: ${vw16};
  transform: translateY(-95px);
`;

export const arrowDown = css`
  height: ${vw32};
  width: ${vw32};
  margin-top: ${vw16};
  transform: translateY(-40px);
`;

export const videoWrapper = css`
  position: absolute;
  width: 100%;
  opacity: 0.2;
`;
