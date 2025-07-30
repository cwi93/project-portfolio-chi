import styled, { css } from "styled-components";
import { Theme } from "../contexts/ThemeContext";

// =====================================
// TYPES & INTERFACES
// =====================================
interface ThemedProps {
  theme: Theme;
}

// =====================================
// MAIN PORTFOLIO STYLES
// =====================================
const PorfolioChi = css<ThemedProps>`
  /* TYPOGRAPHY & COLORS */
  font-family: Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.backgroundGradient};
  
  /* LAYOUT & BEHAVIOR */
  min-height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
  
  /* TRANSITIONS */
  transition: all 0.3s ease;
  
  /* BASE FONT SIZING */
  font-size: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
  
  /* RESPONSIVE CONTAINER PADDING */
  padding: 0;
  
  /* Desktop and large screens */
  @media (min-width: 1200px) {
    padding: 0 2rem;
  }
  
  /* Medium screens - tablets */
  @media (max-width: 1199px) and (min-width: 768px) {
    padding: 0 1.5rem;
  }
  
  /* Small screens - mobile */
  @media (max-width: 767px) {
    padding: 0 1rem;
  }
  
  /* Extra small screens */
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }

  /* =====================================
     IMAGE ANIMATIONS & POSITIONING
     ===================================== */
  
  /* LEFT IMAGE STYLING */
  .left_image {
    animation: slideInFromRight 2s ease-in;
    
    /* Responsive animation timing */
    @media (max-width: 768px) {
      animation-duration: 1.5s;
    }
  }

  /* RIGHT IMAGE STYLING */
  .right_image {
    float: right;
    animation: slideInFromLeft 2s ease-in;
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      float: none;
      animation-duration: 1.5s;
    }
  }

  /* =====================================
     ANIMATION KEYFRAMES
     ===================================== */
  
  /* Slide in from right animation */
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

  /* Slide in from left animation */
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

// =====================================
// STYLED COMPONENTS
// =====================================
const PorfolioChiContainer = styled.div<ThemedProps>`
  ${PorfolioChi}
`;

// =====================================
// EXPORTS
// =====================================
export { PorfolioChiContainer };
