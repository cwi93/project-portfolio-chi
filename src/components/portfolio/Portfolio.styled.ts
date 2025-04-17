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

  .case-block-title {
    color: #fff;
    font-size: 1.3rem;
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
  padding: 50px 100px;
  border: solid 2px #dfc0eb;
  text-align: center;
  text-transform: uppercase;

  background-image: linear-gradient(#dfc0eb 100% 100%);
  background-size: 200% 1em;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s 0.3s;
  &:hover {
    transition: background-size 0.3s 0.3s, background-position 0.3s;
    background-size: 200% 100%;
    background-position: 100% 100%;
  }
`;

const CaseImage = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export { CaseContainer, CaseAnchor, CaseBlock, CaseImage };
