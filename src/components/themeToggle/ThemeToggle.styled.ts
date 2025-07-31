import styled from "styled-components";

interface ThemeToggleContainerProps {
  isDark: boolean;
}

const ThemeToggleContainer = styled.div<ThemeToggleContainerProps>`
  position: fixed;
  right: 20px;
  top: 15%;
  transform: translateY(-50%);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 4px;

  &:hover {
    transform: translateY(-50%) scale(1.05);
  }

  @media (min-width: 1200px) {
    right: 5px;
    top: 15%;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    right: 15px;
    top: 18%;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    right: 15px;
    top: 10%;
    padding: 3px;
  }

  @media (max-width: 480px) {
    right: 10px;
    top: 8%;
    padding: 2px;
  }

  @media (max-width: 320px) {
    right: 8px;
    top: 6%;
    padding: 2px;
  }

  @media (orientation: portrait) and (max-width: 768px) {
    top: 8%;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    top: 5%;
    right: 10px;
  }
`;

const ToggleButton = styled.button<ThemeToggleContainerProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.isDark
      ? "linear-gradient(135deg, #ff0088, #240120)"
      : "linear-gradient(135deg, #ffeb3b, #ff9800)"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${(props) => (props.isDark ? "#fff" : "#333")};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: rotate(20deg);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: rotate(20deg) scale(0.95);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.isDark
        ? "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)"
        : "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)"};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
  @media (min-width: 1200px) {
    width: 55px;
    height: 55px;
    font-size: 26px;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    width: 52px;
    height: 52px;
    font-size: 25px;
  }

  @media (max-width: 991px) and (min-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 23px;
  }

  @media (max-width: 767px) and (min-width: 481px) {
    width: 45px;
    height: 45px;
    font-size: 21px;
  }

  @media (max-width: 480px) and (min-width: 361px) {
    width: 42px;
    height: 42px;
    font-size: 19px;
  }

  @media (max-width: 360px) and (min-width: 320px) {
    width: 38px;
    height: 38px;
    font-size: 17px;
  }

  @media (max-width: 319px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }

    &:active {
      transform: scale(0.98);
    }

    &::before {
      transition: none;
    }
  }
`;

const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 767px) and (min-width: 481px) {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 480px) and (min-width: 361px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 360px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export { ThemeToggleContainer, ToggleButton, IconWrapper };
