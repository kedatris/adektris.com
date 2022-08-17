import { css } from "@emotion/css";

export const mediaQuery = (attributes) => {
  return css`
    @media (max-width: 768px) {
      ${attributes}
    }
  `;
};
