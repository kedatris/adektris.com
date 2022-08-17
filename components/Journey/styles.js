import { css } from "@emotion/css";
import { black, white, yellow } from "@/css/colors";
import {
  vw2,
  vw5,
  vw18,
  vw22,
  vw24,
  vw38,
  vw52,
  vw64,
  vw75,
  vw80,
  vw83,
  vw87,
  vw92,
  vw100,
  vw128,
  vw150,
  vw210,
  vw250,
  vw300,
  vw390,
  vw400,
} from "@/css/size";

export const journeyWrapper = css`
  position: relative;
  background-color: ${black};
  padding: ${vw400} ${vw210} ${vw100};
`;

export const journeyTitle = css`
  font-weight: 800;
  font-size: ${vw52};
  color: ${white};
`;

export const journeyContent = css`
  position: relative;
  margin-top: ${vw92};
`;

export const journeyBoxLeft = css`
  position: relative;
  display: flex;
  justify-content: end;
  width: 45%;
  margin-bottom: ${vw80};
  text-align: right;

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: ${vw24};
    width: ${vw24};
    background-color: ${yellow};
    right: -${vw87};
    border-radius: 50%;
    top: ${vw64};
  }
`;

export const journeyBoxRight = css`
  position: relative;
  display: flex;
  width: 45%;
  margin-left: 55%;
  justify-content: start;
  margin-bottom: ${vw80};

  ::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: ${vw24};
    width: ${vw24};
    background-color: ${yellow};
    left: -${vw83};
    border-radius: 50%;
    top: ${vw64};
  }
`;

export const journeyBoxContent = css`
  color: ${white};
  border: ${vw2} solid ${yellow};
  padding: ${vw38} ${vw24};
  min-width: ${vw390};
  font-weight: 700;
`;

export const journeyBoxTitle = css`
  color: ${white};
  font-size: ${vw18};
`;

export const journeyBoxText = css`
  font-size: ${vw24};
`;

export const journeyLine = css`
  position: absolute;
  border-right: ${vw5} solid ${white};
  right: calc(50% - ${vw5});
  height: calc(100% - ${vw150});
  margin-top: ${vw75};
`;

export const journeyYear = (isRight) => {
  return css`
    color: ${white};
    position: absolute;
    ${isRight
      ? `left: -60%;text-align: right;`
      : `right: -60%;text-align: left;`}
    top: 50%;
    transform: translateY(-50%);
    font-size: ${vw22};
    font-weight: 700;
    opacity: 0.5;
    width: ${vw250};
  `;
};

export const journeyFooter = css`
  background-size: cover;
  height: ${vw300};
  width: 100%;
  position: absolute;
  bottom: -${vw128};
  left: 0;
  right: 0;
`;
