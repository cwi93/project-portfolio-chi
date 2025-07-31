import styled, { css } from "styled-components";
import { Theme } from "../contexts/ThemeContext";

interface ThemedProps {
  theme: Theme;
}

const PorfolioChi = css<ThemedProps>`
  font-family: Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro,
    sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  background: ${(props) => props.theme.colors.backgroundGradient};

  min-height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;

  transition: all 0.3s ease;

  padding: 0;

  @media (min-width: 1200px) {
    padding: 0 2rem;
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    font-size: 13px;
  }

  .left_image {
    animation: slideInFromRight 2s ease-in;

    @media (max-width: 768px) {
      animation-duration: 1.5s;
    }
  }

  .right_image {
    float: right;
    animation: slideInFromLeft 2s ease-in;

    @media (max-width: 768px) {
      float: none;
      animation-duration: 1.5s;
    }
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

const PorfolioChiContainer = styled.div<ThemedProps>`
  ${PorfolioChi}
`;

export { PorfolioChiContainer };
