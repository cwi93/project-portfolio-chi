import styled, { css } from "styled-components";

const LoadImg = () => css`
  .left_image {
    display: flex;
  }

  .right_image {
    display: flex;
  }
`;

export const LoadImgContainer = styled.img`
  ${LoadImg}
`;
