import { css } from "@emotion/css";
import { black, white, yellow } from "@/css/colors";
import { vw14, vw16, vw24, vw32, vw45, vw52, vw100, vw150 } from "@/css/size";
import { mediaQuery } from "@/css/media";

export const footerWrapper = css`
  position: relative;
  padding: ${vw150} 0 ${vw24};
  background: ${black};
  color: ${white};

  ${mediaQuery(`
    width: 100vh;
  `)}
`;

export const footerNote = css`
  position: relative;
  padding-top: ${vw24};
  font-size: ${vw14};
  text-align: center;
`;

export const footerInfo = css`
  position: relative;
  margin-bottom: ${vw100};
  margin: 0 auto ${vw100};

  h3 {
    color: ${white};
    text-align: center;
    font-size: ${vw24};
    margin-bottom: ${vw45};
  }
`;

export const footerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
`;

export const iconWrapper = css`
  display: flex;
  height: ${vw52};
  width: ${vw52};
  margin: 0 ${vw16};
  background-color: ${yellow};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const iconLinkedin = css`
  position: relative;
  display: inline-block;
  height: ${vw32};
  width: ${vw32};
  background-size: contain;
`;

export const iconInstagram = css`
  position: relative;
  display: inline-block;
  height: ${vw45};
  width: ${vw45};
  background-size: contain;
`;

export const iconFacebook = css`
  position: relative;
  display: inline-block;
  height: ${vw45};
  width: ${vw45};
  background-size: contain;
`;
