import styled, { css } from "styled-components";

const ImgDiv = styled.div`
  display: inline-block;
`;

const LoadImg = () => css`
  /* display: flex; */
  width: 60%;
  object-fit: cover;
  object-position: center;
`;

const LoadImgContainer = styled.img`
  ${LoadImg}
`;

export { ImgDiv, LoadImgContainer };
