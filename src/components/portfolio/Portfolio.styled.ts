import styled from "styled-components";
import { Theme } from "../../contexts/ThemeContext";

interface ThemedProps {
  theme: Theme;
}

const CaseContainer = styled.div<ThemedProps>`
  display: flex;
  flex-wrap: wrap;
  padding-left: 12px;

  @media (max-width: 768px) {
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (max-width: 480px) {
    padding-left: 4px;
    padding-right: 4px;
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
    width: 100%;
    padding-left: 12px;
    font-size: 3rem;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
      text-align: center;
      padding-left: 0;
    }
  }

  .case-block {
    width: 100%;
    bottom: 0;
    left: 0;
    flex-direction: column;
    white-space: pre-wrap;

    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }

  .case-block-description {
    text-transform: none;
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};

    font-size: 1rem;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 0.85rem;
    }
  }

  .case-block-role {
    text-transform: uppercase;
    color: #090979;
    font-size: 1.3rem;
    margin: 1.5rem;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      margin: 1rem;
      font-size: 1.1rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      margin: 0.8rem;
    }

    @media (max-width: 360px) {
      font-size: 0.9rem;
      margin: 0.6rem;
    }
  }

  @media only screen and (min-width: 769px) {
    .case-block {
      position: absolute;
    }

    .case-block-description {
      opacity: 0;
      padding: 0px 12px;
    }

    .logo-hover-floating {
      animation: float-down 5s forwards;
    }

    .case-block-description {
      animation: float-down-fadeout 2s forwards;
    }
  }

  .modal-dialog-title {
    color: #090979;
    padding-left: 0;

    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  .company-link {
    color: #090979 !important;
    text-decoration: none;

    @media (max-width: 768px) {
      padding: 0.5rem;
      display: inline-block;
    }
  }

  .company-link:hover,
  .company-link:focus {
    text-decoration: underline;
  }

  .skills-map {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      justify-content: center;
      gap: 0.3rem;
    }
  }

  .skill-pill {
    padding: 12px;
    margin-right: 4px;
    border-radius: 25px;
    background-color: #090979;
    color: #fff;
    font-size: 0.9rem;

    @media (max-width: 1024px) {
      padding: 10px;
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      margin-bottom: 5px;
      margin-right: 5px;
      padding: 8px 12px;
      font-size: 0.8rem;
    }
  }

  @-webkit-keyframes float-up {
    100% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }

    50% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
  }

  @-webkit-keyframes float-bottom-to-top {
    100% {
      -webkit-transform: translateY(-10%);
      transform: translateY(-10%);
      opacity: 1;
    }

    50% {
      -webkit-transform: translateY(-10%);
      transform: translateY(-10%);
    }

    0% {
      opacity: 0;
    }
  }

  @-webkit-keyframes float-down {
    100% {
      -webkit-transform: translateY(10%);
      transform: translateY(10%);
    }

    50% {
      -webkit-transform: translateY(10%);
      transform: translateY(10%);
    }

    0% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
  }

  @-webkit-keyframes float-down-fadeout {
    100% {
      -webkit-transform: translateY(10%);
      transform: translateY(10%);
      opacity: 0;
    }

    50% {
      -webkit-transform: translateY(10%);
      transform: translateY(10%);
    }

    0% {
      -webkit-transform: translateY(-10%);
      transform: translateY(-10%);
      opacity: 1;
    }
  }
`;

const CaseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 12px;
`;

const CaseBlock = styled.div`
  @media only screen and (max-width: 769px) {
    padding: 12px;
    flex-grow: 1;
  }

  @media only screen and (min-width: 769px) {
    flex: 1 0 33.3333%;

    @media only screen and (min-width: 1024px) {
      width: 25%;
    }
    padding: 12px;
  }
`;

const CaseAnchor = styled.a`
  display: flex;
  justify-content: center;
  border: solid 2px #fff;
  text-align: center;
  text-decoration: none;

  background: #fff;
  transition: background-size 0.3s, background-position 0.3s 0.3s;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 769px) {
    align-items: center;
    padding: 12px 12px 12px 24px;
  }

  @media only screen and (min-width: 769px) {
    position: relative;
    min-height: 175px;
    padding: 50px 100px;

    @media only screen and (max-width: 1024px) {
      min-height: 150px;
      padding: 50px 100px;
    }

    &:hover {
      transition: background-size 0.3s 0.3s, background-position 0.3s;
      background-size: 200% 100%;
      background-position: 100% 100%;

      @media only screen and (min-width: 1024px) {
        .logo-hover-floating {
          display: flex;
          animation: float-up 5s forwards;
        }

        .case-block-description {
          color: #090979;
          position: relative;

          animation: float-bottom-to-top 2s forwards;
        }
      }
    }
  }
`;

const CaseImage = styled.img`
  max-width: 150px;
  height: 100%;
  padding-bottom: 60px;
  z-index: 1;

  @media only screen and (max-width: 769px) {
    padding-bottom: 10px;
    max-height: 40px;
  }
  @media only screen and (min-width: 769px) {
    max-height: 100px;
  }
`;

export { CaseContainer, CaseWrapper, CaseAnchor, CaseBlock, CaseImage };
