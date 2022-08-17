import { css } from "@emotion/css";
import { white, black, yellow } from "@/css/colors";
import {
  vw16,
  vw45,
  vw52,
  vw80,
  vw100,
  vw145,
  vw200,
  vw250,
  vw390,
  vw450,
  vw500,
} from "@/css/size";
import { mediaQuery } from "@/css/media";
import imageWavy from "@/images/wavy.png";

export const aboutWrapper = css`
  position: relative;
  background-color: ${black};
  min-height: 100vh;
  padding: ${vw390} 0 ${vw450};

  ::after {
    content: "";
    position: absolute;
    bottom: ${vw80};
    height: ${vw52};
    width: 100%;
    background: url(${imageWavy.src}) no-repeat center;
    background-size: contain;
  }

  ${mediaQuery(`
    width: 100vh;
  `)}
`;

export const aboutContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

export const aboutTitle = css`
  position: absolute;
  top: ${vw45};
  left: ${vw100};
  font-size: ${vw145};
  font-weight: 800;
  color: ${white};
  opacity: 0.3;
`;

export const aboutBody = css`
  margin-top: ${vw200};
  display: flex;
  align-items: center;
  width: 100%;
`;

export const aboutText = css`
  font-size: ${vw52};
  font-weight: 700;
  color: ${white};
`;

export const aboutSeparator = css`
  font-size: ${vw52};
  color: ${yellow};
  font-weight: 800;
`;

export const aboutDescription = css`
  color: ${white};
  width: ${vw500};
  text-align: center;
  margin-top: ${vw52};
  line-height: 2;
  font-size: ${vw16};
`;

export const imageCode = css`
  height: ${vw80};
  width: ${vw80};
  background-size: contain;
`;

export const imageDesign = css`
  height: ${vw80};
  width: ${vw80};
  background-size: contain;
`;

export const aboutProfile = css`
  text-align: center;
`;

export const aboutProfilePhoto = css`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  height: ${vw250};
  width: ${vw250};
  border-radius: 50%;
`;

export const aboutProfileText = css`
  width: 630px;
  font-size: 16px;
  color: #ffffff;
  margin: 40px auto;
`;
