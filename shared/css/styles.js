import { css, Global } from "@emotion/react";
import { white, grey } from "./colors";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        min-height: 100%;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      p {
        margin: 0;
      }
      a {
        color: ${white};
        transition: 0.2s all ease-in-out;

        :hover {
          color: ${grey};
        }
      }

      h1,
      h2,
      h3 {
        font-family: "Poppins", sans-serif;
      }

      Button {
        color: ${white};
        height: 40px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        padding: 0 32px;
        transition: 0.2s all ease-in-out;

        :hover,
        :active,
        :focus {
          color: ${white};
        }
      }

      ul {
        list-style-type: none;
      }

      input {
        border-radius: 8px;
        height: 40px;
      }

      textarea {
        border-radius: 8px;
      }
    `}
  />
);
