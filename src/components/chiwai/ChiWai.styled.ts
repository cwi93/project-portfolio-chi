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

  width: 46%;
  color: #dfc0eb;
  font-size: 1.8rem;
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

  .arrow {
    border: solid #dfc0eb;
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
`;

export {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
};
