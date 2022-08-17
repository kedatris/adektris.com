import { css } from "@emotion/css";
import { white, black, yellow } from "@/css/colors";
import {
  vw2,
  vw5,
  vw8,
  vw14,
  vw16,
  vw32,
  vw38,
  vw52,
  vw100,
  vw128,
  vw140,
  vw210,
  vw300,
  vw470,
  vw600,
  vw780,
} from "@/css/size";
import { mediaQuery } from "@/css/media";

export const mb16 = css`
  margin-bottom: ${vw16};
`;

export const contentWrapper = css`
  position: relative;
  padding: ${vw100} ${vw210};
  margin-bottom: ${vw210};
  margin-top: ${vw300};

  ${mediaQuery(`
    width: 100vh;
  `)}
`;

export const contentContact = css`
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
`;

export const contentLeft = css`
  width: ${vw600};
  margin-right: ${vw128};
  flex-shrink: 0;

  .ant-form-item-control-input-content > input,
  .ant-form-item-control-input-content > textarea {
    padding: ${vw8} ${vw14};
    border: ${vw2} solid ${black};
  }

  .ant-input:focus,
  .ant-input-focused {
    box-shadow: none;
  }
`;

export const contentRight = css`
  width: 100%;

  input,
  textarea {
    padding: ${vw5} ${vw14};
  }
`;

export const contentTitleSmall = css`
  font-size: ${vw38};
  background-color: ${black};
  color: ${yellow};
  padding: ${vw8} ${vw32};
`;

export const contentTitleLarge = css`
  font-weight: 800;
  font-size: ${vw52};
  color: ${black};
  padding: 0 ${vw32};
`;

export const contentImage = css`
  position: absolute;
  height: ${vw780};
  width: ${vw470};
  right: 0;
  background-size: contain;
  bottom: -${vw140};
  opacity: 0.8;
`;

export const contentFooter = css`
  background-size: cover;
  height: ${vw300};
  width: 100%;
  position: absolute;
  bottom: -${vw210};
  left: 0;
  right: 0;
`;

export const buttonSecondary = css`
  background-color: ${white} !important;
  border: ${vw2} solid ${black} !important;
  color: ${black} !important;
`;

export const buttonPrimary = css`
  background-color: ${black} !important;
  color: ${yellow} !important;
`;
