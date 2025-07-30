/* ============================================
   LOAD IMAGE STYLED COMPONENTS
   ============================================ */

import styled, { css } from "styled-components";

/* ============================================
   IMAGE CONTAINER
   ============================================ */

const ImgDiv = styled.div`
  width: 100%;
  display: flex;

  /* Right-aligned elements */
  .right {
    float: right;
    margin-left: auto;
  }
`;

/* ============================================
   IMAGE STYLING
   ============================================ */

/* Base image styling function */
const LoadImg = () => css`
  width: 60%;
  flex: 1 1 100%;
`;

/* Styled image component */
const LoadImgContainer = styled.img`
  ${LoadImg}
`;

/* ============================================
   EXPORTS
   ============================================ */

export { ImgDiv, LoadImgContainer };
