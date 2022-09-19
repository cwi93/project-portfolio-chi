import styled from "styled-components";

const CaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

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
  position: relative;
  padding: 20px;
  flex-grow: 1;
  width: 25%;
`;

const CaseBlock = styled.a`
  position: relative;
  display: flex;
  padding: 50px 100px;
  color: #dfc0eb;
  border: solid 2px #dfc0eb;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
`;

const CaseImage = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export { CaseContainer, CaseAnchor, CaseBlock, CaseImage };
