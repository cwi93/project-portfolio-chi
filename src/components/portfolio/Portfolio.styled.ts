import styled from "styled-components";

const CaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  h1 {
    color: #dfc0eb;
    text-shadow: 1px 1px #9c86a4;
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

  .case-block-description {
    text-transform: none;
    display: none;
  }

  .case-block-role {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.3rem;
  }

  @-webkit-keyframes float-up {
    100% {
      -webkit-transform: translateY(-25%);
    }

    50% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
  }

  @-webkit-keyframes float-bottom-to-top {
    100% {
      -webkit-transform: translateY(-15%);
    }

    50% {
      -webkit-transform: translateY(-15%);
      transform: translateY(-15%);
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
  min-height: 200px;
  padding: 50px 100px;
  border: solid 2px #dfc0eb;
  text-align: center;

  background-image: linear-gradient(#dfc0eb 100% 100%);
  background-size: 200% 1em;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s 0.3s;
  &:hover {
    transition: background-size 0.3s 0.3s, background-position 0.3s;
    background-size: 200% 100%;
    background-position: 100% 100%;

    .logo-hover-floating {
      display: block;
      animation: float-up 5s;
    }

    .case-block-description {
      display: block;
      color: #fff;
      position: relative;
      top: 40px;

      animation: float-bottom-to-top 5s;
    }
  }
`;

const CaseImage = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  z-index: 1;
`;

export { CaseContainer, CaseAnchor, CaseBlock, CaseImage };
