import styled, { css } from "styled-components";

const PorfolioChi = () => css`
  font-family: Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro,
    sans-serif;
  color: #000;

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

const PortfolioContent = styled.div`
  display: flex;
`;

const PorfolioChiContainer = styled.div`
  ${PorfolioChi}
`;

export { PorfolioChiContainer, PortfolioContent };
