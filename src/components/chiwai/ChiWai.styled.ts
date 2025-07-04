import styled from "styled-components";
import ImgDiv from "../../components/loadImage/LoadImage";

const ChiWaiContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
`;

const ChiWaiIntro = styled.div`
  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
  }

  .one_sentence {
    font-weight: bold;
  }

  @media only screen and (max-width: 769px) {
    width: 100%;
    padding: 0 24px;
  }
  @media only screen and (min-width: 769px) {
    width: 46%;
    padding-left: 24px;
  }

  color: #fff;
  font-size: 1.8rem;

  h1,
  p {
    width: 100%;
  }
`;

const ChiWaiImage = styled.div`
  @media only screen and (max-width: 769px) {
    width: 100%;
    height: 300px;
  }
  @media only screen and (min-width: 769px) {
    width: 50%;
    padding-left: 24px;
  }
`;

const ChiWaiImportImage = styled(ImgDiv)`
  width: 45%;

  @media only screen and (max-width: 769px) {
    height: 300px;
    object-fit: cover;
  }
`;

const ScrollDown = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-content: center;

  * {
    margin: 0;
    padding: 0;
  }

  .arrow {
    border: solid #fff;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 0 40px 40px 0;
    animation: move 3s ease-in-out;
    animation-iteration-count: infinite;
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
    display: none;
  }
`;

export {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
};
