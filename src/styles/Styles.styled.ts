import styled, { css } from "styled-components";

const PorfolioChi = () => css`
  font-family: Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro,
    sans-serif;
  color: #000;
  background: #240120;
  background: linear-gradient(
    150deg,
    rgba(36, 1, 32, 1) 0%,
    rgba(12, 15, 89, 0.98) 55%,
    rgba(255, 0, 136, 1) 100%
  );

  overflow: hidden;

  .left_image {
    animation: slideInFromRight 2s ease-in;

    @keyframes slideInFromRight {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(0%);
      }
    }
  }

  .right_image {
    float: right;
    animation: slideInFromLeft 2s ease-in;

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(0%);
      }
    }
  }
`;
const PorfolioChiContainer = styled.div`
  ${PorfolioChi}
`;

export { PorfolioChiContainer };
