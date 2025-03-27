import styled, { css } from "styled-components";

const ImgDiv = styled.div`
  width: 100%;
  display: flex;

  .right {
    float: right;
    margin-left: auto;
  }
`;

const LoadImg = () => css`
  width: 60%;
`;

const LoadImgContainer = styled.img`
  ${LoadImg}
`;

export { ImgDiv, LoadImgContainer };
