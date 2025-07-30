/* ============================================
   HEADER NAVIGATION STYLED COMPONENTS
   ============================================ */

import styled from "styled-components";
import { Theme } from "../../contexts/ThemeContext";

/* ============================================
   TYPES
   ============================================ */

interface ThemedProps {
  theme: Theme;
}

/* ============================================
   NAVIGATION COMPONENT
   ============================================ */

const HeaderNavigation = styled.div<ThemedProps>`
  /* Navigation layout */
  nav {
    position: relative;
    float: right;
    list-style: none;
    display: flex;
    padding-top: 24px;
    
    /* Responsive navigation adjustments */
    @media (max-width: 768px) {
      float: none;
      justify-content: center;
      padding-top: 16px;
      flex-wrap: wrap;
    }
    
    @media (max-width: 480px) {
      padding-top: 12px;
      gap: 0.5rem;
    }
  }
  
  /* Link styling with animated underlines */
  a {
    color: ${props => props.theme.colors.text};
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.4em 0;
    transition: all 0.3s ease;

    /* Responsive spacing and sizing */
    @media (max-width: 768px) {
      margin-right: 16px;
    }
    
    @media (max-width: 640px) {
      margin-right: 12px;
    }
    
    @media (max-width: 480px) {
      margin-right: 8px;
      padding: 0.3em 0;
    }
    
    @media (max-width: 320px) {
      margin-right: 6px;
    }

    @media only screen and (min-width: 769px) {
      margin-right: 15px;
    }
  }

  /* Animated underline effects */
  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15em;
    background-color: ${props => props.theme.colors.text};
    transition: opacity 300ms, transform 300ms;
    
    /* Responsive underline thickness */
    @media (max-width: 768px) {
      height: 0.12em;
    }
    
    @media (max-width: 480px) {
      height: 0.1em;
    }
  }

  /* Slide-in animation setup */
  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  /* Hover and focus states */
  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }
  
  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    a:hover::after {
      transform: translate3d(-100%, 0, 0);
    }
    
    a:active::after {
      transform: translate3d(0, 0, 0);
    }
  }
`;

/* ============================================
   EXPORTS
   ============================================ */

export default HeaderNavigation;
