import styled from "styled-components";

const CaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  h1 {
    color: #dfc0eb;
    width: 100%;
    padding-left: 24px;
  }

  .case-block {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #dfc0eb;
    flex-direction: column;
    white-space: pre-wrap;
  }

  .logo-hover-floating {
    animation: float-down 5s forwards;
  }

  .case-block-description {
    opacity: 0;
    text-transform: none;
    text-align: center;
    margin: 0;
    padding: 0px 12px;
    color: #fff;
    animation: float-down-fadeout 2s forwards;
  }

  .case-block-role {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.3rem;
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

const CaseAnchor = styled.div`
  background-color: #fff;
  position: relative;
  padding: 24px;
  flex-grow: 1;
  width: 25%;
`;

const CaseBlock = styled.a`
  position: relative;
  display: flex;
  min-height: 230px;
  padding: 50px 150px;
  border: solid 2px #dfc0eb;
  text-align: center;

  background-image: linear-gradient(#dfc0eb 100% 100%);
  background-size: 200%;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s 0.3s;
  &:hover {
    transition: background-size 0.3s 0.3s, background-position 0.3s;
    background-size: 200% 100%;
    background-position: 100% 100%;

    .logo-hover-floating {
      display: flex;
      animation: float-up 5s forwards;
    }

    .case-block-description {
      color: #fff;
      position: relative;

      animation: float-bottom-to-top 2s forwards;
    }
  }
`;

const CaseImage = styled.img`
  max-height: 100px;
  max-width: 150px;
  height: 100%;
  padding-bottom: 60px;
  z-index: 1;
`;

export { CaseContainer, CaseAnchor, CaseBlock, CaseImage };
