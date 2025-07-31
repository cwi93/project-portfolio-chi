import styled from "styled-components";
import { Theme } from "../../contexts/ThemeContext";

interface ThemedProps {
  theme: Theme;
}

const HeaderNavigation = styled.div<ThemedProps>`
  nav {
    position: relative;
    float: right;
    list-style: none;
    display: flex;
    padding-top: 24px;

    @media (max-width: 768px) {
      float: none;
      justify-content: center;
      padding-top: 16px;
      flex-wrap: wrap;
    }
  }

  a {
    color: ${(props) => props.theme.colors.text};
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.4em 0;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      margin-right: 16px;
    }

    @media only screen and (min-width: 769px) {
      margin-right: 15px;
    }
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15em;
    background-color: ${(props) => props.theme.colors.text};
    transition: opacity 300ms, transform 300ms;

    @media (max-width: 768px) {
      height: 0.12em;
    }

    @media (max-width: 480px) {
      height: 0.1em;
    }
  }

  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }

  @media (hover: none) and (pointer: coarse) {
    a:hover::after {
      transform: translate3d(-100%, 0, 0);
    }

    a:active::after {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default HeaderNavigation;
