import styled, { css } from "styled-components";

const ImgDiv = styled.div`
  display: inline-block;
`;

const LoadImg = () => css`
  /* display: flex; */
  width: 70%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const LoadImgContainer = styled.img`
  ${LoadImg}
`;

export { ImgDiv, LoadImgContainer };
