import styled from "styled-components";
import ImgDiv from "../../components/loadImage/LoadImage";

const ChiWaiContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0;
`;

const ChiWaiIntro = styled.div`
  width: 46%;
  color: #dfc0eb;
  text-shadow: 1px 1px #9c86a4;
  font-size: 1.5rem;
  padding-left: 24px;

  h1,
  p {
    width: 100%;
  }
`;

const ChiWaiImage = styled.div`
  width: 50%;
  padding-left: 24px;
`;

const ChiWaiImportImage = styled(ImgDiv)`
  width: 45%;
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

  span {
    width: 20px;
    height: 42px;
    background: #dfc0eb;
    border-radius: 5px;
    margin: 6px;
    animation: move 3s ease-in-out;
    animation-iteration-count: 3;
  }

  span:nth-of-type(1) {
    transform: rotate(-45deg);
  }

  span:nth-of-type(2) {
    transform: rotate(45deg);
  }

  @keyframes move {
    0% {
      margin-top: 5px;
    }
    50% {
      margin-top: 30px;
    }
    100% {
      margin-top: 5px;
    }
  }
`;

export {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
};
