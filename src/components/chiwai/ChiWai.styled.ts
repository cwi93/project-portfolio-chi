import styled from "styled-components";
import { Theme } from "../../contexts/ThemeContext";
import ImgDiv from "../../components/loadImage/LoadImage";

interface ThemedProps {
  theme: Theme;
}

const ChiWaiContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 12px 0;

  @media (max-width: 768px) {
    height: auto;
    padding: 8px 0;
  }
`;

const ChiWaiIntro = styled.div<ThemedProps>`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

    @media (max-width: 1200px) {
      font-size: 3.5rem;
    }
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  .one_sentence {
    font-weight: bold;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  p {
    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 769px) {
    width: 100%;
    padding: 0 24px;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 769px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const ChiWaiImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 769px) {
    width: 100%;
    position: relative;
    margin-bottom: 1rem;

    height: 250px;
  }

  @media only screen and (min-width: 769px) {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: auto;
    z-index: 10;
  }
`;

const ChiWaiImportImage = styled(ImgDiv)`
  width: auto;
  height: auto;

  @media only screen and (max-width: 769px) {
    object-fit: cover;

    height: 250px;
    width: 90%;
  }

  @media only screen and (min-width: 769px) {
    height: auto;
    object-fit: contain;

    width: 25vw;
    min-width: 300px;
    max-width: 600px;

    @media (min-width: 1024px) {
      width: 30vw;
      min-width: 400px;
      max-width: 700px;
    }

    @media (min-width: 1200px) {
      width: 35vw;
      min-width: 500px;
      max-width: 800px;
    }
  }
`;

const ScrollDown = styled.div<ThemedProps>`
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  margin-top: 2rem;

  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  * {
    margin: 0;
    padding: 0;
  }

  .arrow {
    border: solid ${(props) => props.theme.colors.text};
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 0 40px 40px 0;

    animation: move 3s ease-in-out infinite;

    @media (max-width: 1024px) {
      border-width: 0 8px 8px 0;
      padding: 0 35px 35px 0;
    }

    @media (max-width: 768px) {
      border-width: 0 6px 6px 0;
      padding: 0 30px 30px 0;
    }
  }

  .arrow:after {
    border-radius: 5px;
  }

  @keyframes move {
    0% {
      transform: translateY(5px) rotate(45deg);
    }
    50% {
      transform: translateY(30px) rotate(45deg);
    }
    100% {
      transform: translateY(5px) rotate(45deg);
    }
  }

  @media only screen and (max-width: 769px) {
    margin-top: -1.5rem;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 3rem;
  }
`;

export {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
};
